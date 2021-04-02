import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'


function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXm145UEFo8nc5-PzKEoO4Ms5kAkTkAUKoyCGoGykW0D6NMB4Pcs8i7Ls_F7VipYsKgA&usqp=CAU" alt=""/>
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {/* /checkoutProduct*/ }
                    {/* /checkoutProduct*/ }
                    {/* /checkoutProduct*/ }
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
                
            </div>
        </div>
         )
}

export default Checkout
