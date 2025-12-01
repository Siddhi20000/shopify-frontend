import useFetch from "../src/useFetch";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const ProductsDetails=()=>{
    const {id}= useParams();
    const {productArr,handleCart, handleQuantityI, handleQuantityD }= useContext(CartContext);

    const filteredArr= productArr.filter((p)=> p.addedToWishList);
    const filteredData= productArr.find((p)=>p._id === id) 

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
                            <button className="btn btn-primary rounded-0 mt-3 px-2" style={{width: "300px"}}>Buy now</button><br />
                            <button className="btn btn-secondary rounded-0 mt-3 px-2" style={{width: "300px"}}>Add to Cart</button>
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
                        filteredArr.slice(0, 4).map((p)=>(
                            <div className="col-md-3">
                                <div className="card border-0">
                                    <img src={p.imageUrl} style={{width: "100%", height: "250px", objectfit: "cover" }} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title text-truncate">{p.title}</h5>
                                        <p className="fw-bold">{p.price}</p>
                                        <button 
                                            onClick={()=>handleCart(p._id)} 
                                            className={`btn ${p.addedToCart ? "btn-success rounded-0 mt-3" : "btn btn-secondary rounded-0 mt-3"}`} style={{width: "100%"}}>
                                            {p.addedToCart ? "Remove from Cart" : "Add to Cart"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
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




