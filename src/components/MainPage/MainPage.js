import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import './MainPage.css';

const MainPage = () => {
  return (
    <main className="main-page">
      <Header isDark={false}>
        <Navigation isDark={false} />
      </Header>
    </main>
  );
};

export default MainPage;