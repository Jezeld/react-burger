
import React from 'react';
import header from './app-header.module.css';
import  {Logo}  from '@ya.praktikum/react-developer-burger-ui-components';
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';


function AppHeader() {


    return (
        <header className={header.header}>
            <div className={header.content}>
                <nav className={header.navigation}>
                <div className={header.wrapper}>
                    <BurgerIcon type="primary"/>
                    <h3 className={header.text}>Конструктор</h3>
                </div>
                <div className={header.wrapper}>
                    <ListIcon type="secondary"/>
                    <h3 className={header.text_gray}>Лента заказов</h3>
                </div>
                </nav>
                <Logo/>
                <div className={header.wrapperProfile}>
                <ProfileIcon type="secondary" />
                <h3 className={header.text_gray}>Личный кабинет</h3>
                </div>
            </div>

        </header>
    )
}



export default AppHeader