import "./App.css";
import Timer from "./TimerQuestion/Timer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagination from "./PaginationQuestion/Pagination";
import Introduction from "./Introduction";

function App() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/Timer" element={<Timer />} />
        <Route
          path="/pagination"
          element={<Pagination data={data} itemsPerPage={2} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
