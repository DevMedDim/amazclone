import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>Gaming Chair</p>
                <p className="product__price">
                    <small>DH</small>
                    <strong>2200</strong>
                </p>
                <div className="product__rating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71rQGaRbS1L._SS1000_.jpg" alt=""/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
