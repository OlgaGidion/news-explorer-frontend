import './MobileMenu.css';

const MobileMenu = ({ isDark, isOpen, onClose, children }) => {
  const mod = isDark
    ? 'mobile-menu__container_color_dark'
    : 'mobile-menu__container_color_light';

  const closeButtonMod = isDark
    ? 'mobile-menu__close-button_color_light'
    : 'mobile-menu__close-button_color_dark';

  const classList = isOpen
    ? 'mobile-menu mobile-menu_opened'
    : 'mobile-menu';

  return (
    <div className={classList}>
      <div className="mobile-menu__overlay" onClick={onClose} />
      <div className={`mobile-menu__container ${mod}`}>
        <header className="mobile-menu__header">
          <h1 className="mobile-menu__header-name">NewsExplorer</h1>
          <button className={`mobile-menu__close-button ${closeButtonMod}`} type="button" onClick={onClose} />
        </header>
        <div className="mobile-menu__items">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
