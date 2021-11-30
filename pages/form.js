import { useState, useRef } from "react";
import { useBasket } from "../hooks/useBasket";
import Basket from "./basket";

export default function CheckoutForm(props) {
  const form = useRef(null);
  const [name, setName] = useState("");
  const [cardNumber, setCardnumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const basket = useBasket();

  const nameChanged = (e) => {
    setName(e.target.value);
  };

  function onSubmit(e) {
    e.preventDefault();
    console.log(form.current.checkValidity());
  }

  return (
    <>
      <h3>Checkout</h3>
      {/* Remove "uncomment" when basket is up and running: */}
      {/* {props.basket.length > 0 && ( */}
      <form ref={form} onSubmit={onSubmit}>
        <label>
          Full name
          <input type="text" required onChange={nameChanged} name="name" value={name} />
        </label>
        <label>
          Card number
          <input type="text" required onChange={(e) => setCardnumber(e.target.value)} name="cardNumber" value={cardNumber} />
        </label>
        <label>
          Expiry
          <input type="text" required onChange={(e) => setExpiry(e.target.value)} name="expiry" value={expiry} />
        </label>
        <label>
          CVC
          <input type="text" required onChange={(e) => setCvc(e.target.value)} name="cvc" value={cvc} />
        </label>
        <button>Pay</button>
      </form>
    </>
  );
}
