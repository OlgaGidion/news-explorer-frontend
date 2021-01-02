import ButtonWired from '../ButtonWired/ButtonWired';
import logoutLightImage from '../../images/logout-light.svg';
import logoutDarkImage from '../../images/logout-dark.svg';
import './Navigation.css';

const Navigation = ({ isDark, children }) => {
  const logoutButtonType = isDark ? 'dark' : 'light';
  const logoutButtonImage = isDark ? logoutDarkImage : logoutLightImage;

  return (
    <nav className="navigation">
      {children}
      <ButtonWired type={logoutButtonType} text="Грета" image={logoutButtonImage} imageAlt="Выйти" />
    </nav>
  );
};

export default Navigation;
