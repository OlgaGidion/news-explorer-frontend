import './ButtonSolid.css';

const ButtonSolid = ({ text, type, disabled, classMix }) => {
  const typeMod = `button-solid_type_${type}`;

  const classList = classMix
    ? `button-solid ${typeMod} ${classMix}`
    : `button-solid ${typeMod}`;

  return (
    <button
      className={classList}
      type="button"
      disabled={disabled}>
        {text}
    </button>
  );
};

export default ButtonSolid;
