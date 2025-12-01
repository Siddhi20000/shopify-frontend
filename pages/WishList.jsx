import Header from "../components/Header";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { Link } from "react-router-dom";

const WishList=()=>{
    const {productArr, handleCart, handleWishList}= useContext(CartContext);
    const filteredArr= productArr.filter((p)=> p.addedToWishList);

    return(
        <>
            <Header />
            <div className="container">
                <div className="row">
                    {
                        filteredArr.map((p)=>(
                            <div className="col-md-3">
                                <div className="card border-0">
                                    <img src={p.imageUrl} style={{width: "100%", height: "250px", objectfit: "cover" }} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <Link to={`/products/${p._id}`} className="nav-link mb-2">
                                        <h5 className="card-title text-truncate">{p.title}</h5>
                                        <p className="card-text text-truncate">{p.details}</p>
                                        </Link>
                                        {/* <Link to={`/products/${prod._id}`} className="card-body d-flex flex-column nav-link">
                                                    <h4 className="card-title text-truncate" style={{ minHeight: "48px" }}>{prod.title}</h4>
                                                    <p>₹{prod.price}</p>
                                        </Link> */}
                                        <button 
                                            onClick={()=>handleCart(p._id)} 
                                            className={`btn ${p.addedToCart ? "btn-success" : "btn-primary"} rounded-0`}>
                                            {p.addedToCart ? "Remove from Cart" : "Add to Cart"}
                                        </button>
                                        <button 
                                            className="btn btn-outline-secondary mt-2 rounded-0 px-2"
                                            onClick={() => handleWishList(p._id)}
                                            >{p.addedToWishList? "Remove from Wishlist":"Move to Wishlist"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default WishList;



