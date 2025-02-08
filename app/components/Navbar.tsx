import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo or Brand */}
        <Link to="/" className="text-xl font-bold text-white">
          MyStore
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link
            to="/products"
            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
