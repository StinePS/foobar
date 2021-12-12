import "../sass/main.scss";
import "react-credit-cards/lib/styles.scss";
import Nav from "../components/Nav.js";
import PageTitle from "../components/PageTitle";
import { useState } from "react";
import { BasketContext } from "../hooks/useBasket";

function MyApp({ Component, pageProps }) {
  const [basket, setBasket] = useState([]);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      <Nav />
      <PageTitle />
      <Component {...pageProps} />
    </BasketContext.Provider>
  );
}

export default MyApp;
