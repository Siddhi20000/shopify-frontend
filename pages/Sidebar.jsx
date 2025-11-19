import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../contexts/CartContext";

const Sidebar=()=>{
    const {handleCategory, handleRating, handleSort, onSlide, slider}= useContext(CartContext);

    return(
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h3>Filters</h3>
                <Link className="fs-5 mb-0 text-dark">Clear</Link>
            </div>
            <div>
                <p className="fs-5 fw-bold mt-4">Price</p>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0 text-body-tertiary fw-semibold">500</p>
                    <p className="mb-0 text-body-tertiary fw-semibold">1000</p>
                    <p className="mb-0 text-body-tertiary fw-semibold">1500+</p>
                </div>
                <input type="range" 
                className="form-range rounded-3 slider" 
                min="0" max="2000" 
                step="50" id="range1"
                style= {{ textColor: "black" }}
//                onChange={(e) => onSlide(e)}
//                min="0"
//                max="2000"
//                step="50"
                value={slider.value}
                onChange={onSlide}
                ></input>
                <br />
                <p className="fs-5 fw-bold mt-4">Category</p>
                <input type="checkbox" id="mensClothing" onChange={() => handleCategory("Men")} /> men Clothing
                <br />
                <input type="checkbox" id="womensClothing" onChange={() => handleCategory("Women")} /> women Clothing
                <br />
                <input type="checkbox" id="kidsClothing" onChange={() => handleCategory("Kids")} /> kid Clothing
                <br />
                <input type="checkbox" id="electronicsClothing" onChange={() => handleCategory("Unisex")} /> electronics
                <p className="fs-5 fw-bold mt-4">Rating</p>
                <input type="radio" id="4star" onChange={() => handleRating(4)} /> 4 star & above
                <br />
                <input type="radio" id="3star" onChange={() => handleRating(3)} /> 3 star & above
                <br />
                <input type="radio" id="2star" onChange={() => handleRating(2)} /> 2 star & above
                <br />
                <input type="radio" id="1star" onChange={() => handleRating(1)} /> 1 star & above
                <p className="fs-5 fw-bold mt-4">Sort by</p>
                <input type="radio" id="lowToHigh" onChange={() => handleSort("lowToHigh")} /> - Low to high
                <br />
                <input type="radio" id="highToLow" onChange={() => handleSort("highToLow")} /> - High to low
            </div>
        </>
    )
}

export default Sidebar;



// Explanation:
// d-flex → makes it a flex container
// justify-content-between → pushes items to opposite ends (left & right)
// align-items-center → vertically centers them
// mb-0 → removes extra bottom margin from <p>



// Source - https://stackoverflow.com/q
// Posted by Skeeter62889, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-07, License - CC BY-SA 4.0

