//WILL GET ALL THE PRODUCTS
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";


const ProductListingPage=()=>{
    const {productArr, handleCart, handleWishList, category, rating, sort, slider }= useContext(CartContext);
    const { type } = useParams();
    const location = useLocation(); // useLocation gives full URL info

    let filteredProducts = [...productArr];

    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("search")?.toLowerCase() || "";

    // if (searchQuery) {
    //     filteredProducts = filteredProducts.filter(prod =>
    //         prod.title.toLowerCase().includes(searchQuery)
    //     );
    // }

    if (searchQuery) {
    const searchWords = searchQuery.toLowerCase().split(" "); // ["kids","winter","collection"]
    filteredProducts = filteredProducts.filter(prod =>
        searchWords.every(word =>
            (prod.title?.toLowerCase().includes(word) ||
             prod.category?.toLowerCase().includes(word) ||
             prod.gender?.toLowerCase().includes(word))
        )
    );
}

    // ACC TO GENDER PAGE OPENS
    if (type) {
        filteredProducts = filteredProducts.filter(
            p => p.gender.toLowerCase() === type
        );
    }
    
    // CATEGORY (Gender) filter
    if (category.length > 0) {
        filteredProducts = filteredProducts.filter(p => 
            category.includes(p.gender)
        );
    }

    // SLIDER - PRICE SORT
    if (slider.value > 0 && slider.value!= slider.max) {
        filteredProducts = filteredProducts.filter(p => p.price <= slider.value);
        // filteredProducts = filteredProducts.filter(p =>
        //     p.price >= slider.min && p.price <= slider.max
        // );
    }
    else if (slider.value > 0 && slider.value === slider.max) {
        filteredProducts= filteredProducts.filter(p=> p.price>max)
    }

    // RATING filter
    if (rating) {
        filteredProducts = filteredProducts.filter(p => p.rating >= rating);
    }
    
    // SORT filter
    if (sort === "lowToHigh") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "highToLow") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    return(
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {
                                filteredProducts.map((prod)=>(
                                    <>
                                        <div className="col-md-3" key={prod._id}>
                                            <div className="card h-100 p-2 border-0 position-relative">
                                                <img src={prod.imageUrl} alt={prod.name} 
                                                className="card-img-top object-fit-cover rounded-0 h-50 img-fluid"
                                                />
                                                <div>
                                                    <button
                                                    className="p-3 border-0 bg-white rounded-circle d-flex align-items-center justify-content-center position-absolute top-0 end-0 m-3"
                                                    style={{width: "35px", height: "35px"}}  //className="btn btn-light rounded-circle p-2 border"
                                                    onClick={() => handleWishList(prod._id)}>
                                                    <i
                                                    className={`bi ${prod.addedToWishList ? "bi-heart-fill text-danger" : "bi-heart"} fs-5`}
                                                    ></i>
                                                    </button>
                                                    {/* <i className="bi bi-heart" style={{ fontSize: "15px" }}>
                                                    </i> */}
                                                </div > 
                                                <div>
                                                <Link to={`/products/${prod._id}`} className="card-body d-flex flex-column nav-link">
                                                    <h4 className="card-title text-truncate" style={{ minHeight: "48px" }}>{prod.title}</h4>
                                                    <p>₹{prod.price}</p>
                                                </Link>
                                                <button 
                                                    onClick={()=>handleCart(prod._id)} 
                                                    className={`btn ${prod.addedToCart ? "btn-success" : "btn-primary"}`}
                                                >
                                                    {prod.addedToCart ? "Remove from Cart" : "Add to Cart"}
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductListingPage;





