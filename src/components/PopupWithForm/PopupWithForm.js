import React from 'react';
import Popup from '../Popup/Popup';

const PopupWithForm = ({
  name,
  title,
  actionText,
  inProgressText,
  isOpen,
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

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <h2 className="popup__title popup__title_top">{title}</h2>
      <form className="popup__form" name={name} onSubmit={handleFormSubmit} noValidate>
        {children}
        <button className="button button-rounded button-rounded_type_solid-blue" disabled={isInProgress}>{buttonText}</button>
      </form>
    </Popup>
  );
};

export default PopupWithForm;
