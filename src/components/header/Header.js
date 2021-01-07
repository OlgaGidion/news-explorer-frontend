import './Header.css';

const Header = ({ isDark, isVisibleOnMobile, children }) => {
  const colorMod = isDark ? 'header_color_dark' : 'header_color_light';
  const mobileVisibilityMod = isVisibleOnMobile ? '' : 'header_hidden';

  return (
    <header className={`header ${colorMod} ${mobileVisibilityMod}`} >
      <h1 className="header__name">NewsExplorer</h1>
      {children}
    </header>
  );
};

export default Header;
