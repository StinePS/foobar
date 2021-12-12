import { useBasket } from "../hooks/useBasket";

export default function MyBasket() {
  const { basket, setBasket } = useBasket();
  const initialValue = 0;
  let sum = basket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price;
  }, initialValue);
  const mapped = basket.map((product) => (
    <p key={product.name}>
      {product.name} {product.amount}
    </p>
  ));

  return (
    <div>
      <h2 className="header center">Your cart</h2>
      {mapped}
      <p>{basket.length} items</p>
      <p>{sum},-</p>
    </div>
  );
}
