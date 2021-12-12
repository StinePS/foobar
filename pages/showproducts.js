import { product } from "platform";
import { useState, useEffect } from "react";
import ProductList from "../components/Productlist";
import Basket from "../components/Upperbasket"

function Showproducts(props) {
  const [products, setProducts] = useState([]);
  const productCopy = [...products];
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://barcode-data.herokuapp.com/beertypes"
      );
      const products = await res.json();
      setProducts(products);
    }
    fetchData();
  });



/*function addToBasket(product){
    const exist = basket.find((x) => x.id === product.id);
    if (exist) {
      setBasket(
        basket.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setBasket([...basket, { ...product, qty: 1 }]);
    }
}*/

function addToBasket(product){
  //lav en kopi
  let nextState = [...props.basket];
  //tjek om øl allerede er i basket
  const index = nextState.find(item=>item.name===product.name);
  if(index>-1){
  //fandt den
  nextState[index].amount=nextState[index].amount+1;
  } else {
  //findes ikke
  product.amount=1;
  nextState=nextState.concat(product);
  }
  //localStorage.setItem("basket", JSON.stringify(nextState))
  props.setBasket(nextState);
}

    /*function addToBasket(product) {
    setBasket(function (oldBasket) {
      const nextState = oldBasket.concat(product);
      return nextState;
    });
  }*/

  /*
  function addToBasket(product){
    const check_index = basket.findIndex(product => product.id === id);
    if (check_index !== -1){
      basket[check_index].amount++;
    } else {
      basket.push({...products.find(product => product.id === id), quantity:1 })
    }
  }*/
  
  /*productCopy.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });*/


  return (
    <div className="App">
      <ProductList
        addToBasket={addToBasket}
        products={productCopy}
      />
      <Basket basket={props.basket} />
    </div>
  );
  }

export default Showproducts;

/*const [products, setProducts] = useState([
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
  ]);*/
