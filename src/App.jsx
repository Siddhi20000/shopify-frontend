import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartContext from "../contexts/CartContext"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "../pages/Home";
import ProductListingPage from "../pages/ProductListingPage";
import Cart from "../pages/Cart";
import WishList from "../pages/WishList";
import ProductsDetails from "../pages/ProductsDetails";

import useFetch from "../src/useFetch";
import { useState,useEffect } from "react";

function App() {
  const {data=[],loading,error}= useFetch("https://shopify-backend-mocha.vercel.app/products");

  const [category, setCategory] = useState([]); 
  const [rating, setRating] = useState(null);
  const [sort, setSort] = useState(null); 
  const [price, setPrice] = useState(0);
  const [slider, setSlider] = useState({
            max: 100, 
            min: 0, 
            value: 0, 
            label: ''
        });

    
    const [productArr, setProductArr]= useState(data);
    useEffect(() => {
      setProductArr(data);
    }, [data]);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>

    const handleCart=(selectedBtn)=>{
        const updatedData= productArr.map((p)=>{
            if(p._id !== selectedBtn){
                return p;
            }
            return{
                ...p,
                addedToCart: !p.addedToCart,
            };
        });
        setProductArr(updatedData);
    }

    const handleWishList=(selectedBtn)=>{
      const updatedContent= productArr.map((p)=>{
        if(p._id !== selectedBtn){
          return p;
        }
        return{
          ...p,
          addedToWishList: !p.addedToWishList,
        };
      });
      setProductArr(updatedContent)
    }

    const handleQuantityI=(id)=>{
      const updatedData= productArr.map((p)=>{
        if(p._id !== id){
          return p
        }
        return{
          ...p,
          quantity: (p.quantity || 1) +1
        }
      })
      setProductArr(updatedData);
    }
    const handleQuantityD=(id)=>{
      const updatedData= productArr.map((p)=>{
        if(p._id === id && p.quantity>0){
          return{
            ...p,
            quantity: p.quantity -1
          }
        }
        return p
      })
      setProductArr(updatedData);
    }

    const handleCategory=(cat)=>{
      if (category.includes(cat)) {
        setCategory(category.filter(c => c !== cat));
      } 
      else {
        setCategory([...category, cat]);
      }
    }

    const handleRating = (value) => {
      setRating(value);
    };

    const handleSort = (value) => {
      setSort(value);
    };

    const handlePrice = (value) => {
      setPrice(value);
    };


    const onSlide = (e) => {
      const value = e.target.value;
      setSlider({ ...slider, value });
      handlePrice(value); 
  };

  return (
    <>
      <CartContext.Provider value={{productArr, handleCart, handleWishList, handleQuantityI, handleQuantityD,handleCategory, 
        handleRating, handleSort, category, rating, sort, onSlide, slider, price}}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/more" element={<ProductListingPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/products/:id" element={<ProductsDetails />} />
            {/* <Route path="/mens" element={<Home />} />
              <Route path="/womens" element={<Home />} />
              <Route path="/kids" element={<Home />} />
              <Route path="/electronics" element={<Home />} /> */}
          </Routes>
        </Router>
      </CartContext.Provider>  
    </>
  )
}

export default App;




