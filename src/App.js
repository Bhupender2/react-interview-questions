import "./App.css";
import Timer from "./TimerQuestion/Timer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginationFrontEndDriven from "./PaginationFrontEndDriven/PaginationFrontEndDriven";
import Introduction from "./Introduction";
import PaginationBackEndDriven from "./PaginationBackEndDriven/PaginationBackEndDriven";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/Timer" element={<Timer />} />
        <Route
          path="/pagination-frontend"
          element={<PaginationFrontEndDriven />}
        />
           <Route
          path="/pagination-backend"
          element={<PaginationBackEndDriven />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
