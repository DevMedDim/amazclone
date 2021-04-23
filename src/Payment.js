import React, { useEffect, useState } from 'react'
import './Payment.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {basketTotal} from './reducer'
import axios from './axios';
import {db} from './firebase';

function Payment() {
    const [{ user, basket},dispatch] = useStateValue();
    const history = useHistory();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [clientSecret, setClientSecret] = useState(true);
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() =>{
        //generate stripe client secret to charge client
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${basketTotal(basket) * 100 }`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])
    console.log('the secret is =>', clientSecret)
    const handleSubmit = async (e) => {
        // stripe code
        e.preventDefault();
        setProcessing(true); 
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) =>{
            // paymentIntent = payment confirmation
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket:basket,
                amount:paymentIntent.amount,
                created:paymentIntent.created
            })


            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders');
        })
    }
    const handleChange = e => {
        // listening for changes in the CardElement
        // and display any error when the user types his card info
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "something went wrong but go on");
    }
    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout {<Link to='/checkout'> ({basket?.length} items)  </Link>}
                </h1>
                {/*Payment section -delivery adresse */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p> {user?.email} </p>
                        <p>123 bab lkhmis</p>
                        <p>Marrakech, El Haouz</p>
                    </div>
                </div>
                {/* Paysment section - Review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                        {/*  */}
                    </div>
                </div>
                {/* Payment section - Payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* stripe code goes here */}
                        <form onSubmit={handleSubmit} action="">
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order total: {value}  </h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={basketTotal(basket)}
                                    displayType={"text"}
                                    thousandsSeperator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded} >
                                    <span> {processing ? <p> Processing </p> : "Buy Now"  } </span>
                                </button>
                            </div>
                            {/* Errors */}
                            {error && <div> {error} </div> }
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
