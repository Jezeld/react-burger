import React, { useEffect, useState } from 'react';
import './App.css';
import AppHeader from '../app-header/app-header';
import Burger from '../burger/burger';
import api from '../utils/api';
import OrderDetailsModal from '../popup/order-details-modal/order-details-modal';
import IngredientDetailsModal from '../popup/ingredient-details-modal/ingredient-details-modal';

function App() {
    const [cards, setCards] = useState([]);
    // const [active, setActive] = useState(true);
    const [isOrderDetailsPopupOpen, setIsOrderDetailsPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [isIngredientDetailsPopupOpen, setIsIngredientDetailsPopupOpen] = useState(false);

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
    console.log(selectedCard);
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
            <main className="content">
                <AppHeader />
                <Burger
                    cards={cards}
                    handleOrderDetailsClick={handleOrderDetailsClick}
                    handleCardClick={handleCardClick}
                />
            </main>
            <OrderDetailsModal isOpen={isOrderDetailsPopupOpen} onClose={closeAllPopups} />
            <IngredientDetailsModal
                isOpen={isIngredientDetailsPopupOpen}
                onClose={closeAllPopups}
                card={selectedCard}
            />
        </>
    );
}

export default App;
