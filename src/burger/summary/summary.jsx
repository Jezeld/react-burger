import summary from './summary.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

function Summary(props) {
    const { handleOrderDetailsClick } = props;
    return (
        <div className={`${summary.container} mt-10`}>
            <div className={summary.price}>
                <p className="text text_type_digits-medium">610</p>
                <CurrencyIcon style={{ width: '36px', height: '36px' }} type="primary" />
            </div>
            <Button htmlType="button" type="primary" size="large" onClick={handleOrderDetailsClick}>
                Нажми на меня
            </Button>
        </div>
    );
}

Summary.propTypes = {
    handleOrderDetailsClick: PropTypes.func.isRequired
};
export default Summary;
