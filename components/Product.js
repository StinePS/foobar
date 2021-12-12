import { useState } from "react";
export default function Product(props) {
  const [amount, setAmount] = useState(0);

  // function minus() {
  //   setAmount((oldAmount) => {
  //     if (oldAmount > 0) {
  //       return oldAmount - 1;
  //     }
  //     return 0;
  //   });
  // }
  // function plus() {
  //   setAmount((oldAmount) => oldAmount + 1);
  // }

  function getInTheBasket() {
    props.addToBasket({
      price: 49,
      name: props.name,
      id: props.id,
    });
  }

  return (
    <article>
      <h2>{props.name}</h2>
      <span>
        {49},-{" "}
        <button onClick={getInTheBasket} className="full-bleed">
          Add to cart
        </button>
      </span>

      {/* <button onClick={minus}> - </button>
      {amount}
      <button onClick={plus}> + </button> */}
    </article>
  );
}
