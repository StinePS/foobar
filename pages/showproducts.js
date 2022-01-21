import ProductList from "../components/Productlist";
import { useBasket } from "../hooks/useBasket";
import { getBeers } from "../libs/beers";

function Showproducts({ products }) {
  const { addProduct } = useBasket();

  return (
    <div className="App">
      <main>
        <ProductList addToBasket={addProduct} products={products} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const beers = await getBeers();
  return {
    props: { products: beers },
  };
}

export default Showproducts;
