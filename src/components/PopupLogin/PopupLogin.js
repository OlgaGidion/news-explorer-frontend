import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import FormInput from '../FormInput/FormInput';

const PopupLogin = ({ isOpen, onClose, onRegister }) => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const isButtonDisabled = email === null || password === null;

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
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
      isButtonDisabled={isButtonDisabled}
      onClose={onClose}
      onSecondaryButtonClick={onRegister}>

      <fieldset className="popup-with-form__fieldset">

        <FormInput
          required
          label="Email"
          name="email"
          type="email"
          placeholder="Введите почту"
          minLength="5"
          maxLength="50"
          onChange={handleEmailChange} />

        <FormInput
          required
          label="Пароль"
          name="password"
          type="password"
          placeholder="Введите пароль"
          minLength="5"
          maxLength="100"
          onChange={handlePasswordChange} />

      </fieldset>
    </PopupWithForm>
  );
};

export default PopupLogin;
