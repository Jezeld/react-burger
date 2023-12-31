import React from 'react';
import PropTypes from 'prop-types';
import designer from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerComponent from './burger-component/burger-component';
import ingredientPropTypes from '../utils/prop-types';

function BurgerConstructor(props) {
    const { cards } = props;

    const bunElement = cards.find((itm) => itm.type === 'bun');
    const filteredComponent = cards.filter(function (itm) {
        return itm.type !== 'bun';
    });

    return (
        <div className={designer.container}>
            <div className={designer.wrapper}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={bunElement?.name}
                    price={bunElement?.price}
                    thumbnail={bunElement?.image}
                />

                <div className={designer.ingredients}>
                    <div className={`custom-scroll`}></div>
                    <ul className={designer.grid}>
                        {filteredComponent.map((card) => (
                            <BurgerComponent key={card._id} card={card} />
                        ))}
                    </ul>
                </div>

                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bunElement?.name} (низ)`}
                    price={bunElement?.price}
                    thumbnail={bunElement?.image}
                />
            </div>
        </div>
    );
}

BurgerConstructor.propTypes = {
    cards: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired
};

export default BurgerConstructor;
