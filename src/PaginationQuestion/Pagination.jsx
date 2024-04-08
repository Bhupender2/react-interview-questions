import { useState } from "react";
import { useEffect } from "react";
import styles from "./Pagination.module.css";

export default function Pagination() {
  const [products, setProducts] = useState([]); //first step is to fetch the data

  const [page, setPage] = useState(1); //for pagination by defualt its on 1 page

  function handleSetPage() {
    setPage(page + 1);
  }

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
          {products.slice(page * 10 - 10, page * 10).map((currentItem) => (
            <div key={currentItem.id} className={styles.products__items}>
              <img src={currentItem.thumbnail} alt={currentItem.title} />
              <div>{currentItem.title}</div>
            </div>
          ))}
        </div>
      )}
      {products.length > 0 && (
        <div className={styles.pagination}>
          <span>➡️</span>
          {Array.from({ length: products.length / 10 }, (_, i) => {
            return <span key={i}>{i + 1}</span>;
          })}
          <span>⬅️</span>
        </div>
      )}
    </div>
  );
}
