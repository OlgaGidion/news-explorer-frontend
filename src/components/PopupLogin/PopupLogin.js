import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import FormInput from '../FormInput/FormInput';
import MainApi from '../../utils/MainApi';

const PopupLogin = ({ isOpen, onClose, onRegister, onSuccess }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isInProgress, setIsInProgress] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (isOpen) {
      setEmail('munich@mail.de');
      setPassword('qwerty123');
      setIsInProgress(false);
      setError(null);
    }
  }, [isOpen]);

  const isButtonDisabled = email === '' || password === '';

  const handleEmailTextChange = (text) => {
    setEmail(text);
  };

  const handlePasswordTextChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    setIsInProgress(true);
    setError(null);

    MainApi.login(email, password)
      .then(({ token, name }) => {
        onSuccess(token, name);
      })
      .catch((apiError) => {
        setIsInProgress(false);
        setError(apiError.message);
      });
  };

  return (
    <PopupWithForm
      name="login"
      title="Вход"
      actionText="Войти"
      secondaryButtonText="Зарегистрироваться"
      inProgressText="Вход..."
      isInProgress={isInProgress}
      isOpen={isOpen}
      isButtonDisabled={isButtonDisabled}
      error={error}
      onClose={onClose}
      onSecondaryButtonClick={onRegister}
      onSubmit={handleSubmit}>

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
