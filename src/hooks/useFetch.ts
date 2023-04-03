import { useEffect, useState } from "react";

const useFetch = () => {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
