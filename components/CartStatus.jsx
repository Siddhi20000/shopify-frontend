import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const CartStaus=()=>{
    const {cartItems}= useContext(CartContext);
    //console.log("Cart items:", cartItems);

    return(
        <span>
            {cartItems.length}
        </span>
    )
}

export default CartStaus;

