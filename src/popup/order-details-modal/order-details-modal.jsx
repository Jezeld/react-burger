import Modal from '../modal/modal';
import order from './order-details-modal.module.css';

function OrderDetailsModal() {
    return (
        <div className={order.wrapper}>
            <p className="text text_type_digits-large">034536</p>
            <h3 className="text text_type_main-medium mt-8">идентификатор заказа</h3>
            <button className={order.check}></button>
            <p className="text text_type_main-default">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive mt-2">
                Дождитесь готовности на орбитальной стануии
            </p>
        </div>
    );
}

export default OrderDetailsModal;
