import React, { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredients from '../burger-ingredients.module.css';

function BurgerTab() {
    const [current, setCurrent] = useState('Булки')
    return (
        <div className={burgerIngredients.wrapper}>
            <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab>
                Соусы
            </Tab>
            <Tab>
                Начинки
            </Tab>
        </div>
    )
}

export default BurgerTab;