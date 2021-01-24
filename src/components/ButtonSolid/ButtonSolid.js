import './ButtonSolid.css';

const ButtonSolid = ({ text, type, disabled, classMix, onClick }) => {
  const typeMod = `button-solid_type_${type}`;

  const classList = classMix
    ? `button-solid ${typeMod} ${classMix}`
    : `button-solid ${typeMod}`;

  return (
    <button
      className={classList}
      disabled={disabled}
      onClick={onClick}>
        {text}
    </button>
  );
};

export default ButtonSolid;
