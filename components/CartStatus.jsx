import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const CartStaus=()=>{
    const {productArr}= useContext(CartContext);
    const cartList= productArr.filter((prod)=> prod.addedToCart);

    return(
        <span>
            {cartList.length}
        </span>
    )
}

export default CartStaus;

