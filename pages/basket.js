import { useState, useEffect } from "react";
import ProductList from "../components/Productlist";
import Basket from "../components/Upperbasket"

function BasketPage(props) {
  const [products, setProducts] = useState([]);
  //const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")));
  const productCopy = [...products];

  return (
    <div className="App">
      <Basket basket={props.basket} />
    </div>
  );
  }

export default BasketPage;
