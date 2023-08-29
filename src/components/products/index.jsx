import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleAddToCart = (productId) => {
    confirm("Item can be added");
    setCartCount(cartCount + 1);
    setProducts((prevProducts) =>
      prevProducts.map(
        (product) =>
          product.id === productId ? { ...product, inCart: true } : product,
        console.log(prevProducts)
      )
    );
  };

  return (
    <>
      <div className="cart-button">
        <button className="cart-button1">
          {cartCount > 0 ? `Go to cart (${cartCount})` : <ShoppingCartIcon />}
        </button>
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <div className="wishlist-icon">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMc56BwuOwlG1J4m_raQ7oxa9RqPBk2WQeA&usqp=CAU" />
              <IconButton className="my-icon">
                <FavoriteBorderIcon  />
              </IconButton>
            </div>
            <h3>{product.title}</h3>
            <p>Price: {product.id * 1000}</p>

            <button className="add-cart-btn" onClick={() => handleAddToCart(product.id)}>
              {product.inCart ? "Go to Cart" : "Add to Cart"}
            </button>
            {/* <button onClick={() => handleViewImage(product.image)}>
              View Image
            </button> */}
          </div>
        ))}
      </div>
    </>
  );
};
export default Products;

// import React, { useState, useEffect } from "react";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [modalImage, setModalImage] = useState(null);

//   useEffect(() => {
//     // Call the get product API and store the data in a JSON file
//     // For simplicity, let's assume the API response is an array of product objects
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/photos"
//         );
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleAddToCart = () => {
//     setCartCount(cartCount + 1);
//   };

//   const handleViewImage = (imageUrl) => {
//     setModalImage(imageUrl);
//   };

//   const handleModalClose = () => {
//     setModalImage(null);
//   };

//   return (
//     <div>
//       <div className="cart-button">
//         <button>
//           {cartCount > 0 ? `Go to cart (${cartCount})` : "Cart is empty"}
//         </button>
//       </div>
//       <div className="product-list">
//         {products.map((product) => (
//           <div
//             className="product"
//             key={product.id}
//             onMouseEnter={() => handleHover(product.id)}
//           >
//             <img src={product.image} alt={product.title} />
//             <h3>{product.title}</h3>
//             <p>Price: {product.price}</p>
//             <button onClick={handleAddToCart}>Add to cart</button>
//             <button onClick={() => handleViewImage(product.image)}>
//               View Image
//             </button>
//           </div>
//         ))}
//       </div>
//       {modalImage && (
//         <div className="modal">
//           <div className="modal-content">
//             <img src={modalImage} alt="Modal" />
//             <button onClick={handleModalClose}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;
