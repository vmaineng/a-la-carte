import React, { useEffect, useState } from "react";

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
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="flex flex-col items-center gap-16">
      <h2> Cart Total:</h2>
      {cart.length === 0 ? (
        <p> Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <h3> Total: ${totalPrice.toFixed(2)}</h3>
      <div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li
              key={product.id}
              className="rounded-lg border border-gray-300 bg-white p-6 shadow-md transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {product.name}
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {product.description}
              </p>
              <p className="mt-3 text-lg font-bold text-gray-800 dark:text-gray-200">
                ${product.price.toFixed(2)}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
