import { useEffect, useState } from "react";

export const useQuantity = () => {
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      if (!res.ok) {
        console.log("There is a Problem");
        return;
      }
      setQuantity(data.total);
    };
    fetchProduct();
  }, []);
  return {quantity,setQuantity};
};