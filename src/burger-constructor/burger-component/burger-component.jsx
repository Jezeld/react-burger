import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredient from './burger-component.module.css';
import PropTypes from 'prop-types';
import ingredientPropTypes from '../../utils/prop-types';

function BurgerComponent({ card }) {
    return (
        <article>
            <li className="" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div className={ingredient.flex}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text={card.price}
                        price={card.price}
                        thumbnail={card.image}
                    />
                </div>
            </li>
        </article>
    );
}

BurgerComponent.propTypes = {
    card: PropTypes.objectOf(ingredientPropTypes.isRequired).isRequired
};
export default BurgerComponent;
