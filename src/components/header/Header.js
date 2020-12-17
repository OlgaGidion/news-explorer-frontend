import './header.css';
import logoutDarkImage from '../../images/logout-dark.svg'

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__name">NewsExplorer</h1>
        <nav className="header__nav">
          <button className="header__nav-button header__nav-button_selected">Главная</button>
          <button className="header__nav-button">Сохранённые статьи</button>
          <button className="button button_type_wired-dark button_small">Olga <img className="button__icon-right" src={logoutDarkImage} alt="icon" /></button>
        </nav>
      </header>
    </>
  );
};

export default Header;