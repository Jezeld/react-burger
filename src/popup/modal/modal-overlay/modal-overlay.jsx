import modal from '../modal.module.css';

function ModalOverlay({ children, handleOverlay }) {
    return (
        <div onClick={handleOverlay} className={`${modal.popup_opened} ${modal.popup}`}>
            {children}
        </div>
    );
}

export default ModalOverlay;
