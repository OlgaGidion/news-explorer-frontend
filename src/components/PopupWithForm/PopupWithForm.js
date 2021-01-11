import React from 'react';
import Popup from '../Popup/Popup';
import ButtonSolid from '../ButtonSolid/ButtonSolid';
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
  onSecondaryButtonClick,
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

  return (
    <Popup title={title} isOpen={isOpen} onClose={onClose}>
      <form className="popup__form" name={name} onSubmit={handleFormSubmit} noValidate>

        {children}

        <p className="popup-with-form__error-text">Такой пользователь уже есть</p>

        <ButtonSolid type="blue" classMix="popup-with-form__submit-button" text={buttonText} disabled={isButtonDisabled || isInProgress} />

        <p className="popup-with-form__footer">
          или <ButtonText text={secondaryButtonText} onClick={onSecondaryButtonClick} />
        </p>
      </form>
    </Popup>
  );
};

export default PopupWithForm;
