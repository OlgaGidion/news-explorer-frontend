import NewsCardSaved from '../NewsCardSaved/NewsCardSaved';
import './NewsCardList.css';

const NewsCardList = () => (
  <section className="news-cards">
    <ul className="news-cards__list">
      <li className="news-cards__item">
        <NewsCardSaved
          title="Национальное достояние – парки"
          description="В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе."
          source="ДЗЭН"
          date="2 августа, 2019"
          imageUrl="https://images.unsplash.com/photo-1605718666382-4eb9bd7e1961?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          category="Природа"
        />
      </li>
    </ul>
  </section>
);

export default NewsCardList;
