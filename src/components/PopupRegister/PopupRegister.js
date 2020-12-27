import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const PopupRegister = ({ isOpen, onClose }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  const handleEmailChange = (e) => {
    const text = e.target.value;
    setEmail(text);
  };

  const handlePasswordChange = (e) => {
    const text = e.target.value;
    setPassword(text);
  };

  const handleNameChange = (e) => {
    const text = e.target.value;
    setName(text);
  };

  return (
    <PopupWithForm
      name="register"
      title="Регистрация"
      actionText="Зарегистрироваться"
      secondaryButtonText="Войти"
      inProgressText="Регистрация..."
      isOpen={isOpen}
      onClose={onClose}>

      <fieldset className="popup-with-form__fieldset">

        <label for="email" className="popup-with-form__label">Email</label>
        <input
          id="popup-register_input_email"
          className="popup-with-form__input-text"
          name="email"
          type="email"
          value={email}
          placeholder="Введите почту"
          required
          minLength="5"
          maxLength="50"
          onChange={handleEmailChange} />
        <span
          id="popup-register_input_email_error"
          className="popup-with-form__input-error hidden" />

        <label for="password" className="popup-with-form__label">Пароль</label>
        <input
          id="popup-register_input_password"
          className="popup-with-form__input-text"
          name="password"
          type="password"
          value={password}
          placeholder="Введите пароль"
          minLength="5"
          maxLength="100"
          required
          onChange={handlePasswordChange} />
        <span
          id="popup-register_input_password_error"
          className="popup-with-form__input-error hidden" />

        <label for="name" className="popup-with-form__label">Имя</label>
        <input
          id="popup-register_input_name"
          className="popup-with-form__input-text"
          name="name"
          value={name}
          placeholder="Введите свое имя"
          minLength="2"
          maxLength="100"
          required
          onChange={handleNameChange} />
        <span
          id="popup-register_input_name_error"
          className="popup-with-form__input-error hidden" />

      </fieldset>
    </PopupWithForm>
  );
};

export default PopupRegister;
