import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export const CartsContext = createContext();

export function CartsContextProvider({ children }) {
  const { carts, setCarts, loading, error } = useFetch();

  return (
    <CartsContext.Provider value={{ carts, setCarts, loading, error }}>
      {children}
    </CartsContext.Provider>
  );
}
