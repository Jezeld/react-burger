import React from 'react';
import burgerIngredients from './burger-ingredients.module.css';
import BurgerTab from './tab/tab';
import BurgerCard from '../burger-card/burger-card';
import PropTypes from 'prop-types';
import ingredientPropTypes from '../utils/prop-types';

function BurgerIngredients(props) {
    const { cards, handleCardClick } = props;
    const filteredBun = cards.filter(function (itm) {
        return itm.type === 'bun';
    });

    const filteredSauce = cards.filter(function (itm) {
        return itm.type === 'sauce';
    });

    const filteredMain = cards.filter(function (itm) {
        return itm.type === 'main';
    });

    return (
        <>
            <BurgerTab />
            <div className={`${burgerIngredients.category}`}>
                <div className={`custom-scroll`}></div>
                <div className={`mt-10`} id={'bun'}>
                    <h2 className="text text_type_main-medium">Булки</h2>
                    <ul className={burgerIngredients.grid}>
                        {filteredBun.map((card) => (
                            <BurgerCard
                                handleCardClick={handleCardClick}
                                key={card._id}
                                card={card}
                            />
                        ))}
                    </ul>
                </div>
                <div className={`mt-10`} id={'sauce'}>
                    <h2 className="text text_type_main-medium">Соусы</h2>
                    <ul className={burgerIngredients.grid}>
                        {filteredSauce.map((card) => (
                            <BurgerCard
                                handleCardClick={handleCardClick}
                                key={card._id}
                                card={card}
                            />
                        ))}
                    </ul>
                </div>
                <div className={`mt-10`} id={'main'}>
                    <h2 className="text text_type_main-medium">Начинки</h2>
                    <ul className={burgerIngredients.grid}>
                        {filteredMain.map((card) => (
                            <BurgerCard
                                handleCardClick={handleCardClick}
                                key={card._id}
                                card={card}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

BurgerIngredients.propTypes = {
    cards: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
    card: PropTypes.objectOf(ingredientPropTypes.isRequired),
    handleCardClick: PropTypes.func.isRequired
};
export default BurgerIngredients;
