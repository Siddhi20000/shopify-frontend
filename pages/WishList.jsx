import Header from "../components/Header";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { Link } from "react-router-dom";

const WishList=()=>{
    const {wishlistItems, cartItems, handleCart, handleRemoveFromWishlist, handleDelete, isInCart}= useContext(CartContext);

    return(
        <>
            <Header />
            <div className="container p-2">
                <div className="row">
                    {
                        wishlistItems.map((p)=>{
                            const product = p.productId;
                            if (!product) return null;
                            
                            const cartItem = cartItems.find(item => item.productId?._id === product._id);

                            return(
                            <div className="col-md-3">
                                <div className="card border-0">
                                    <img src={product.imageUrl} style={{width: "100%", height: "250px", objectfit: "cover" }} className="card-img-top mt-3" alt="" />
                                    <div className="card-body p-0"> 
                                        <Link to={`/products/${product._id}`} className="nav-link mb-2">
                                        <h5 className="card-title text-truncate mt-1">{product.title}</h5>
                                        <p className="card-text text-truncate">{product.details}</p>
                                        </Link>
                                        <button 
                                            //onClick={()=> isInCart(product._id) ?handleCart(product._id): handleDelete(product._id)} 
                                            onClick={() => cartItem ? handleDelete(cartItem._id) : handleCart(product._id)}
                                            className={`btn ${isInCart(product._id) ? "btn-success" : "btn-primary"} rounded-0 mt-3 px-2 w-100`}
                                            >
                                            {isInCart(product._id) ? "Remove from Cart" : "Add to Cart"}
                                        </button>
                                        <button 
                                        onClick={() => handleRemoveFromWishlist(p._id)}
                                        className="btn btn-outline-secondary mt-2 rounded-0 px-2"
                                        //className={`btn ${p.addedToWishList? "btn-success" : "btn-primary"} rounded-0 mt-3 px-2`}
                                        style={{width: "100%", objectfit: "cover"}} 
                                        >
                                        Remove from Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default WishList;



