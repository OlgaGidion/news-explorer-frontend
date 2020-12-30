import ButtonWired from '../ButtonWired/ButtonWired';
import logoutLightImage from '../../images/logout-light.svg';
import './Navigation.css';

const Navigation = ({ isDark }) => {
  const navButtonMod = isDark ? 'navigation-button_color_dark' : 'navigation-button_color_light';
  const wiredButtonType = isDark ? 'dark' : 'light';

  return (
    <nav className="navigation">

      <button className={`navigation-button ${navButtonMod} navigation-button_selected`}>Главная</button>
      <button className={`navigation-button ${navButtonMod}`}>Сохранённые статьи</button>

      <ButtonWired type={wiredButtonType} text="Грета" image={logoutLightImage} imageAlt="Выйти" />

    </nav>
  );
};

export default Navigation;
