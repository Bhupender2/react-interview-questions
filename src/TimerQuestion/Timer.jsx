import { useEffect, useState } from "react";
import "../App.css";
import Surprise from "./Surprise";

function Timer() {
  const [time, setTime] = useState(10);
  const min = Math.floor(time / 60);
  const sec = time % 60;
  useEffect(() => {
    const id = setInterval(() => {
      setTime((time) => {
        if (time > 0) return time - 1;
        else {
          clearInterval(id);
          return 0;
        }
      });
    }, 1000);
    return function () {
      clearInterval(id);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {time > 0 && (
          <div
            style={{
              height: "200px",
              width: "400px",
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "90px",
            }}
          >
            {min > 10 ? "" : "0"}
            {min}:{sec < 10 ? "0" : ""}
            {sec}
          </div>
        )}
        {time === 0 && <Surprise />} {/*conditional rendering done*/}
      </header>
    </div>
  );
}

export default Timer;
