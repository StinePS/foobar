import { useState } from "react";
import ProductList from "../components/Productlist";
import Basket from "../components/Upperbasket";

function BasketPage(props) {
  const [products, setProducts] = useState([]);
  //const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")));
  const productCopy = [...products];

  return (
    <div className="App">
      <main>
        <section className="sec-bg rounded-corners">
          <Basket basket={props.basket} />
        </section>
      </main>
    </div>
  );
}

export default BasketPage;
