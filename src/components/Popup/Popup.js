import React from 'react';
import { closeEffect } from '../../utils/utils';
import './Popup.css';

const Popup = ({ isOpen, onClose, children }) => {
  React.useEffect(closeEffect(isOpen, onClose), [isOpen, onClose]);

  const handleClose = () => {
    onClose();
  };

  const classList = isOpen
    ? 'popup popup_opened'
    : 'popup';

  return (
    <div className={classList}>
      <div className="popup__overlay popup__overlay_opacity_low" onClick={handleClose} />
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={handleClose} />
        {children}
        <div className="popup__text-button">или <button className="button button-text">Войти</button></div>
      </div>
    </div>
  );
};

export default Popup;
