import summary from './summary.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';


function Summary() {
    return (
        <div className={`${summary.container} mt-10`}>
            <div className={summary.price}>
            <p className="text text_type_digits-medium">610</p>
            <CurrencyIcon style={{ width: '36px', height: '36px'}} type="primary"/>
            </div>
            <Button htmlType="button" type="primary" size="large">
                Нажми на меня
            </Button>
        </div>
    )
}

export default Summary;