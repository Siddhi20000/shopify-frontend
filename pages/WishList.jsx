import Header from "../components/Header";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const WishList=()=>{
    const {productArr, handleCart}= useContext(CartContext);
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
                                        <h5 className="card-title text-truncate">{p.title}</h5>
                                        <p className="card-text text-truncate">{p.details}</p>
                                        <button 
                                            onClick={()=>handleCart(p._id)} 
                                            className={`btn ${p.addedToCart ? "btn-success" : "btn-primary"}`}>
                                            {p.addedToCart ? "Remove from Cart" : "Add to Cart"}
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



