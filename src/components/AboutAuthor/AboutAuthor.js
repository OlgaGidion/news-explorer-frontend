import './AboutAuthor.css';

const AboutAuthor = () => (
  <div className="about-author">
    <img className="about-author__image" src="https://images.unsplash.com/photo-1607732994987-15674d81ba62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="Фото автора" />
    <div className="about-author__text-container">
      <h2 className="about-author__heading">Об авторе</h2>
      <p className="about-author__text">
        Это блок с описанием автора проекта.
        Здесь следует указать, как вас зовут,
        чем вы занимаетесь, какими технологиями
        разработки владеете.
      </p>
      <p className="about-author__text">
        Также можно рассказать о процессе обучения
        в Практикуме, чему вы тут научились, и чем
        можете помочь потенциальным заказчикам.
      </p>
    </div>
  </div>
);

export default AboutAuthor;
