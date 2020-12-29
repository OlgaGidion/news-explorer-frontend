import React from 'react';
import Popup from '../Popup/Popup';
import ButtonText from '../ButtonText/ButtonText';
import './PopupWithForm.css';

const PopupWithForm = ({
  name,
  title,
  actionText,
  secondaryButtonText,
  inProgressText,
  isOpen,
  isButtonDisabled,
  onClose,
  onSubmit,
  children,
}) => {
  const [buttonText, setButtonText] = React.useState(actionText);
  const [isInProgress, setIsInProgress] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setButtonText(actionText);
      setIsInProgress(false);
    }
  }, [isOpen, actionText]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setButtonText(inProgressText);
    setIsInProgress(true);
    onSubmit();
  };

  const buttonType = !isButtonDisabled
    ? 'button-rounded_type_solid-blue'
    : 'button-rounded_type_disabled';

  return (
    <Popup title={title} isOpen={isOpen} onClose={onClose}>
      <form className="popup__form" name={name} onSubmit={handleFormSubmit} noValidate>

        {children}

        <p className="popup-with-form__error-text">Такой пользователь уже есть</p>

        <button
          className={`button button-rounded ${buttonType} popup-with-form__submit-button`}
          disabled={isInProgress}>
            {buttonText}
        </button>

        <p className="popup-with-form__footer">
          или <ButtonText text={secondaryButtonText} />
        </p>
      </form>
    </Popup>
  );
};

export default PopupWithForm;
