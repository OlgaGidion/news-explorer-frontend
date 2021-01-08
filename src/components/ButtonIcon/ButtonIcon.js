import React from 'react';
import './ButtonIcon.css';

const ButtonIcon = ({ image, actionText, hintText, classMix }) => {
  const [isHover, setIsHover] = React.useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  const hintMod = isHover ? 'button-icon__hint_visible' : '';

  return (
    <button className={`button-icon ${classMix}`} type="button" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <img className="button-icon__image" src={image} alt={actionText} />
      <div className={`button-icon__hint ${hintMod}`}>{hintText}</div>
    </button>
  );
};

export default ButtonIcon;
