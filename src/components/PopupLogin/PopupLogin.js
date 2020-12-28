/* eslint-disable arrow-body-style */
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import FormInput from '../FormInput/FormInput';

const PopupLogin = ({ isOpen, onClose }) => {
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');

  // const handleEmailChange = (e) => {
  //   const text = e.target.value;
  //   setEmail(text);
  // };

  // const handlePasswordChange = (e) => {
  //   const text = e.target.value;
  //   setPassword(text);
  // };

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

        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="Введите почту"
          required
          minLength="5"
          maxLength="50" />

        <FormInput
          label="Пароль"
          name="password"
          type="password"
          placeholder="Введите пароль"
          required
          minLength="5"
          maxLength="100" />

      </fieldset>
    </PopupWithForm>
  );
};

export default PopupLogin;
