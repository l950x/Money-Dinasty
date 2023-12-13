import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./Pages/Connexion/Login";
import Search from "./Pages/Search/Search";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import ProduitDetail from "./components/ProduitDetail";
import Register from "./Pages/Register/Register";
import Jewelery from "./Pages/Jewelery/Jewelery";
import Electronics from "./Pages/Electronics/Electronics";
import Mens from "./Pages/Mens/Mens";
import Womens from "./Pages/Womens/Womens";
import Paiement from "./Pages/Paiement/Paiement";

import "./App.css";
import "./assets/css/navbar.css";
import "./assets/css/animation.css";
import "./assets/font/RobotoCondensed-Regular.ttf";
import "./assets/font/AQUATIC.ttf";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/Money-Dinasty" element={<Home />} />
          <Route path="/Money-Dinasty/Connexion" element={<Login />} />
          <Route path="/Money-Dinasty/Search" element={<Search />} />
          <Route path="/Money-Dinasty/Cart" element={<Cart />} />
          <Route path="/Money-Dinasty/Register" element={<Register />} />
          <Route path="/Money-Dinasty/Jewelery" element={<Jewelery />} />
          <Route path="/Money-Dinasty/Electronics" element={<Electronics />} />
          <Route path="/Money-Dinasty/Womens" element={<Womens />} />
          <Route path="/Money-Dinasty/Mens" element={<Mens />} />
          <Route path="/Money-Dinasty/Paiement" element={<Paiement />} />
          <Route path="/Money-Dinasty/produit/:id" Component={ProduitDetail} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
