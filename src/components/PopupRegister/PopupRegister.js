import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import FormInput from '../FormInput/FormInput';

const PopupRegister = ({ isOpen, onClose, onLogin, onSuccess }) => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [name, setName] = React.useState(null);

  const isButtonDisabled = email === null || password === null || name === null;

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleNameChange = (text) => {
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
      isButtonDisabled={isButtonDisabled}
      onClose={onClose}
      onSecondaryButtonClick={onLogin}
      onSubmit={onSuccess}>

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

        <FormInput
          required
          label="Имя"
          name="name"
          type="text"
          placeholder="Введите свое имя"
          minLength="2"
          maxLength="30"
          onChange={handleNameChange} />

      </fieldset>
    </PopupWithForm>
  );
};

export default PopupRegister;
