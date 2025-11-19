import Header from "../components/Header";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { useState } from "react";

const Cart=()=>{
    const {productArr, handleWishList, handleCart, handleQuantityI, handleQuantityD}= useContext(CartContext);
    const cartProducts= productArr.filter((prod)=> prod.addedToCart);
    

    return(
        <>
            <Header />
            <div className="container">
                {
                    cartProducts.map((prod)=>(
                        <div className="card border-0">
                            <div className="row g-0 align-items-center">
                                <div className="col-md-4">
                                    <img src={prod.imageUrl} 
                                    className="cart-img" //"image-fit-cover rounded-0 border-0"
                                    style={{width: "80%", height: "250px", objectfit: "cover" }}
                                    alt="" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="card-title">
                                            {prod.title}
                                        </div>
                                        <div className="card-text">
                                            <h4>${prod.price}</h4>
                                            <p className="text-body-tertiary fw-bolder">{prod.discount}% off</p>
                                            <span>Quantity: </span>
                                            <button 
                                                className="btn btn-outline-dark btn-sm rounded-4"
                                                onClick={()=>handleQuantityI(prod._id)}
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
                                                onClick={()=>handleQuantityD(prod._id)}
                                                style={{ width: "25px", height: "20px", padding: "0", fontSize: "12px" }}
                                                >-
                                            </button>
                                            <br />
                                            <button 
                                            className="btn btn-secondary rounded-0 mt-3 px-2"
                                            onClick={()=>handleCart(prod._id)} 
                                            >Remove from Cart</button><br />
                                            <button 
                                            className="btn btn-outline-secondary mt-2 rounded-0 px-2"
                                            onClick={() => handleWishList(prod._id)}
                                            >{prod.addedToWishList? "Remove from Wishlist":"Move to Wishlist"}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Cart;



