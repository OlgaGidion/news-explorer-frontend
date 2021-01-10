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
        <div className="mobile-menu__header">
          <h2 className="mobile-menu__header-name">NewsExplorer</h2>
          <button className={`mobile-menu__close-button ${closeButtonMod}`} type="button" onClick={onClose} />
        </div>
        <div className="mobile-menu__items">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
