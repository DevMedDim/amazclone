import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({ id, image, title, price, rating }) {
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                {title}
            </div>
            <div className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </div>
            <div className="checkoutProduct__rating">
            {Array(rating).fill().map((_, i) => (
                        <p key={i} >⭐</p>
                    ))}
                </div>
            </div>
        
    )
}

export default CheckoutProduct
