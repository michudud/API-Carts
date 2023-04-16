import { useEffect, useState } from "react";

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

const useFetch = () => {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function requestCarts() {
      try {
        const res = await fetch("https://dummyjson.com/carts");
        const json = await res.json();
        setCarts(json.carts);
        setLoading(false);
      } catch (error: any) {
        setError(error);
      }
    }
    requestCarts();
  }, []);

  return { carts, setCarts, loading, error };
};

export default useFetch;
