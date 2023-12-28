import Modal from '../modal/modal';
import details from './ingredient-details-modal.module.css';
import PropTypes, { func } from 'prop-types';
import ingredientPropTypes from '../../utils/prop-types';

function IngredientDetailsModal({ isOpen, onClose, card }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={details.wrapper}>
                <h2 className={`text text_type_main-large ml-10 mt-10 ${details.title}`}>
                    Детали ингредиента
                </h2>
                <img src={card.image} alt={card.name} className={details.img} />
                <h3 className="text text_type_main-medium mt-4">{card.name}</h3>
                <div className={details.description}>
                    <div className={details.item}>
                        <p className="text text_type_main-default text_color_inactive">
                            Калории,ккал
                        </p>
                        <p className="text text_type_main-default text_color_inactive">
                            {card.calories}
                        </p>
                    </div>
                    <div className={details.item}>
                        <p className="text text_type_main-default text_color_inactive">Белки,г</p>
                        <p className="text text_type_main-default text_color_inactive">
                            {card.proteins}
                        </p>
                    </div>
                    <div className={details.item}>
                        <p className="text text_type_main-default text_color_inactive">Жиры,г</p>
                        <p className="text text_type_main-default text_color_inactive">
                            {card.fat}
                        </p>
                    </div>
                    <div className={details.item}>
                        <p className="text text_type_main-default text_color_inactive">
                            Углеводы,г
                        </p>
                        <p className="text text_type_main-default text_color_inactive">
                            {card.carbohydrates}
                        </p>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

IngredientDetailsModal.propTypes = {
    card: PropTypes.objectOf(ingredientPropTypes.isRequired).isRequired,
    onClose: PropTypes.func.isRequired
};

export default IngredientDetailsModal;
