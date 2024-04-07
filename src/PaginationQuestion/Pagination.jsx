import { useState } from "react";
import { useEffect } from "react";

export default function Pagination() {
  //first step is to fetch the data
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>{products.map((curr) => curr.title)}</div>;
}
