import { useState } from "react";
import { useEffect } from "react";
import styles from "./PaginationBackEndDriven.module.css";

export default function PaginationBackEndDriven() {
  const [products, setProducts] = useState([]); //first step is to fetch the data

  const [page, setPage] = useState(1); //for pagination by defualt its on 1 page

  const [totalPages, setTotalPages] = useState(0); // now we have to manage how many total pages are there in the backend

  function handleSetPage(selectedPage) {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  }

  async function fetchProducts() {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(data.total / 10); //(total products present in the backend)/10 == will be equal to total pages present
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [page]);

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
      {products.length > 0 && (
        <div className={styles.pagination}>
          <span
            onClick={() => {
              if (page > 1) {
                setPage((page) => page - 1);
              }
            }}
            className={page <= 1 ? styles.pagination__disabled : ""}
          >
            ⬅️
          </span>

          {Array.from({ length: totalPages }, (_, i) => {
            return (
              <span
                key={i}
                onClick={() => handleSetPage(i + 1)}
                className={page === i + 1 ? styles.selected__page : ""}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            onClick={() => {
              if (page < totalPages) {
                setPage((page) => page + 1);
              }
            }}
            className={page === totalPages ? styles.pagination__disabled : ""}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
}

// TODO THIS APPROACH IS BACKEND DRIVEN AND VERY EFFECTIVE COZ WE ARE FETCHING DATA ON SMALLER CHUNKS WHICH ULTIMATELY INCREASES THE PERFORMANCE OF THE WEBSITE
