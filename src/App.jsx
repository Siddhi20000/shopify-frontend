import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartContext from "../contexts/CartContext"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "../pages/Home";
import ProductListingPage from "../pages/ProductListingPage";
import Cart from "../pages/Cart";
import WishList from "../pages/WishList";
import ProductsDetails from "../pages/ProductsDetails";
import Login from "../pages/Login";
import ProfilePage from "../pages/ProfilePage";
import Checkout from "../pages/Checkout";

import useFetch from "../src/useFetch";
import { useState,useEffect } from "react";

function App() {
  const {data=[],loading,error}= useFetch("http://localhost:5000/products");

  const [category, setCategory] = useState([]); 
  const [rating, setRating] = useState(null);
  const [sort, setSort] = useState(null); 
  const [price, setPrice] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [slider, setSlider] = useState({
            max: 2000, 
            min: 0, 
            value: 0, 
            label: ''
        });
        
    const [productArr, setProductArr]= useState(data);
    const [cartItems, setCartItems]= useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [quantity, setQuantity]= useState(0)

    const quantityInc=(productId)=>{
      quantity=quantity+1;
      setQuantity(quantity);
    }

    const quantityDec=(productId)=>{
      quantity=quantity-1;
      setQuantity(quantity)
    }

    useEffect(() => {
      setProductArr(data);
    }, [data]);

    const fetchCart = async () => {
      try {
        const response = await fetch("http://localhost:5000/products/api/cart");
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error(error);
      }
    };

const fetchWishlist = async () => {
  try {
    const res = await fetch("http://localhost:5000/products/api/wishlist");
    const data = await res.json();

    // store wishlist documents
    setWishlistItems(data);

    // mark products
    setProductArr(prev =>
      prev.map(p => ({
        ...p,
        addedToWishList: data.some(
          w => w.productId._id === p._id
        )
      }))
    );
  } catch (err) {
    console.error(err);
    setWishlistItems([]);
  }
};


useEffect(() => {
  fetchCart();
  fetchWishlist();
}, []);

    
if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>

  const handleCart = async(productId) => {
      try {
        const response = await fetch(`http://localhost:5000/products/api/cart/${productId}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ quantity: 1 }),
          }
        );
        const cartItem = await response.json();
        console.log(cartItem);

        setCartItems(prev => {
      const exists = prev.find(
        item => item?.productId?._id === cartItem.productId._id
      );

      if (exists) {
        return prev.map(item =>
          item.productId._id === cartItem.productId._id
            ? cartItem
            : item
        );
      }

      return [...prev, cartItem];
        });
      } 
      catch (error) {
        console.error(error);
      }
    };

    // const isInCart = (productId) => {
    //   return cartItems?.some(
    //     item => item?.productId?._id === productId
    //   );
    // };
    const isInCart = (productId) => {
      return cartItems?.some(item => item?.productId?._id === productId);
    };

    const handleDelete = async (cartItemId) => {
      await fetch(`http://localhost:5000/products/api/cart/${cartItemId}`, {
        method: "DELETE",
      });
      setCartItems(prev =>
        prev.filter(item => item._id !== cartItemId)
      );
    };


    
    // const handleCart=(selectedBtn)=>{
    //     const updatedData= productArr.map((p)=>{
    //         if(p._id !== selectedBtn){
    //             return p;
    //         }
    //         return{
    //             ...p,
    //             addedToCart: !p.addedToCart,
    //         };
    //     });
    //     setProductArr(updatedData);
    // }


    // const handleWishList=(selectedBtn)=>{
    //   const updatedContent= productArr.map((p)=>{
    //     if(p._id !== selectedBtn){
    //       return p;
    //     }
    //     return{
    //       ...p,
    //       addedToWishList: !p.addedToWishList,
    //     };
    //   });
    //   setProductArr(updatedContent)
    // }

//     const handleWishList = async (productId) => {
//       const res = await fetch("http://localhost:5000/products/api/wishlist/addToWishlist",{
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ productId }),
//       }
//     );
    
//     const data = await res.json();
    
       //Refresh wishlist from backend
//     fetchWishlist();
// };


// Remove from wishlist
const handleRemoveFromWishlist = async (wishlistItemId) => {
  try {
    // Call backend API to delete the wishlist item
    const res = await fetch(
      `http://localhost:5000/products/api/wishlist/removeFromWishlist/${wishlistItemId}`,
      { method: "DELETE" }
    );

    const data = await res.json();
    console.log("Wishlist removed:", data.message);

    // Update frontend state
    setWishlistItems(prev =>
      prev.filter(item => item._id !== wishlistItemId)
    );
  } catch (error) {
    console.error("Error removing from wishlist:", error);
  }
};

const isInWishlist = (productId) => {
  return wishlistItems.some(
    item => (item.productId?._id || item.productId) === productId
  );
};

    
const toggleWishlist = async (productId) => {
  try {
    if (isInWishlist(productId)) {
      const item = wishlistItems.find(
        w => (w.productId?._id || w.productId) === productId
      );

      if (!item) return;

      await fetch(
        `http://localhost:5000/products/api/wishlist/removeFromWishlist/${item._id}`,
        { method: "DELETE" }
      );
    } else {
      await fetch(
        `http://localhost:5000/products/api/wishlist/addToWishlist/${productId}`,
        { method: "POST" }
      );
    }

    fetchWishlist();
  } catch (error) {
    console.error("Wishlist error:", error);
  }
};



    // const handleQuantityI=(id)=>{
    //   const updatedData= productArr.map((p)=>{
    //     if (p._id !== id) return p;
    //     const newQty = (p.quantity || 1) + 1;

    //     return {
    //       ...p,
    //       quantity: newQty,
    //       totalPrice: p.price * newQty 
    //     };
    //   });
    //   setProductArr(updatedData);
    // }
    // 
    
const handleQuantityI = async (productId) => {
  const res = await fetch(
    `http://localhost:5000/products/api/cart/update/${productId}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "inc" }),
    }
  );

  const updatedItem = await res.json();

  setCartItems(prev =>
    prev.map(item => {
      if (item.productId?._id === productId) {
        return {
          ...item,
          quantity: updatedItem.quantity,
          totalPrice: updatedItem.totalPrice,
        };
      }
      return item;
    })
  );
};

    // const handleQuantityD=(id)=>{
    //   const updatedData= productArr.map((p)=>{
    //   if (p._id !== id) return p;
    //     const newQty = (p.quantity || 1) - 1;

    //     return {
    //       ...p,
    //       quantity: newQty,
    //       totalPrice: p.price * newQty 
    //     };
    //   });
    //   setProductArr(updatedData);
    // }

const handleQuantityD = async (productId) => {
  const res = await fetch(
    `http://localhost:5000/products/api/cart/update/${productId}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "dec" }),
    }
  );

  const data = await res.json();

  if (data.removed) {
    // Remove item safely
    setCartItems(prev =>
      prev.filter(item => item.productId?._id !== productId)
    );
  } else {
    // Update only quantity + totalPrice
    setCartItems(prev =>
      prev.map(item =>
        item.productId?._id === productId
          ? {
              ...item,
              quantity: data.quantity,
              totalPrice: data.totalPrice,
            }
          : item
      )
    );
  }
};

    const handleCategory=(gender)=>{
      if (category.includes(gender)) {
        setCategory(category.filter(c => c !== gender));
      } 
      else {
        setCategory([...category, gender]);
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

  const clearFilters = () => {
    setCategory([]);
    setRating(null);
    setSort(null);
    setPrice(0);
    setSlider({ max: 2000, min: 0, value: 0, label: '' });
};


  return (
    <>
      <CartContext.Provider value={{productArr, handleCart, handleQuantityI, handleQuantityD,handleCategory, 
        handleRating, handleSort, category, rating, sort, onSlide, slider, price, cartItems, isInCart, handleDelete,
        searchQuery,setSearchQuery, clearFilters, handleRemoveFromWishlist, wishlistItems, isInWishlist, toggleWishlist,
        quantityInc,quantityDec,quantity, }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/more" element={<ProductListingPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/products/:id" element={<ProductsDetails />} />
            <Route path="/category/:type" element={<ProductListingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
            path="/"
            element={
              searchQuery && searchQuery.trim() !== "" ? (
              <ProductListingPage />
            ) : (
              <Home />
            )
          }
          />
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



