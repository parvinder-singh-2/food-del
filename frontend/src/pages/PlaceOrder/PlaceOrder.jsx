import { useContext } from "react"
import "./placeOrder.css"
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  
  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <>
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-feilds">
          <input type="text"  placeholder="First Name"/>
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Address"/>
        <input type="text" placeholder="Street"/>
        <div className="multi-feilds">
          <input type="text"  placeholder="City"/>
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-feilds">
          <input type="text"  placeholder="Zip Code"/>
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone"/>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="">
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() +2}</b>
            </div>
          </div>
            <button>PROCEED TO PAY</button>
        </div>
      </div>
    </form>
    </>
  )
}

export default PlaceOrder