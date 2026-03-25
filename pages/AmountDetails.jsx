import CartStaus from "../components/CartStatus";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { Link } from "react-router-dom";

const AmountDetails=()=>{
    const {cartItems}= useContext(CartContext);

    // Total MRP
  const totalPrice = cartItems.reduce((sum, item) => {
    if (!item.productId) return sum;   
    return sum + item.productId.price * item.quantity;
}, 0);


  // Total Discount
  const totalDiscount = cartItems.reduce(
    // (acc, item) =>
    //   acc +
    //   (item.productId.discount || 0) * item.quantity,
    // 0

    (acc, item) => {
        if (!item.productId) return acc;
        return acc + ((item.productId.discount || 0) * (item.quantity || 1));
    }, 0
  );
  

  // Delivery Charges
  const deliveryCharges = totalPrice > 500 ? 0 : 40;

  // Final Amount
  const totalAfterDiscount =
    totalPrice - totalDiscount + deliveryCharges;

    return(
        <div className="card-body">
            <h4>Price details</h4>
            <hr />
            {/* <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
            <div className="d-flex justify-content-between align-items-center">
                <span>
                    Price: (<CartStaus /> item)
                </span>
                <span>₹{totalPrice}</span> 
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
                <span>
                    Average Discount: 
                </span>
                <p>₹{totalDiscount.toFixed(2)}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
                <span>
                    Delievery charges: 
                </span>
                <span>₹{deliveryCharges}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center mt-2">
                <span>
                    Total Amount: 
                </span>
                <span>₹{totalAfterDiscount.toFixed(2)}</span>
            </div>
            <hr />
            <Link to="/checkout" className="btn btn-secondary mt-2 rounded-0 px-2 w-100">Checkout</Link>

            <div>You will save ₹{totalDiscount.toFixed(2)} in this order</div>
        </div>
    )
}

export default AmountDetails;




// const amount = productArr
//   .filter(p => p.addedToCart)
//   .reduce((acc, curr) => acc + curr.price, 0);


