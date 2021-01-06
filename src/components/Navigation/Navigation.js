import React from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import './Navigation.css';

const Navigation = ({ isDark, children }) => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false);

  const menuButtonMod = isDark
    ? 'navigation__menu-button_color_dark'
    : 'navigation__menu-button_color_light';

  const handleMobileMenuButtonClick = () => {
    setIsMobileMenuOpened(true);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpened(false);
  };

  return (
    <nav className="navigation">
      <div className="navigation__container">
        {children}
      </div>
      <button className={`navigation__menu-button ${menuButtonMod}`} onClick={handleMobileMenuButtonClick} />

      <MobileMenu isOpen={isMobileMenuOpened} onClose={handleMobileMenuClose}>
        {children}
      </MobileMenu>

    </nav>
  );
};

export default Navigation;
