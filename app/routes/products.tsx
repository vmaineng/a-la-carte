import { useLoaderData } from "@remix-run/react";
import { loader as productsLoader } from "./api.products";
import Products from "~/components/Products";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

type LoaderData = {
  products: Product[];
};

// Fetch products from an API or database
export const loader = productsLoader;

export default function ProductsPage() {
  const { products } = useLoaderData<LoaderData>();
  return <Products products={products} />;
}
