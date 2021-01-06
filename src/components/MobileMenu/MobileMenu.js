import './MobileMenu.css';

const MobileMenu = ({ isOpen, onClose, children }) => {
  const classList = isOpen
    ? 'mobile-menu mobile-menu_opened'
    : 'mobile-menu';

  return (
    <div className={classList}>
      <div className="mobile-menu__overlay" onClick={onClose} />
      <div className="mobile-menu__container">
        <header className="mobile-menu__header">
          <h1 className="mobile-menu__header-name">NewsExplorer</h1>
          <button className="mobile-menu__close-button" type="button" onClick={onClose} />
        </header>
        <div className="mobile-menu__items">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
