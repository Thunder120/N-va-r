import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Stock1 from "@/pages/Stock1";
import Stock2 from "@/pages/Stock2";
import ProductDetail from "@/pages/ProductDetail";
import Wishlist from "@/pages/Wishlist";

function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#070708", color: "#F4F4F9", flexDirection: "column", gap: "1rem" }}>
      <h1 style={{ fontSize: "2rem" }}>Page not found</h1>
      <a href="/" style={{ color: "#C8CCD4" }}>Return home</a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stock-1" element={<Stock1 />} />
        <Route path="/stock-2" element={<Stock2 />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
