import ProductList from "../components/Productlist";
import Basket from "../components/Upperbasket";
import { useBasket } from "../hooks/useBasket";
import useBeers from "../hooks/useBeers";

function Showproducts() {
  const { basket, setBasket } = useBasket();
  const { data: products } = useBeers();
  if (!products) return <p>Loading...</p>;

  function addToBasket(product) {
    //lav en kopi
    let nextState = [...basket];

    //tjek om øl allerede er i basket
    const existing = nextState.find((item) => item.name === product.name);

    if (existing) {
      //fandt den
      existing.amount = existing.amount + 1;
    } else {
      //findes ikke
      product.amount = 1;
      nextState = nextState.concat(product);
    }

    setBasket(nextState);
  }

  return (
    <div className="App">
      <main>
        <ProductList addToBasket={addToBasket} products={products} />
        <Basket basket={basket} />
      </main>
    </div>
  );
}

export default Showproducts;
