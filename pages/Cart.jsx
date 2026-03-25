import Header from "../components/Header";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { useState } from "react";
import AmountDetails from "./AmountDetails";

const Cart=()=>{
    const {toggleWishlist, handleDelete, cartItems, isInWishlist, handleQuantityI, handleQuantityD}= useContext(CartContext);
    //const cartProducts= productArr.filter((prod)=> prod.addedToCart);
    

    return(
        <>
            <Header />
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                {
                    //cartProducts.map((prod)=>(
                    cartItems.map((prod)=>{
                        const product = prod.productId;
                        if (!product) return null;

                        console.log("IMAGE URL:", product.imageUrl);
                        return(
                        <div className="card border-0">
                            <div className="row g-0 align-items-center">
                                <div className="col-md-4">
                                    <img src={product.imageUrl} 
                                    className="cart-img" //"image-fit-cover rounded-0 border-0"
                                    style={{width: "80%", height: "250px", objectFit: "cover" }}
                                    alt="" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="card-title">
                                            {product.title}
                                        </div>
                                        <div className="card-text">
                                            {/* <h4>${product.price}</h4> */}
                                            <h4>${prod.quantity>1? prod.totalPrice: product.price}</h4> 
                                            <p className="text-body-tertiary fw-bolder">{product.discount}% off</p>
                                            <span>Quantity: </span>
                                            <button 
                                                className="btn btn-outline-dark btn-sm rounded-4"
                                                onClick={()=>handleQuantityI(product._id)}
                                                style={{ width: "25px", height: "20px", padding: "0", fontSize: "12px" }}
                                                >+
                                            </button>
                                            <span 
                                                className="ms-2 me-2 border border-black px-2"
                                                style={{ width: "25px", height: "15px", padding: "0", fontSize: "12px" }}
                                            >
                                            {prod.quantity}
                                            </span>
                                            <button 
                                                className="btn btn-outline-dark btn-sm rounded-4"
                                                onClick={()=>handleQuantityD(product._id)} 
                                                style={{ width: "25px", height: "20px", padding: "0", fontSize: "12px" }}
                                                >-
                                            </button> 
                                            <br />
                                            <button 
                                            className="btn btn-secondary rounded-0 mt-3 px-2"
                                            onClick={()=>handleDelete(prod._id)}> 
                                                Remove from Cart
                                            </button>
                                            <br />
                                            <button 
                                            className="btn btn-outline-secondary mt-2 rounded-0 px-2"
                                            onClick={() => toggleWishlist(product._id)}
                                            >{isInWishlist(product._id)? "Remove from Wishlist":"Move to Wishlist"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
})}
                </div>
                <div className="col-md-4">
                <div className="card border-0 sticky-top">
                    <AmountDetails />
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Cart;



