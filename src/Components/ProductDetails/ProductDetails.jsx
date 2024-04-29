import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css"; // Import your CSS file for styling

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL params
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  return (
    <div className="product-detail-container">
      {product ? (
        <div key={product.id} className="product-detail-card">
          <img
            src={product.imageUrl}
            alt={product.title}
            width="500"
            height="400"
          />
          <div className="product-brand">Brand: {product.brand}</div>
          <div className="product-title">{product.title}</div>
          <div className="product-discount-price">Rs. {product.discountPrice}</div>
          <div className="product-price">Rs. {product.price}</div>
          <div className="product-description">{product.description}</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
