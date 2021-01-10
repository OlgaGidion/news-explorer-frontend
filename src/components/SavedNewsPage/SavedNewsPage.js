import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import ButtonWired from '../ButtonWired/ButtonWired';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';
import logoutImageDark from '../../images/logout-dark.svg';
import './SavedNewsPage.css';

const SavedNewsPage = () => {
  const history = useHistory();

  const handleLogoutButtonClick = () => {
    history.replace('/');
  };

  return (
    <main>
      <Header isDark={true} isVisibleOnMobile={true}>
        <Navigation isDark={true}>
          <a className="navigation__link navigation__link_color_dark" href="/">Главная</a>
          <a className="navigation__link navigation__link_color_dark navigation__link_selected_dark" href="/saved-news">Сохранённые статьи</a>
          <ButtonWired type="dark" text="Грета" image={logoutImageDark} imageAlt="Выйти" classMix="navigation__wired-button" onClick={handleLogoutButtonClick} />
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
};

export default SavedNewsPage;
