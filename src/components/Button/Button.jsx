import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ type = 'button', children, handleClick }) => {
  return (
    <StyledButton type={type} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
