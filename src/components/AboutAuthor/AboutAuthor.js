import AuthorPhoto from '../../images/author.jpeg';
import './AboutAuthor.css';

const AboutAuthor = () => (
  <div className="about-author">
    <img className="about-author__image" src={AuthorPhoto} alt="Фото автора" />
    <div className="about-author__text-container">
      <h2 className="about-author__heading">Об авторе</h2>
      <p className="about-author__text">
        Меня зовут Ольга Гидион, я немецкая студентка Яндекс.Практикума
        и начинающий веб-разработчик. В технологии я пришла абсолютным
        новичком, представления о создании веб-сайтов и приложений не имела.
        До этого я работала в сфере туризма.
      </p>
      <p className="about-author__text">
        Теперь я владею навыками создания интерактивных красивых сайтов,
        которые работают одинаково здорово как на десктопных, так и на
        мобильных браузерах. Я создаю семантически корректный HTML,
        продумываю хорошо структурированный CSS по методологии БЭМ,
        пишу код на JavaScript с использованием React. Также я имею
        опыт с сетевым взаимодействием, серверной разработкой на
        Node.js и базой данных MongoDB.
      </p>
    </div>
  </div>
);

export default AboutAuthor;
