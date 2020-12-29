import Popup from '../Popup/Popup';
import ButtonText from '../ButtonText/ButtonText';
import './PopupRegisterSuccess.css';

const PopupRegisterSuccess = ({ text, isOpen, onClose }) => (
  <Popup
    title="Пользователь успешно зарегистрирован!"
    isOpen={isOpen}
    onClose={onClose}>
      <div className="popup-register-success__container">
        <ButtonText text={text} />
      </div>
    </Popup>
);

export default PopupRegisterSuccess;
