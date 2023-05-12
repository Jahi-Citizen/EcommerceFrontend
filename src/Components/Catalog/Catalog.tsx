import React, { useEffect } from "react";
import { useState } from "react";
import './Catalog.css';
import axios from "axios";
import { Link } from 'react-router-dom';

type Product = {
  id: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  productBrand: string;
  productCategory: string;
  productImageURL: string;
};

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<Product[]>('http://localhost:8080/productCatalog')
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handlePurchase = (productId: number) => {
    // redirect to checkout page with product ID as a parameter
    window.location.href = `/Checkout?productId=${productId}`;
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Product Catalog</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card mb-4">
              <img
                className="card-img-top"
                src={product.productImageURL}
                alt={product.productName}
              />
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">{product.productDescription}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Brand: {product.productBrand}
                  </small>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Category: {product.productCategory}
                  </small>
                </p>
                <p className="card-text">
                  Price: {product.productPrice.toFixed(2)}
                </p>
                <button
                  onClick={() => handlePurchase(product.id)}
                  className="btn btn-primary"
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;