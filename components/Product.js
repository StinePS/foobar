import { useState } from "react";
export default function Product(props) {
  const [amount, setAmount] = useState(0);
  const color = props.soldout ? "red" : "green";

  function minus() {
    setAmount((oldAmount) => {
      if (oldAmount > 0) {
        return oldAmount - 1;
      }
      return 0;
    });
  }
  function plus() {
    setAmount((oldAmount) => oldAmount + 1);

  }

  function getInTheBasket(){
    props.addToBasket({
      price: 49,
      name: props.name,
      id: props.id,
    });
  }

  return (
    <article
      style={{
        backgroundColor: color,
      }}
    >
      <h2>{props.name}</h2>
      <p>{49} ,-</p>
      <button onClick={minus}> - </button>
      {amount}
      <button onClick={plus}> + </button>
      <button onClick={getInTheBasket} className="full-bleed">
        Get in the basket
      </button>
    </article>
  );
}