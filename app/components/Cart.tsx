import { useCart } from "../context/CartContext";

export default function Carts() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <button
                className="border bg-red-500"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
