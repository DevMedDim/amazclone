import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'


function Checkout() {
    
    const [{basket,user}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXm145UEFo8nc5-PzKEoO4Ms5kAkTkAUKoyCGoGykW0D6NMB4Pcs8i7Ls_F7VipYsKgA&usqp=CAU" alt=""/>
                <div>
                    <h2 className="checkout__title">
                        <span>
                            Your Email is <span>{user?.email}</span> <br/>
                        </span>
                        Your Shopping Basket
                    </h2>
                   {basket.map(item =>(
                       <CheckoutProduct key ={item}
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                       />

                       
                   ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
                
            </div>
        </div>
         )
}

export default Checkout
