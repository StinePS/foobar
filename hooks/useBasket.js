import { useCallback } from "react";

export function useBasket() {
  const addProduct = useCallback((product) => {
    //localStorage.setItem("basket", JSON.stringify([product]));
  }, []);

  const removeProduct = useCallback((product) => {
    //localStorage.setItem("basket", JSON.stringify([product]));
  }, []);

  return { addProduct, removeProduct, basket: [{ id: "1", name: "Øl!" }] };
}
