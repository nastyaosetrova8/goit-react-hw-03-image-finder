import PropTypes from 'prop-types';
import { ButtonLoad } from "./Button.styled";

const Button = ({ text, handleClick }) => {
    return (
      <ButtonLoad type="button" onClick={handleClick}>
        {text}
      </ButtonLoad>
    );
  };
  

  Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  export default Button;

