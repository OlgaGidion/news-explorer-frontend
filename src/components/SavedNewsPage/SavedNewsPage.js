import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import './SavedNewsPage.css';

const SavedNewsPage = () => {
  return (
    <main className="saved-news-page">
      <Header isDark={true}>
        <Navigation isDark={true} />
      </Header>
    </main>
  );
};

export default SavedNewsPage;