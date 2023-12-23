import PropTypes from 'prop-types';
import "./CartWidget.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'


function CartWidget ({precio, nombre}){
    return(
        <div className='carro'>
            <p className='numeroCarro'>
                0
            </p>
            <FontAwesomeIcon icon={faCartShopping}/>
            
        </div>
    )
}

export default CartWidget;