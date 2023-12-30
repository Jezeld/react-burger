import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import modal from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ModalOverlay from './modal-overlay/modal-overlay';

const modalRoot = document.getElementById('modals');
function Modal({ children, onClose }) {
    useEffect(() => {
        const closeByEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', closeByEscape);
        return () => document.removeEventListener('keydown', closeByEscape);
    }, [onClose]);

    const handleOverlay = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <ModalOverlay handleOverlay={handleOverlay}>
            <div className={modal.popup__container}>
                <button
                    style={{ position: 'absolute' }}
                    className={modal.popup__close}
                    type="button"
                    onClick={onClose}
                >
                    <CloseIcon type="primary" />
                </button>
                {children}
            </div>
        </ModalOverlay>,
        modalRoot
    );
}

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func.isRequired,
    handleOverlay: PropTypes.func,
    closeByEscape: PropTypes.func
};
export default Modal;
