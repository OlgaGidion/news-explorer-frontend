import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './RegisterPopup.css';

const RegisterPopup = ({ isOpen, onClose }) => {
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
      inProgressText="Регистрация..."
      isOpen={isOpen}
      onClose={onClose}>

      <fieldset className="register-popup__fieldset">

        <input
          id="register-popup_input_email"
          className="register-popup__input-text input-text"
          name="email"
          type="email"
          value={email}
          placeholder="Введите email"
          required
          minLength="5"
          maxLength="50"
          onChange={handleEmailChange} />
        <span
          id="register-popup_input_email_error"
          className="input-error hidden" />

        <input
          id="register-popup_input_password"
          className="register-popup__input-text input-text"
          name="password"
          type="password"
          value={password}
          placeholder="Введите пароль"
          minLength="5"
          maxLength="100"
          required
          onChange={handlePasswordChange} />
        <span
          id="register-popup_input_password_error"
          className="input-error hidden" />

        <input
          id="register-popup_input_name"
          className="register-popup__input-text input-text"
          name="name"
          value={name}
          placeholder="Введите свое имя"
          minLength="2"
          maxLength="100"
          required
          onChange={handleNameChange} />
        <span
          id="register-popup_input_name_error"
          className="input-error hidden" />

      </fieldset>
    </PopupWithForm>
  );
};

export default RegisterPopup;
