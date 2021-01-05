import './MobileMenu.css';

const MobileMenu = ({ isOpen }) => {
  const classList = isOpen
    ? 'mobile-menu mobile-menu_opened'
    : 'mobile-menu';

  return (
    <div className={classList}>
      <div className="mobile-menu__overlay" />
      <div className="mobile-menu__container">
        <header className="mobile-menu__header">
          <h1 className="mobile-menu__header-name">NewsExplorer</h1>
          <button className="mobile-menu__close-button" type="button" />
        </header>
      </div>
    </div>
  );
};

export default MobileMenu;
