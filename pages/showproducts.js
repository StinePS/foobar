import { getBeers } from "../libs/beers";
import ProductList from "../components/Productlist";
import { useBasket } from "../hooks/useBasket";

// Fetch the static data for the path, thus avoiding ever giving "Loading... message"
export async function getStaticProps() {
  const beers = await getBeers();
  return {
    props: { products: beers },
  };
}

export default function Showproducts({ products }) {
  const { addProduct } = useBasket();

  return (
    <div className="App">
      <main>
        <ProductList addToBasket={addProduct} products={products} />
      </main>
    </div>
  );
}
