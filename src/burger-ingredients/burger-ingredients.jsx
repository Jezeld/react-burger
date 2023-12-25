import React from 'react';
import burgerIngredients from './burger-ingredients.module.css';
import BurgerTab from './tab/tab';
import BurgerCard from '../burger-card/burger-card';


function BurgerIngredients(props) {
    const { cards } = props;
    const filteredBun = cards.filter(function(itm){
        return itm.type === "bun";
    });

    const filteredSauce = cards.filter(function(itm){
        return itm.type === "sauce";
    });

    const filteredMain = cards.filter(function(itm){
        return itm.type === "main";
    });

      return (
          <>
<BurgerTab/>
            <div className={`${burgerIngredients.category}`}>
                <div className={`custom-scroll`}></div>
            <div className={`mt-10`}>
                <h2 className='text text_type_main-medium'>Булки</h2>
                <ul className={burgerIngredients.grid}>
                        {filteredBun.map((card) => (
                     <BurgerCard
                         key={card._id}
                         card={card}
                     />
                        ))}
                </ul>
            </div>
                <div className={`mt-10`}>
                    <h2 className='text text_type_main-medium'>Соусы</h2>
                    <ul className={burgerIngredients.grid}>
                        {filteredSauce.map((card) => (
                            <BurgerCard
                                key={card._id}
                                card={card}
                            />
                        ))}
                    </ul>
                </div>
                <div className={`mt-10`}>
                    <h2 className='text text_type_main-medium'>Начинки</h2>
                    <ul className={burgerIngredients.grid}>
                        {filteredMain.map((card) => (
                            <BurgerCard
                                key={card._id}
                                card={card}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default BurgerIngredients;