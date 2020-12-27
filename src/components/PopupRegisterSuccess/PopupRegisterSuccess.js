import Popup from '../Popup/Popup';
import './PopupRegisterSuccess.css';

const PopupRegisterSuccess = ({ isOpen, onClose }) => (
  <Popup
    title="Пользователь успешно зарегистрирован!"
    isOpen={isOpen}
    onClose={onClose}>
      <div className="popup-register-success__container">
        <button className="button button-text">Войти</button>
      </div>
    </Popup>
);

export default PopupRegisterSuccess;
