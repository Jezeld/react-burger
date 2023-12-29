import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import content from './app.module.css';
import AppHeader from '../app-header/app-header';
import Burger from '../burger/burger';
import api from '../utils/api';
import OrderDetailsModal from '../popup/order-details-modal/order-details-modal';
import IngredientDetailsModal from '../popup/ingredient-details-modal/ingredient-details-modal';
import Modal from '../popup/modal/modal';

function App() {
    const [cards, setCards] = useState([]);
    const [isOrderDetailsPopupOpen, setIsOrderDetailsPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [isIngredientDetailsPopupOpen, setIsIngredientDetailsPopupOpen] = useState(false);
    const modalRoot = document.getElementById('modals');

    const handleGetIngredients = () => {
        api.getInfo()
            .then((res) => {
                const arr = res.data;
                setCards(arr);
            })
            .catch((error) => console.log(`Ошибка: ${error}`));
    };

    useEffect(() => {
        handleGetIngredients();
    }, []);

    function handleCardClick(card) {
        setSelectedCard(card);
        setIsIngredientDetailsPopupOpen(true);
    }

    function handleOrderDetailsClick() {
        setIsOrderDetailsPopupOpen(true);
    }

    function closeAllPopups() {
        setSelectedCard({});
        setIsIngredientDetailsPopupOpen(false);
        setIsOrderDetailsPopupOpen(false);
    }

    return (
        <>
            <main className={content.content}>
                <AppHeader />
                <Burger
                    cards={cards}
                    handleOrderDetailsClick={handleOrderDetailsClick}
                    handleCardClick={handleCardClick}
                />
            </main>
            {isOrderDetailsPopupOpen &&
                createPortal(
                    <Modal onClose={closeAllPopups}>
                        <OrderDetailsModal />
                    </Modal>,
                    modalRoot
                )}
            {isIngredientDetailsPopupOpen &&
                createPortal(
                    <Modal onClose={closeAllPopups}>
                        <IngredientDetailsModal card={selectedCard} />
                    </Modal>,
                    modalRoot
                )}
        </>
    );
}

export default App;
