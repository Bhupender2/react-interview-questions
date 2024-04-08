import { useState } from "react";
import { useEffect } from "react";
import styles from "./Pagination.module.css";

export default function Pagination() {
  const [products, setProducts] = useState([]); //first step is to fetch the data

  const [page, setPage] = useState(1); //for pagination by defualt its on 1 page

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
          {products.slice(0, page * 10).map((currentItem) => (
            <div key={currentItem.id} className={styles.products__items}>
              <img src={currentItem.thumbnail} alt={currentItem.title} />
              <div>{currentItem.title}</div>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            border: "2px solid grey",
            padding: "10px",
            fontSize: "20px",
            cursor:"pointer"
          }}
        >
          ⬅️
        </div>
        {Array.from({ length: 10 }, (_, i) => {
          return (
            <div
              style={{
                border: "2px solid grey",
                padding: "10px",
                width: "30px",
                fontSize: "20px",
                cursor:"pointer"
              }}
            >
              {i + 1}
            </div>
          );
        })}
        <div
          style={{
            border: "2px solid grey",
            padding: "10px",
            fontSize: "20px",
            cursor:"pointer"
          }}
        >
          ➡️
        </div>
      </div>
    </div>
  );
}
