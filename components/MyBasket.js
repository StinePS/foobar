import { product } from "platform";

export default function MyBasket(props) {
    const initialValue = 0;
    let sum = props.basket.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.price;
    }, initialValue);
    const mapped = props.basket.map((product) => <p key={product.name}>{product.name} {product.amount}</p>);
  
    return (
      <div>
        <h2>Your Basket</h2>
        {mapped}
        <p>{props.basket.length} items</p>
        <p>{sum},-</p>
      </div>
    );
  }