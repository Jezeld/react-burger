import { useEffect } from 'react';
import popup from '../popup.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

function Modal({ children, isOpen, onClose }) {
    useEffect(() => {
        if (!isOpen) return;
        const closeByEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', closeByEscape);
        return () => document.removeEventListener('keydown', closeByEscape);
    }, [isOpen, onClose]);

    const handleOverlay = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className={isOpen ? `${popup.popup_opened} ${popup.popup}` : `${popup.popup}`}
            onClick={handleOverlay}
        >
            <div className={popup.popup__container}>
                <button
                    style={{ position: 'absolute' }}
                    className={popup.popup__close}
                    type="button"
                    onClick={onClose}
                >
                    <CloseIcon type="primary" />
                </button>
                {children}
            </div>
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func.isRequired,
    handleOverlay: PropTypes.func.isRequired,
    closeByEscape: PropTypes.func.isRequired
};
export default Modal;
