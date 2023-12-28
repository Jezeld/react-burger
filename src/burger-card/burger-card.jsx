import React from 'react';
import burgerIngredients from '../burger-ingredients/burger-ingredients.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ingredientPropTypes from '../utils/prop-types';

function BurgerCard({ card, handleCardClick }) {
    const handleClick = () => handleCardClick(card);
    return (
        <article>
            <li onClick={handleClick} className={burgerIngredients.burgerCard}>
                <div className={burgerIngredients.item}>
                    <Counter
                        style={{ position: 'absolute' }}
                        count={1}
                        size="default"
                        extraClass="m-1"
                    />
                    <img src={card.image} alt={card.name} className={burgerIngredients.img} />
                    <div className={`${burgerIngredients.icon} mt-1 mb-1`}>
                        <span className="text text_type_digits-default mr-2">{card.price}</span>
                        <CurrencyIcon type="primary" />
                    </div>
                    <h3 className={`text text_type_main-default ${burgerIngredients.caption}`}>
                        {card.name}
                    </h3>
                </div>
            </li>
        </article>
    );
}

BurgerCard.propTypes = {
    card: PropTypes.objectOf(ingredientPropTypes.isRequired).isRequired,
    handleCardClick: PropTypes.func.isRequired
};
export default BurgerCard;
