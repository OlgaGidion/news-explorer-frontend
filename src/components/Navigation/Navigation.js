import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <button className="button navigation-button navigation-button_color_light navigation-button_selected">Главная</button>
      <button className="button button-rounded button-rounded_type_wired-light button-rounded_small">Авторизоваться</button>
    </nav>
  );
};

export default Navigation;