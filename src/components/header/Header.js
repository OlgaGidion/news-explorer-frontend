import './Header.css';

const Header = ({ children }) => {
  return (
    <>
      <header className="header header_color_light">
        <h1 className="header__name">NewsExplorer</h1>
        {children}
      </header>
    </>
  );
};

export default Header;