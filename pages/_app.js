import "../sass/main.scss";
import "react-credit-cards/lib/styles.scss";
import Nav from "../components/Nav.js";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [basket, setBasket] = useState([]);
  return (
    <>
      <Nav />
      <Component basket={basket} setBasket={setBasket} {...pageProps} />
    </>
  );
}

export default MyApp;

//JSON.parse(localStorage.getItem("basket")) || []
