import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const CartStaus=()=>{
    const {productArr}= useContext(CartContext);
    const cartList= productArr.filter((prod)=> prod.addedToCart);

    return(
        <div>
            {cartList.length}
        </div>
    )
}

export default CartStaus;