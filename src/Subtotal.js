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
                            Subtotal (0):
                            <strong> 0 </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> this order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandsSeperator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Subtotal
