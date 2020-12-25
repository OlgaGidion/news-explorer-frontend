import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

const NewsCardList = () => (
  <section className="news-cards">
    <ul className="news-cards__list">
      <li className="news-cards__item">
        <NewsCard
          headline="Национальное достояние – парки"
          text="В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе."
          source="ДЗЭН"
          date="2 августа, 2019"
          imageUrl="https://images.unsplash.com/photo-1605718666382-4eb9bd7e1961?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          category="Природа"
        />
      </li>
      <li className="news-cards__item">
        <NewsCard
          headline="Лесные огоньки: история одной фотографии"
          text="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
          из местных чудес природы."
          source="АФИША"
          date="2 августа, 2019"
          imageUrl="https://images.unsplash.com/photo-1607025892219-7092c7cd04d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
          category="Природа"
        />
      </li>
      <li className="news-cards__item">
        <NewsCard
          headline="«Первозданная тайга»: новый фотопроект Игоря Шпиленка"
          text="Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где..."
          source="МЕДИАЗОНА"
          date="2 августа, 2019"
          imageUrl="https://images.unsplash.com/photo-1606066702335-7d6e0f976758?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
          category="Тайга"
         />
      </li>
      <li className="news-cards__item">
        <NewsCard
          headline="Национальное достояние – парки"
          text="В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе."
          source="МЕДИАЗОНА"
          date="2 августа, 2019"
          imageUrl="https://images.unsplash.com/photo-1605718666790-c4dfe635344e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
          category="Familienzusammenführung"
        />
      </li>
      <li className="news-cards__item">
        <NewsCard
          headline="Лесные огоньки: история одной фотографии"
          text="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
          из местных чудес природы."
          source="АФИША"
          date="2 августа, 2019"
          imageUrl="https://images.unsplash.com/photo-1607025892219-7092c7cd04d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
          category="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </li>
    </ul>
  </section>
);

export default NewsCardList;
