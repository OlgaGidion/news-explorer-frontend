import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';
import './SavedNewsPage.css';

const SavedNewsPage = () => (
  <main>
    <Header isDark={true}>
      <Navigation isDark={true} />
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
