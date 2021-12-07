import { useState } from "react";
import ProductList from "../components/Productlist";
import Basket from "../pages/basket"
//import Basket from "./basket";

function Showproducts() {
  const [products, setProducts] = useState([
    {
      id: 1,
      category: "IPA",
      productdisplayname: "Bajer",
      price: 49,
      brandname: "Falskberg",
      soldout: 0,
    },
    {
      id: 2,
      category: "IPA",
      productdisplayname: "Bajer",
      price: 49,
      brandname: "Falskberg",
      soldout: 1,
    },
    {
      id: 3,
      category: "IPA",
      productdisplayname: "Bajer",
      price: 49,
      brandname: "Falskberg",
      soldout: 0,
    },
    {
      id: 4,
      category: "IPA",
      productdisplayname: "Bajer",
      price: 49,
      brandname: "Falskberg",
      soldout: 0,
    },
  ]);
  const [basket, setBasket] = useState([]);
    function addToBasket(product) {
    setBasket(function (oldBasket) {
      const nextState = oldBasket.concat(product);
      return nextState;
    });
  }
  
  const productCopy = [...products];
  productCopy.sort((a, b) => {
    if (a.productdisplayname > b.productdisplayname) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <div className="App">
      <ProductList
        addToBasket={addToBasket}
        products={productCopy}
      />
      <Basket basket={basket} />
    </div>
  );
  }

export default Showproducts;

/*function Productlist(props){
  const product = {
    id: 1163,
    productdisplayname: "Round Neck Jersey",
    price: 895,
    soldOut: 0,
  };
return (
  <section>
  <h1>Product List</h1>
  <section className="ProductList">
    <Product {...props.product} />
    <ProductList product={product} />
  </section>
</section>
);
}

function Product(props) {
  console.log(props);
  return (
    <article>
      <h2>{props.productdisplayname}</h2>
      <p>${props.price}</p>
    </article>
  );
}

export default Productlist;*/
