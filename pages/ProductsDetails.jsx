import useFetch from "../src/useFetch";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const ProductsDetails=()=>{
    const {id}= useParams();
    const {
    productArr,
    cartItems,
    wishlistItems,
    handleCart,
    handleQuantityI,
    handleQuantityD,
    toggleWishlist,
    handleDelete,
  } = useContext(CartContext);

    const filteredData= productArr.find((p)=>p._id === id) ;
    const cartItem = cartItems.find(
    (item) => item.productId?._id === id
  );

  const isInCart = !!cartItem;
  const cartItemId = cartItem?._id; // cart document ID
  
  const isInWishlist = wishlistItems.some(
    (w) => w.productId?._id === id
  );

    if (!filteredData) {
        return (
            <>
                <Header/>
                <div className="container mt-5">
                    <h4>Loading product details...</h4>
                </div>
            </>
        );
    }

    return(
        <>
           <Header/>
           <div className="container">
                <div className="card border-0 p-2 mt-2">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={filteredData.imageUrl} 
                            className="card-img-top rounded-0" 
                            style={{width: "300px", height: "350px"}} 
                            alt="" />
                            <br />

                            <button
                            //onClick={() => handleCart(filteredData._id)}
                            onClick={() => isInCart ? handleDelete(cartItemId) : handleCart(filteredData._id)}
                            className={`btn ${ isInCart ? "btn-success" : "btn-primary"} rounded-0 w-100 mt-3`}>
                                {isInCart ? "Remove from Cart" : "Add to Cart"}
                            </button>
                            
                            <button
                            onClick={() => toggleWishlist(filteredData._id)}
                            className="btn btn-outline-secondary rounded-0 w-100 mt-2"
                            >
                                {isInWishlist? "Remove from Wishlist": "Add to Wishlist"}
                            </button>

                        </div>
                        <div className="col-md-8">
                            <p className="fs-3">{filteredData.title}</p>
                            <span className="p-1">{filteredData.rating}</span>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <br />
                            <div className="fs-4 fw-bold mt-3">₹{filteredData.price}</div>
                            <p className="fw-bold" style={{color: "grey"}}>{filteredData.discount}% off</p> 
                            <span className="fw-bold">Quantity:</span>
                            <button 
                                className="btn btn-outline-dark btn-sm rounded-4 ms-1"
                                onClick={()=>handleQuantityI(filteredData._id)}
                                style={{ width: "25px", height: "20px", padding: "0", fontSize: "12px" }}
                                >+
                            </button>
                            <span 
                              className="ms-2 me-2 border border-black px-2"
                              style={{ width: "25px", height: "15px", padding: "0", fontSize: "12px" }}
                            >
                              {filteredData.quantity}
                            </span>
                            <button 
                                className="btn btn-outline-dark btn-sm rounded-4"
                                onClick={()=>handleQuantityD(filteredData._id)}
                                style={{ width: "25px", height: "20px", padding: "0", fontSize: "12px" }}
                            >-
                            </button> 
                             <br />
                            {/* {filteredData.size} */}
                            <div className="d-flex mt-3">
                                <span className="fw-bold me-2">Size:</span>
                                {filteredData.size.map((s, index) => (
                                    <button 
                                        key={index}
                                        className="btn btn-outline-dark btn-sm rounded-0 me-2"
                                        style={{ minWidth: "50px" }}
                                    >{s.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                            <hr />
                            <h1>logo</h1>
                            <hr />
                            {filteredData.details}
                        </div>
                        <div className="mt-5">
                            <hr />
                            <h5 className="mt-4">More Items you may like</h5>
                            <div className="row">
                    {
  wishlistItems.slice(0, 4).map((p) => {
    const product = p.productId;
    if (!product) return null;

    const wishlistCartItem = cartItems.find(
      (item) => item.productId?._id === product._id
    );
    const isInCart = !!wishlistCartItem;
    const cartItemId = wishlistCartItem?._id;

    return (
      <div className="col-md-3" key={product._id}>
        <div className="card border-0">
          <img
            src={product.imageUrl}
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title text-truncate">{product.title}</h5>
            <p className="fw-bold">{product.price}</p>
            <button
              onClick={() =>
                isInCart ? handleDelete(cartItemId) : handleCart(product._id)
              }
              className={`btn ${
                isInCart ? "btn-success" : "btn-primary"
              } rounded-0 w-100 mt-3`}
            >
              {isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    );
  })
}

                </div>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}

export default ProductsDetails;




