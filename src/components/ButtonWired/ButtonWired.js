import './ButtonWired.css';

const ButtonWired = ({ text, type, image, imageAlt, classMix }) => {
  const typeMod = `button-wired_type_${type}`;

  const classList = classMix
    ? `button-wired ${typeMod} ${classMix}`
    : `button-wired ${typeMod}`;

  return (
    <button className={classList}>
      {text}
      {image && <img className="button-wired__icon-right" src={image} alt={imageAlt} />}
    </button>
  );
};
export default ButtonWired;
