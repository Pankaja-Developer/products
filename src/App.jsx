import React, { useState } from "react";
import Home from "./Components/Home";
import Mainsection from "./Components/MainSection";
import ProductSection from "./Components/ProductSection";
import Footer from "./Components/Footer";

import ContactForm from "./Components/ContactForm";
function App() {
  let [addCart, setCart] = useState(0);
  return (
    <>
      <Home />
      <Mainsection />
      <ProductSection addCart={addCart} setCart={setCart} />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
