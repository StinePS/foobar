import { useState } from "react";
import MyBasket from "../components/MyBasket";

export default function Basket(props) {
  const [basket, setBasket] = useState([]);
  return (
    <aside>
      <MyBasket basket={props.basket} />
    </aside>
  );
}
