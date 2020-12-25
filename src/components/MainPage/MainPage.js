import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import AboutAuthor from '../AboutAuthor/AboutAuthor';
import './MainPage.css';

const MainPage = () => (
  <main className="main-page">
    <div className="main-page__image-container">
      <Header isDark={false}>
        <Navigation isDark={false} />
      </Header>
      <div className="main-page__content">
        <h1 className="main-page__headline">Что творится в мире?</h1>
        <p className="main-page__subline">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <SearchForm placeholder="Введите тему новости" buttonText="Искать" />
      </div>
    </div>
    <SearchResults />
    <AboutAuthor />
    <Footer />
  </main>
);

export default MainPage;
