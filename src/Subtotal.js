import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>

                        <p>
                            {/*do this later*/ }
                            Subtotal (0):
                            <strong> 0 </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> this order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0} // do this later
                displayType={"text"}
                thousandsSeperator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
