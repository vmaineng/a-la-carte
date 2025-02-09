import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

type ProductsProps = {
  products: Product[];
};

export default function Products({ products }: ProductsProps) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
        </li>
      ))}
    </ul>
  );
}
