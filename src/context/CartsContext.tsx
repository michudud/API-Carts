import { ReactElement, createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

interface ContextInterface {
  carts: Cart[] | [];
  setCarts: Function;
  loading: boolean;
  error: any;
}

interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
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
