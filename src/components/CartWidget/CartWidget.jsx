import PropTypes from 'prop-types';
import "./CartWidget.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useCartContex } from '../../routing/contex/cartContex';

function CartWidget ({precio, nombre}){
    const {itemsTotal} = useCartContex()
    return(
        <div className='carro'>
            <p className='numeroCarro'>
                {itemsTotal}
            </p>
            <FontAwesomeIcon icon={faCartShopping}/>
            
        </div>
    )
}

export default CartWidget;