import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import FormInput from '../FormInput/FormInput';

const PopupLogin = ({ isOpen, onClose, onRegister, onSuccess }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    if (isOpen) {
      setEmail('');
      setPassword('');
    }
  }, [isOpen]);

  const isButtonDisabled = email === '' || password === '';

  const handleEmailTextChange = (text) => {
    setEmail(text);
  };

  const handlePasswordTextChange = (text) => {
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
      onSecondaryButtonClick={onRegister}
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

      </fieldset>
    </PopupWithForm>
  );
};

export default PopupLogin;
