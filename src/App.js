import { useEffect, useState } from "react";
import "./App.css";
import Surprise from "./Surprise";

function App() {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setTime((time) => time - 1);
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
            {time}
          </div>
        )}
        {(time === 0 || time < 0) && <Surprise />} {/*conditional rendering done*/}
      </header>
    </div>
  );
}

export default App;
