import React, { useContext } from "react";
import { useCallback } from "react";

export const BasketContext = React.createContext();

export function useBasket() {
  const { basket, setBasket } = useContext(BasketContext);
  const addProduct = useCallback(
    (product) => {
      //lav en kopi
      let nextState = [...basket];

      //tjek om øl allerede er i basket
      const existing = nextState.find((item) => item.name === product.name);

      if (existing) {
        //fandt den
        existing.amount = existing.amount + 1;
      } else {
        //findes ikke
        product.amount = 1;
        nextState = nextState.concat(product);
      }

      setBasket(nextState);
    },
    [basket, setBasket]
  );

  const removeProduct = useCallback((product) => {}, []);

  return { addProduct, removeProduct, basket, setBasket };
}
