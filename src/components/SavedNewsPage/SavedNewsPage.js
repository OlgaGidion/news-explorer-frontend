import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';
import './SavedNewsPage.css';

const SavedNewsPage = () => (
  <main className="saved-news-page">
    <Header isDark={true}>
      <Navigation isDark={true} />
    </Header>
    <div className="saved-news-page__content">
      <h3 className="saved-news-page__text">Сохранённые статьи</h3>
      <h2 className="saved-news-page__headline">Грета, у вас 5 сохранённых статей</h2>
      <p className="saved-news-page__subline">По ключевым словам: <span className="saved-news-page__span-accent">Природа, Тайга</span> и <span className="saved-news-page__span-accent">2-м другим</span></p>
    </div>
    <NewsCardList />
    <Footer />
  </main>
);

export default SavedNewsPage;
