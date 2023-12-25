import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredient from './burger-component.module.css';



function BurgerComponent({card}) {
    return (
       <li className='' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
           <div className={ingredient.flex}>
           <DragIcon type="primary"/>
           <ConstructorElement
               text={card.price}
               price={card.price}
               thumbnail={card.image}
           />
           </div>
       </li>
    )
}

export default BurgerComponent;