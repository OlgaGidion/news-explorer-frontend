import logoutDarkImage from '../images/logout-dark.svg'

const ButtonsTester = () => {
  return (
    <>
      <div>
        <button className="button button-rounded button-rounded_type_solid-blue">I'm blue round button</button>
        <button className="button button-rounded button-rounded_type_solid-blue button-rounded_small">Small</button>
      </div>

      <div style={{background: 'gray', padding: '20px 0', margin: '20px 0'}}>
        <button className="button button-rounded button-rounded_type_solid-white">I'm white round button</button>
        <button className="button button-rounded button-rounded_type_solid-white button-rounded_small">Small</button>
        <button className="button button-rounded button-rounded_type_disabled">Small disabled</button>
      </div>

      <div style={{background: 'black', margin: '20px 0'}}>
        <button className="button button-rounded button-rounded_type_wired-light">I'm wired round button</button>
        <button className="button button-rounded button-rounded_type_wired-light button-rounded_small">I'm wired round button</button>
      </div>

      <div style={{background: 'white', margin: '20px 0'}}>
        <button className="button button-rounded button-rounded_type_wired-dark">I'm wired round button</button>
        <button className="button button-rounded button-rounded_type_wired-dark button-rounded_small">I'm wired round button <img className="button-rounded__icon-right" src={logoutDarkImage} alt="icon" /></button>
      </div>

      <div style={{fontSize: '30px', fontFamily: 'sans-serif'}}>
        This text contains <button className="button button-text">text button</button> inside

      </div>
    </>
  );
};

export default ButtonsTester;