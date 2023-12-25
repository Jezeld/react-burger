import React from 'react';
import constructor from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerComponent from './burger-component/burger-component';


function BurgerConstructor(props) {
    const { cards } = props;
    const filteredComponent = cards.filter(function(itm){
        return itm.type !== "bun";
    });
    return (
<div className={constructor.container}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' , alignItems: 'flex-end', justifyContent: "space-between"}}>
        <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={cards[0].image}
        />
    <div className={constructor.ingredients}>
        <div className={`custom-scroll`}></div>
    <ul className={constructor.grid}>
        {filteredComponent.map((card) => (
            <BurgerComponent
                key={card._id}
                card={card}
            />
        ))}
    </ul>
    </div>
        <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={cards[0].image}
        />
    </div>
</div>
    )
}

export default BurgerConstructor;