import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router';
import {basketTotal} from './reducer';



function Subtotal() {
    const history = useHistory();
    const [{ basket }] = useStateValue();

  
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>

                        <p>
                            {/*do this later show number of items and sum the total price*/}
                            Subtotal ({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                       {/* <small className="subtotal__gift">
                          <input type="checkbox" /> this order contains a gift
                        </small>
                        */ }
                    </>
                )}
                decimalScale={2}
                value={basketTotal(basket)} // do this later
                displayType={"text"}
                thousandsSeperator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push('/payment')} >Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
