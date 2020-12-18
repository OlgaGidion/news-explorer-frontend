import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './MainPage.css';

const MainPage = () => (
  <main className="main-page">
    <Header isDark={false}>
      <Navigation isDark={false} />
    </Header>
    <Footer />
  </main>
);

export default MainPage;
