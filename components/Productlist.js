import Product from "../components/Product";

export default function ProductList(props) {
  const mapped = props.products.map((product) => <Product addToBasket={props.addToBasket} key={product.name} {...product} />);

  return (
    <section className="sec-bg rounded-corners">
      <h1 className="header center">Pick your poison</h1>
      <div className="grid-2"> {mapped}</div>
    </section>
  );
}
//<Product {...props.product} />
