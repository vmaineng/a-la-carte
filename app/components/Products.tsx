import { useCart } from "../context/CartContext";

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
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col items-center gap-4">
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
