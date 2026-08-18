import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <>
      <Header title="Product Cart Template" />
      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="/Product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}