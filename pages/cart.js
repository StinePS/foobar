import { useState } from "react";
import Basket from "../components/Upperbasket";
import Link from "next/link";
import ProductList from "../components/Productlist";

function BasketPage(props) {
  const [products, setProducts] = useState([]);
  //const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")));
  const productCopy = [...products];

  return (
    <div className="App">
      <main>
        <section className="sec-bg rounded-corners">
          <div className="progress">
            <p>Step 1 of 3</p>
          </div>
          <Basket basket={props.basket} />
          <div className="btn-container center">
            <Link href="/showproducts">
              <a className="btn">Back to beers</a>
            </Link>
            <Link href="/checkout">
              <a className="btn">Payment details</a>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BasketPage;
