import burger from './burger.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Summary from './summary/summary';
import PropTypes from 'prop-types';
import ingredientPropTypes from '../utils/prop-types';

function Burger(props) {
    const { cards, handleOrderDetailsClick, handleCardClick } = props;
    return (
        <section className={burger.burger}>
            <h1 className={`text text_type_main-large mt-10 mb-5`}>Соберите бургер</h1>
            <div className={burger.container}>
                <div className={burger.wrapper}>
                    <BurgerIngredients cards={cards} handleCardClick={handleCardClick} />
                </div>
                <div className={burger.wrapper}>
                    <BurgerConstructor cards={cards} />
                    <Summary handleOrderDetailsClick={handleOrderDetailsClick} />
                </div>
            </div>
        </section>
    );
}

Burger.propTypes = {
    cards: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
    handleOrderDetailsClick: PropTypes.func.isRequired,
    handleCardClick: PropTypes.func.isRequired
};

export default Burger;
