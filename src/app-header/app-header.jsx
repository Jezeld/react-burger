import React from 'react';
// import { Link } from 'react-router-dom';
import header from './app-header.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
    return (
        <header className={header.header}>
            <div className={header.content}>
                <nav className={header.navigation}>
                    <a href="#" className={header.wrapper}>
                        <BurgerIcon type="primary" />
                        <h3 className={header.text}>Конструктор</h3>
                    </a>
                    <a href="#" className={header.wrapper}>
                        <ListIcon type="secondary" />
                        <h3 className={header.text_gray}>Лента заказов</h3>
                    </a>
                </nav>
                <Logo />
                <div className={header.wrapperProfile}>
                    <ProfileIcon type="secondary" />
                    <a className={header.text_gray}>Личный кабинет</a>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;
