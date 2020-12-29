import './ButtonSolid.css';

const ButtonSolid = ({ text, type, disabled, classMix }) => {
  const typeMod = `button-solid_type_${type}`;

  return (
    <button
      className={`button-solid ${typeMod} ${classMix}`}
      disabled={disabled}>
        {text}
    </button>
  );
};

export default ButtonSolid;
