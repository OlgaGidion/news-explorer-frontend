import './Navigation.css';

const Navigation = ({ isDark }) => {
  const navButtonMod = isDark ? 'navigation-button_color_dark' : 'navigation-button_color_light';
  const wiredButtonMod = isDark ? 'button-rounded_type_wired-dark' : 'button-rounded_type_wired-light';

  return (
    <nav className="navigation">
      <button className={`navigation-button ${navButtonMod} navigation-button_selected`}>Главная</button>
      <button className={`button-rounded ${wiredButtonMod} button-rounded_small`}>Авторизоваться</button>
    </nav>
  );
};

export default Navigation;
