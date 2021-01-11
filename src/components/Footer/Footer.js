import githubImage from '../../images/github.svg';
import facebookImage from '../../images/facebook.svg';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__info">&copy; 2020 Supersite, Powered by News API</div>
    <div className="footer__links-container">
      <ul className="footer__text-list">
        <li className="footer__text-item">
          <a className="footer__link" href="/">Главная</a>
        </li>
        <li className="footer__text-item">
          <a className="footer__link" href="https://praktikum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
        </li>
      </ul>
      <ul className="footer__icon-list">
        <li className="footer__image-item">
          <a href="https://github.com/OlgaGidion" target="_blank" rel="noreferrer">
            <img className="footer__icon" src={githubImage} alt="GitHub" />
          </a>
        </li>
        <li className="footer__image-item">
          <a href="https://www.facebook.com/olga.gidion" target="_blank" rel="noreferrer">
            <img className="footer__icon" src={facebookImage} alt="Facebook" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
