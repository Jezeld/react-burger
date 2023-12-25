import React from 'react';
import burgerIngredients from '../burger-ingredients/burger-ingredients.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';


function BurgerCard({card}) {
    return (
        <li className={burgerIngredients.burgerCard}>
            <div className={burgerIngredients.item}>
                <img src={card.image} alt={card.name} className={burgerIngredients.img} />
                <div className={`${burgerIngredients.icon} mt-1 mb-1`}>
                    <span className='text text_type_digits-default mr-2'>{card.price}</span>
                    <CurrencyIcon type="primary" />
                </div>
                <h3 className={`text text_type_main-default ${burgerIngredients.caption}`}>{card.name}</h3>
            </div>
        </li>
    )
}

export default BurgerCard;