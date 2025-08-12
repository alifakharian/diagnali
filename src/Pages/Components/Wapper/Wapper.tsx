import { HashRouter, Route, Routes } from "react-router-dom";
import Products from "../Products/Products";
import Singleproduct from "../Products/Singleproduct";

function Wapper() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:id" element={<Singleproduct />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default Wapper;
