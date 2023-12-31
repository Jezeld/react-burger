import React, { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredients from '../burger-ingredients.module.css';

function BurgerTab() {
    const [current, setCurrent] = useState('bun');
    return (
        <nav className={burgerIngredients.wrapper}>
            <a className={burgerIngredients.tab} href="#bun">
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
            </a>
            <a className={burgerIngredients.tab} href="#sauce">
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
            </a>
            <a className={burgerIngredients.tab} href="#main">
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </a>
        </nav>
    );
}

export default BurgerTab;
