import './Footer.css';
import githubImage from '../../images/github.svg';
import facebookImage from '../../images/facebook.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer__info">&copy; 2020 Supersite, Powered by News API</div>
    <ul className="footer__list">
      <li className="footer__item">
        <a className="footer__link" href="#">Главная</a>
      </li>
      <li className="footer__item">
        <a className="footer__link" href="#">Яндекс.Практикум</a>
      </li>
      <li className="footer__item">
        <a className="footer__link" href="#">
          <img className="footer__icon" src={githubImage} alt="github" />
        </a>
      </li>
      <li className="footer__item">
        <a className="footer__link" href="#">
          <img className="footer__icon" src={facebookImage} alt="facebook" />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
