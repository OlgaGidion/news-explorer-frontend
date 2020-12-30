import './ButtonWired.css';

const ButtonWired = ({ text, type, image, imageAlt }) => {
  const typeMod = `button-wired_type_${type}`;

  return (
    <button className={`button-wired ${typeMod}`}>
      {text}
      {image && <img className="button-wired__icon-right" src={image} alt={imageAlt} />}
    </button>
  );
};
export default ButtonWired;
