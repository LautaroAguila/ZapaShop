import PropTypes from 'prop-types';
import "./CartWidget.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCartContex } from '../../routing/contex/cartContex'; // Asegúrate de que la ruta de importación y el nombre sean correctos
import 'bootstrap/dist/css/bootstrap.min.css';

function CartWidget({ precio, nombre }) {
    const { itemsTotal } = useCartContex(); // Asegúrate de que este hook exista y esté correctamente implementado

    return (
        <div className="cart-widget d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faCartShopping} className="cart-widget__icon" />
            <p className="cart-widget__items-total mb-0 ms-2">
                {itemsTotal}
            </p>
        </div>
    );
}

CartWidget.propTypes = {
    precio: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
};

export default CartWidget;
