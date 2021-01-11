import './ButtonWired.css';

const ButtonWired = ({ text, type, image, imageAlt, classMix, onClick }) => {
  const typeMod = `button-wired_type_${type}`;

  const classList = classMix
    ? `button-wired ${typeMod} ${classMix}`
    : `button-wired ${typeMod}`;

  return (
    <button className={classList} onClick={onClick}>
      {text}
      {image && <img className="button-wired__icon-right" src={image} alt={imageAlt} />}
    </button>
  );
};
export default ButtonWired;
