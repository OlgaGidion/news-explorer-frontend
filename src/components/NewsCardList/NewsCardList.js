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
        />
      </li>
      <li className="news-cards__item">
        <NewsCard
        headline="Лесные огоньки: история одной фотографии"
        text="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
        из местных чудес природы."
        source="АФИША"
        date="2 августа, 2019"
        imageUrl="https://images.unsplash.com/photo-1605559911160-a3d95d213904?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=954&q=80" />
      </li>
      <li className="news-cards__item">
        <NewsCard
         headline="«Первозданная тайга»: новый фотопроект Игоря Шпиленка"
         text="Знаменитый фотограф снимает первозданные леса России"
         source="МЕДИАЗОНА"
         date="2 августа, 2019"
         imageUrl="https://images.unsplash.com/photo-1590918203039-7ce23e042634?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" />
      </li>
      <li className="news-cards__item">
        <NewsCard
        headline="«Первозданная тайга»: новый фотопроект Игоря Шпиленка"
        text="Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        source="МЕДИАЗОНА"
        date="2 августа, 2019"
        imageUrl="https://images.unsplash.com/photo-1590918203039-7ce23e042634?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" />
      </li>
      <li className="news-cards__item">
        <NewsCard
        headline="«Первозданная тайга»: новый фотопроект Игоря Шпиленка"
        text="Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где grghrituhguirtgh gnrjhgrut ferhgurt "
        source="АФИША"
        date="2 августа, 2019"
        imageUrl="https://images.unsplash.com/photo-1590918203039-7ce23e042634?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" />
      </li>
    </ul>
  </section>
);

export default NewsCardList;
