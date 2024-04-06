import "./App.css";
import Timer from "./TimerQuestion/Timer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagination from "./PaginationQuestion/Pagination";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/pagination" element={<Pagination />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
