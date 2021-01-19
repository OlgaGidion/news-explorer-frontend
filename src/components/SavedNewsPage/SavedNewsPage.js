import React from 'react';
import { useHistory } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import ButtonWired from '../ButtonWired/ButtonWired';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';
import logoutImageDark from '../../images/logout-dark.svg';
import MainApi from '../../utils/MainApi';
import './SavedNewsPage.css';

const SavedNewsPage = ({ onLogout }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const history = useHistory();
  const [articles, setArticles] = React.useState(null);

  React.useEffect(() => {
    MainApi.getMyArticles()
      .then((result) => {
        setArticles(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSavedNewsPageButtonClick = () => {
    history.push('/saved-news');
  };

  const handleMainPageButtonClick = () => {
    history.push('/');
  };

  const handleLogoutButtonClick = () => {
    history.replace('/');
    onLogout();
  };

  const handleArticleUnsave = (articleId) => {
    setArticles(articles.filter((article) => articleId !== article._id));
  };

  return (
    <main>
      <Header isDark={true} isVisibleOnMobile={true}>
        <Navigation isDark={true}>
          <button className="navigation__page-button navigation__page-button_color_dark" onClick={handleMainPageButtonClick}>Главная</button>
          <button className="navigation__page-button navigation__page-button_color_dark navigation__page-button_selected_dark" onClick={handleSavedNewsPageButtonClick}>Сохранённые статьи</button>
          <ButtonWired type="dark" text={currentUser.name} image={logoutImageDark} imageAlt="Выйти" classMix="navigation__wired-button" onClick={handleLogoutButtonClick} />
        </Navigation>
      </Header>

      <SavedNewsHeader
        userName={currentUser.name}
        articlesCount={5}
        keywords={['Природа', 'Автомобили', 'Дети', 'Психология']} />

      {articles !== null &&
        <NewsCardList articles={articles} onArticleUnsave={handleArticleUnsave} />
      }

      <Footer />
    </main>
  );
};

export default SavedNewsPage;
