const ButtonsTester = () => {
  return (
    <>
      <div>
        <button className="button button_type_solid-blue">I'm blue round button</button>
        <button className="button button_type_solid-blue button_small">Small</button>
      </div>

      <div style={{background: 'gray', padding: '20px 0', margin: '20px 0'}}>
        <button className="button button_type_solid-white">I'm white round button</button>
        <button className="button button_type_solid-white button_small">Small</button>
      </div>

      <div style={{background: 'black', margin: '20px 0'}}>
        <button className="button button_type_wired-light">I'm wired round button</button>
        <button className="button button_type_wired-light button_small">I'm wired round button</button>
      </div>

      <div style={{background: 'white', margin: '20px 0'}}>
        <button className="button button_type_wired-dark">I'm wired round button</button>
        <button className="button button_type_wired-dark button_small">I'm wired round button</button>
      </div>

      <div style={{fontSize: '30px', fontFamily: 'Arial'}}>
        This text contains <button className="button-text">text button</button> inside
      </div>
    </>
  );
};

export default ButtonsTester;