import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './MainPage.css';

const MainPage = () => (
  <main className="main-page">
    <div className="main-page__header">
      <Header isDark={false}>
        <Navigation isDark={false} />
      </Header>
      <h1 className="main-page__headline">Что творится в мире?</h1>
      <p className="main-page__subline">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
    </div>
    <Footer />
  </main>
);

export default MainPage;
