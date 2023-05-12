import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

type Product = {
  id: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  productBrand: string;
  productCategory: string;
  productImageURL: string;
};

type CheckoutParams = {
  productId: string;
};

const Checkout = () => {
  const { productId } = useParams<CheckoutParams>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios
      .get<Product>(`http://localhost:8080/${productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.log(error));
  }, [productId]);

  return (
    <div>
      <h1>Checkout</h1>
      {product ? (
        <div>
          <h2>{product.productName}</h2>
          <p>{product.productDescription}</p>
          <p>Price: {product.productPrice}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Checkout;