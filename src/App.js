// App.js
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// Импортируем компоненты страниц (предполагается, что они находятся в папке 'pages')
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./scss/app.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/contacts" element={<Contacts />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user" element={<User />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
