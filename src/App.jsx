import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Mainsection from "./Components/MainSection";
import ProductSection from "./Components/ProductSection";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
import Cart from "./Components/Cart";

function App() {
  let [addCart, setCart] = useState(0);

  return (
    <BrowserRouter>
      <Home addCart={addCart} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Mainsection />
              <ProductSection addCart={addCart} setCart={setCart} />
              <ContactForm />
              <Footer />
            </>
          }
        />

        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
