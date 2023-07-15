import { Component } from 'react';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import { requestImageGallery } from 'services/api';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';


export class App extends Component {

  state = {
    searchQuery: '',
    gallery: [],
    page: 1,
    isLoading: false,
    error: null,
    modal: { isOpen: false, modalData: null },
    totalHits: null,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      this.state.page !== prevState.page
    ) {
      this.fetchGallery(this.state.searchQuery);
    }
  }

  fetchGallery = async numberPage => {
    const { searchQuery, page } = this.state;
    try {
      this.setState({ isLoading: true });

      const gallery = await requestImageGallery(searchQuery, page);
      this.setState(prevState => {
        return {
          totalHits: gallery.totalHits,
          gallery:
            prevState.page === 1
              ? gallery.hits
              : [...prevState.gallery, ...gallery.hits],
        };
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onFormSubmit = searchQuery => {
    this.setState({ searchQuery: searchQuery, page: 1 });
  };

  onOpenModal = data =>
    this.setState({ modal: { isOpen: true, modalData: data } });

  onCloseModal = () =>
    this.setState({ modal: { isOpen: false, modalData: null } });

  render() {
    const showLoader = this.state.isLoading;
    const showError = this.state.error;
    return (
      <div>
        <Searchbar onFormSubmit={this.onFormSubmit} />

        {showLoader && (
          <div>
            <Loader />
          </div>
        )}

        {showError && (
          <div>
            <p>Opps, some error occured... Error: {this.state.error}</p>
          </div>
        )}

        {this.state.gallery && <ImageGallery
      onOpenModal={this.onOpenModal}
      images={this.state.gallery}
      />}

        {this.state.modal.isOpen && (
          <Modal
            onCloseModal={this.onCloseModal}
            modalData={this.state.modal.modalData}
          />
        )}

        {this.state.gallery.length > 0 &&
          this.state.gallery.length < this.state.totalHits && (
            <Button text="Load more" handleClick={this.loadMore} />
          )}
      </div>
    );
  }
}
