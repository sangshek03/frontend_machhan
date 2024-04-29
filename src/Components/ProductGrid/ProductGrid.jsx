import React, { useState, useEffect } from "react";
import "./Grid.css";
import { Link } from 'react-router-dom';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/all-products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts((prevProducts) => [...prevProducts, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
        <div key={product.id} className="product-card">
          <img
            src={product.imageUrl}
            alt={product.title}
            width="200"
            height="200"
          />
          <div className="brand">{product.brand}</div>
          <div className="title">{product.title}</div>
          <div className="discount-price">Rs. {product.discountPrice}</div>
          <div className="price">Rs. {product.price}</div>
        </div>
         </Link>
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default ProductGrid;
