import PropTypes from 'prop-types';

const ingredientPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['bun', 'sauce', 'main']).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired
});

export default ingredientPropTypes;
