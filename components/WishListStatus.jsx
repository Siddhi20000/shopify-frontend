import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const WishListStatus=()=>{
    const { wishlistItems } = useContext(CartContext);
    return <span>{wishlistItems.length}</span>;
}

export default WishListStatus;

