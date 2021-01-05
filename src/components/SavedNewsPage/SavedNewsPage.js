import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import ButtonWired from '../ButtonWired/ButtonWired';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';
import logoutImageDark from '../../images/logout-dark.svg';
import './SavedNewsPage.css';

const SavedNewsPage = () => (
  <main>
    <Header isDark={true}>
      <Navigation isDark={true}>
        <a className="navigation-link navigation-link_color_dark" href="/">Главная</a>
        <a className="navigation-link navigation-link_color_dark navigation-link_selected" href="/saved-news">Сохранённые статьи</a>
        <ButtonWired type="dark" text="Грета" image={logoutImageDark} imageAlt="Выйти" />
      </Navigation>
    </Header>

    <SavedNewsHeader
      userName="Грета"
      articlesCount={5}
      keywords={['Природа', 'Автомобили', 'Дети', 'Психология']} />
    <NewsCardList />
    <Footer />
  </main>
);

export default SavedNewsPage;
