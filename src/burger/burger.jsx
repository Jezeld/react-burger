import burger from './burger.module.css';
import BurgerIngredients  from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Summary from './summary/summary';

function Burger(props) {
    const { cards } = props;
    return (
      <section className={burger.burger}>
          <h1 className={`text text_type_main-large mt-10 mb-5`}>Соберите бургер</h1>
          <div className={burger.container}>
          <div className={burger.wrapper}>
              <BurgerIngredients cards={cards}/>
          </div>
          <div className={burger.wrapper}>
              <BurgerConstructor cards={cards}/>
              <Summary/>
          </div>
          </div>
      </section>
    )
}

export default Burger;