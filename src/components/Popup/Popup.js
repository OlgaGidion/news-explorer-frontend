import React from 'react';
import './Popup.css';

const Popup = ({ title, isOpen, onClose, children }) => {
  React.useEffect(() => {
    const handleDocumentKeydown = (evt) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleDocumentKeydown);
    }

    return () => {
      document.removeEventListener('keydown', handleDocumentKeydown);
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    onClose();
  };

  const classList = isOpen
    ? 'popup popup_opened'
    : 'popup';

  return (
    <div className={classList}>
      <div className="popup__overlay" onClick={handleClose} />
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={handleClose} />
        <h2 className="popup__title">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Popup;
