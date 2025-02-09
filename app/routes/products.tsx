import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
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
export async function loader() {
  const response = await fetch("/api/products");
  const products = await response.json();
  return json({ products });
}

export default function ProductsPage() {
  const { products } = useLoaderData<typeof loader>();
  return <Products products={products} />;
}
