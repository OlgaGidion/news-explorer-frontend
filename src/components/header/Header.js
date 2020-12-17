import './header.css';

const Header = () => {
  return (
    <>
      <header className="header header_color_light">
        <h1 className="header__name header__name_color_light">NewsExplorer</h1>
        <nav className="header__nav">
          <button className="button header__nav-button header__nav-button_color_light header__nav-button_selected-light">Главная</button>
          <button className="button button-rounded button-rounded_type_wired-light button-rounded_small">Авторизоваться</button>
        </nav>
      </header>
    </>
  );
};

export default Header;