import ButtonWired from '../ButtonWired/ButtonWired';
import logoutLightImage from '../../images/logout-light.svg';
import './Navigation.css';

const Navigation = ({ isDark }) => {
  const navLinkMod = isDark ? 'navigation-link_color_dark' : 'navigation-link_color_light';
  const wiredButtonType = isDark ? 'dark' : 'light';

  return (
    <nav className="navigation">

      <a className={`navigation-link ${navLinkMod} navigation-link_selected`} href="/">Главная</a>
      <a className={`navigation-link ${navLinkMod}`} href="/saved-news">Сохранённые статьи</a>

      <ButtonWired type={wiredButtonType} text="Грета" image={logoutLightImage} imageAlt="Выйти" />

    </nav>
  );
};

export default Navigation;
