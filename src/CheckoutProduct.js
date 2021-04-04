import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () =>{
        // remove item from basket
         dispatch({
             type: 'REMOVE_FROM_BASKET',
             id:id,
         })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <div className="checkoutProduct__title">{title}</div>
                

                <div className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i} >⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket </button>
            </div>
        </div>

    )
}

export default CheckoutProduct
