import { ReactElement, createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

interface ContextInterface {
  carts: object[] | [];
  setCarts: Function;
  loading: boolean;
  error: any;
}

export const CartsContext = createContext<ContextInterface | null>(null);

export function CartsContextProvider({ children }: { children: ReactElement }) {
  const { carts, setCarts, loading, error } = useFetch();

  return (
    <CartsContext.Provider value={{ carts, setCarts, loading, error }}>
      {children}
    </CartsContext.Provider>
  );
}
