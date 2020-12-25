import './ButtonIcon.css';

const ButtonIcon = ({ image, actionText, hintText }) => (
  <button className="button-icon news-card__button">
    <img className="button-icon__image" src={image} alt={actionText} />
    <div className="button-icon__hint button-icon__hint_visible">{hintText}</div>
  </button>
);

export default ButtonIcon;
