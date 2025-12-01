import CartStaus from "../components/CartStatus";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const AmountDetails=()=>{
    const {productArr}= useContext(CartContext);
    const amount = productArr.reduce(
        (acc, p) => p.addedToCart ? acc + p.price : acc,0
    );
    const delieveryCharges= amount>1000? "40":"299"

    const cartItems = productArr.filter(p => p.addedToCart);
    
    const avgDiscount = cartItems.reduce((acc, p) => {
        const discountAmount = p.price * (p.discount / 100);
        return acc + discountAmount;
    }, 0) / (cartItems.length || 1);

    const totalAfterDiscount= amount-avgDiscount


    return(
        <div className="card-body">
            <h4>Price details</h4>
            <hr />
            {/* <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
            <div className="d-flex justify-content-between align-items-center">
                <span>
                    Price: (<CartStaus /> item)
                </span>
                <span>₹{amount}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
                <span>
                    Average Discount: 
                </span>
                <p>₹{avgDiscount.toFixed(2)}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
                <span>
                    Delievery charges: 
                </span>
                <span>₹{delieveryCharges}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center mt-2">
                <span>
                    Total Amount: 
                </span>
                <span>₹{totalAfterDiscount.toFixed(2)}</span>
            </div>
            <hr />

            <div>You will save ₹{avgDiscount.toFixed(2)} in this order</div>
        </div>
    )
}

export default AmountDetails;




// const amount = productArr
//   .filter(p => p.addedToCart)
//   .reduce((acc, curr) => acc + curr.price, 0);



