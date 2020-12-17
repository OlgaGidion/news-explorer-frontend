import './header.css';
import logoutDarkImage from '../../images/logout-dark.svg'

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__name">NewsExplorer</h1>
        <nav className="header__nav">
          <button className="button header__nav-button header__nav-button_selected">Главная</button>
          <button className="button header__nav-button">Сохранённые статьи</button>
          <button className="button button-rounded button-rounded_type_wired-dark button-rounded_small">Olga <img className="button-rounded__icon-right" src={logoutDarkImage} alt="icon" /></button>
        </nav>
      </header>
    </>
  );
};

export default Header;