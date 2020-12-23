import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

const NewsCardList = () => (
  <section className="news-cards">
    <ul className="news-cards__list">
      <li className="news-cards__item">
        <NewsCard imageUrl="https://images.unsplash.com/photo-1605718666382-4eb9bd7e1961?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" />
      </li>
      <li className="news-cards__item">
        <NewsCard imageUrl="https://images.unsplash.com/photo-1605559911160-a3d95d213904?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=954&q=80" />
      </li>
      <li className="news-cards__item">
        <NewsCard imageUrl="https://images.unsplash.com/photo-1605559911160-a3d95d213904?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=954&q=80" />
      </li>
      <li className="news-cards__item">
        <NewsCard imageUrl="https://images.unsplash.com/photo-1605718666382-4eb9bd7e1961?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" />
      </li>
      <li className="news-cards__item">
        <NewsCard imageUrl="https://images.unsplash.com/photo-1605559911160-a3d95d213904?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=954&q=80" />
      </li>
    </ul>
  </section>
);

export default NewsCardList;
