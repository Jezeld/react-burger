import React, { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredients from '../burger-ingredients.module.css';

function BurgerTab() {
    const [current, setCurrent] = useState('Булки');
    return (
        <nav className={burgerIngredients.wrapper}>
            <a className={burgerIngredients.tab} href="#bun">
                <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                    Булки
                </Tab>
            </a>
            <a className={burgerIngredients.tab} href="#sauce">
                <Tab>Соусы</Tab>
            </a>
            <a className={burgerIngredients.tab} href="#main">
                <Tab>Начинки</Tab>
            </a>
        </nav>
    );
}

export default BurgerTab;
