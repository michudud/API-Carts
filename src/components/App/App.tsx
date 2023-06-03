import "./App.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import CartDetails from "../CartDetails";
import MainPage from "../MainPage";
import { CartsContextProvider } from "../../context/CartsContext";

const App = () => {
  return (
    <HashRouter>
      <CartsContextProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/details/:cartId" element={<CartDetails />} />
        </Routes>
      </CartsContextProvider>
    </HashRouter>
  );
};

const rootDiv = document.getElementById("root");
if (rootDiv) {
  createRoot(rootDiv).render(<App />);
}

export default App;
