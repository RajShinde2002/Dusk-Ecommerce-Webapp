import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Layout from "./Layout";
import { useDispatch } from "react-redux";
import { allProducts } from "./redux/ProductSlice";

// Use React.lazy for lazy loading components
const ProductListing = React.lazy(() =>
  import("./Pages/Products/ProductListing")
);
const ProductDetail = React.lazy(() =>
  import("./Pages/Products/ProductDetail")
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch(allProducts(data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Using Suspense with a fallback for lazy-loaded components */}
          <Route
            path="/products"
            element={
              <Suspense
                fallback={<h2 className="text-black text-3xl">Loading...</h2>}
              >
                <ProductListing />
              </Suspense>
            }
          />
          <Route
            path="/products/:id"
            element={
              <Suspense
                fallback={<h2 className="text-black text-3xl">Loading...</h2>}
              >
                <ProductDetail />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
