import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const WishListStatus=()=>{
    const {productArr}= useContext(CartContext);
    const WishList= productArr.filter((p)=> p.addedToWishList);

    return(
        <>
            <span>{WishList.length}</span>
        </>
    )
}

export default WishListStatus;

