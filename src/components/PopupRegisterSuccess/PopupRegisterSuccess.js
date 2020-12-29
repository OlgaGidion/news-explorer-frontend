import Popup from '../Popup/Popup';
import ButtonText from '../ButtonText/ButtonText';
import './PopupRegisterSuccess.css';

const PopupRegisterSuccess = ({ isOpen, onClose }) => (
  <Popup
    title="Пользователь успешно зарегистрирован!"
    isOpen={isOpen}
    onClose={onClose}>
      <div className="popup-register-success__container">
        <ButtonText text="Войти" />
      </div>
  </Popup>
);

export default PopupRegisterSuccess;
