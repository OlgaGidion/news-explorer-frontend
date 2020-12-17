import './Header.css';

const Header = ({ isDark, children }) => {
  const mod = isDark ? 'header_color_dark' : 'header_color_light';

  return (
    <header className={`header ${mod}`}>
      <h1 className="header__name">NewsExplorer</h1>
      {children}
    </header>
  );
};

export default Header;