import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import CartStatus from "./CartStatus";
import WishListStatus from "./WishListStatus";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../contexts/CartContext";

const Header=()=>{
    const {searchQuery, setSearchQuery}= useContext(CartContext);
    const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/more?search=${searchQuery}`);  // Navigate to ProductListingPage with search query
    }
  };
   
    return(
        <div className="container p-0">
            <nav className="navbar navbar-expand-lg text-secondary d-flex">
                <div className="input-group container-fluid"> 
                    <a className="navbar-brand" href="/home">Shopify</a>
                    <form role="search" onSubmit={(e)=> e.preventDefault()}> {/* className="navbar-nav flex-row flex-wrap ms-md-auto"  */}
                        <div className="input-group form-control p-0 rounded-0">
                            <span className="input-group-text bg-white border-0">
                                <i className="bi bi-search text-secondary"></i>
                            </span>
                            <input
                                type="search"
                                className="form-control border-0"
                                placeholder="Search"
                                aria-label="Search"
                                style={{
                                    boxShadow: "none",
                                    outline: "none",
                                }}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleKeyPress}   // Trigger on Enter
                            />
                        </div>
                        {/* <i className="bi bi-search bg-light text-secondary me-2" style={{ fontSize: "12px" }}></i>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                    </form>
                    <Link to="/login" className="btn btn-secondary rounded-0">Login</Link>
                </div>
                <Link to="/wishlist" className="nav-link p-3 border-0 bg-white"><i className="bi bi-heart text-dark" style={{ fontSize: "19px" }}></i></Link><WishListStatus />
                {/* <button onClick={()=> handleCartStatus} className="p-3 border-0 bg-white"><i className="bi bi-cart3" style={{ fontSize: "22px" }}></i></button><div className="text-black">cart</div> */}
                <Link to="/cart" className="nav-link mb-1 d-flex align-items-center text-dark">
                    <i className="bi bi-cart fs-5 text-dark me-2"></i>
                    <span>cart</span>
                    <CartStatus />
                </Link>
            </nav>
        </div>
    )
}

export default Header;




