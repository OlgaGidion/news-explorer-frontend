import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import FormInput from '../FormInput/FormInput';

const PopupRegister = ({ isOpen, onClose, onLogin, onSuccess }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    if (isOpen) {
      setEmail('');
      setPassword('');
      setName('');
    }
  }, [isOpen]);

  const isButtonDisabled = email === '' || password === '' || name === '';

  const handleEmailTextChange = (text) => {
    setEmail(text);
  };

  const handlePasswordTextChange = (text) => {
    setPassword(text);
  };

  const handleNameTextChange = (text) => {
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
          text={email}
          label="Email"
          name="email"
          type="email"
          placeholder="Введите почту"
          minLength="5"
          maxLength="50"
          onTextChange={handleEmailTextChange} />

        <FormInput
          required
          text={password}
          label="Пароль"
          name="password"
          type="password"
          placeholder="Введите пароль"
          minLength="5"
          maxLength="100"
          onTextChange={handlePasswordTextChange} />

        <FormInput
          required
          text={name}
          label="Имя"
          name="name"
          type="text"
          placeholder="Введите свое имя"
          minLength="2"
          maxLength="30"
          onTextChange={handleNameTextChange} />

      </fieldset>
    </PopupWithForm>
  );
};

export default PopupRegister;
