import { createContext, useEffect, useState } from "react";

export const CartsContext = createContext(null);

export function CartsContextProvider({ children }) {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    async function requestCarts() {
      try {
        const res = await fetch("https://dummyjson.com/carts");
        const json = await res.json();
        setCarts(json.carts);
      } catch (error) {}
    }
    requestCarts();
  }, []);

  return (
    <CartsContext.Provider value={{ carts, setCarts }}>
      {children}
    </CartsContext.Provider>
  );
}
