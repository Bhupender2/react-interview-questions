import { useState } from "react";
import { useEffect } from "react";
import styles from "./Pagination.module.css";

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

  return (
    <div>
      {products.length === 0 && (
        <div
          style={{
            fontSize: "50px",
            color: "#E72929",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          Loading...
        </div>
      )}

      {products.length > 0 && (
        <div className={styles.products}>
          {products.map((currentItem) => (
            <div key={currentItem.id} className={styles.products__items}>
              <img src={currentItem.thumbnail} alt={currentItem.title} />
              <div>{currentItem.title}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
