import MobileMenu from '../MobileMenu/MobileMenu';
import './Navigation.css';

const Navigation = ({ isDark, children }) => {
  const menuButtonMod = isDark
    ? 'navigation__menu-button_color_dark'
    : 'navigation__menu-button_color_light';

  return (
    <nav className="navigation">
      <div className="navigation__container">
        {children}
      </div>
      <button className={`navigation__menu-button ${menuButtonMod}`} />

      <MobileMenu isOpen={true} />

    </nav>
  );
};

export default Navigation;
