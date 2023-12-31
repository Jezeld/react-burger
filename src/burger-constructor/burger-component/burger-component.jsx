import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredient from './burger-component.module.css';
import PropTypes from 'prop-types';

function BurgerComponent({ card }) {
    return (
        <article>
            <li className={ingredient.wrapper}>
                <div className={ingredient.flex}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text={card.name}
                        price={card.price}
                        thumbnail={card.image}
                    />
                </div>
            </li>
        </article>
    );
}

BurgerComponent.propTypes = {
    card: PropTypes.object.isRequired
};
export default BurgerComponent;
