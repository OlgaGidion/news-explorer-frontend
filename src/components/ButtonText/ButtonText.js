import './ButtonText.css';

const ButtonText = ({ text, onClick }) => (
  <button className="button-text" type="button" onClick={onClick}>{text}</button>
);

export default ButtonText;
