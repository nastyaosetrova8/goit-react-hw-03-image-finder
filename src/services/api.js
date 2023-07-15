import axios from "axios";


const instance = axios.create({
    baseURL: 'https://pixabay.com/api/',
});

// let page=1;

export const requestImageGallery = async (searchQuery, page, limit) => {
    const {data} = await instance.get(`?q=${searchQuery}&page=${page}&key=37605527-f3cca5f87cf77f5dd7578dcdc&image_type=photo&orientation=horizontal&per_page=12`);
   console.log(data)
    return data;
}  