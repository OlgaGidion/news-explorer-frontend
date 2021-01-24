import React from 'react';
import './ButtonIcon.css';

const ButtonIcon = ({ image, actionText, hintText, classMix, isOpaque, onClick }) => {
  const [isHover, setIsHover] = React.useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  const hintMod = isHover ? 'button-icon__hint_visible' : '';
  const imageMod = isOpaque ? 'button-icon__image_opaque' : '';

  return (
    <button className={`button-icon ${classMix}`} type="button" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={onClick}>
      <img className={`button-icon__image ${imageMod}`} src={image} alt={actionText} />
      <span className={`button-icon__hint ${hintMod}`}>{hintText}</span>
    </button>
  );
};

export default ButtonIcon;
