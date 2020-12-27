import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const PopupLogin = ({ isOpen, onClose }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (e) => {
    const text = e.target.value;
    setEmail(text);
  };

  const handlePasswordChange = (e) => {
    const text = e.target.value;
    setPassword(text);
  };

  return (
    <PopupWithForm
      name="login"
      title="Вход"
      actionText="Войти"
      secondaryButtonText="Зарегистрироваться"
      inProgressText="Вход..."
      isOpen={isOpen}
      onClose={onClose}>

      <fieldset className="popup-with-form__fieldset">

        <label for="email" className="popup-with-form__label">Email</label>
        <input
          id="popup-login_input_email"
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
          id="popup-login_input_email_error"
          className="popup-with-form__input-error hidden" />

        <label for="password" className="popup-with-form__label">Пароль</label>
        <input
          id="popup-login_input_password"
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
          id="popup-login_input_password_error"
          className="popup-with-form__input-error hidden" />

      </fieldset>
    </PopupWithForm>
  );
};

export default PopupLogin;
