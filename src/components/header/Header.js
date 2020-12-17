import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  return (
    <>
      <header className="header header_color_light">
        <h1 className="header__name">NewsExplorer</h1>
        <Navigation />
      </header>
    </>
  );
};

export default Header;