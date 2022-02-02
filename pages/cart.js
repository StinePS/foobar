import Basket from "../components/Basket";
import Link from "next/link";
import { useBasket } from "../hooks/useBasket";

export default function BasketPage() {
  const { totalItems } = useBasket();
  return (
    <div className="App">
      <main>
        <section className="sec-bg rounded-corners">
          {/* Check how many items in cart and return appropriate screen */}
          {totalItems > 0 ? (
            <>
              <div className="progress">
                <p>Step 1 of 3</p>
              </div>
              <Basket />
              <div className="btn-container center">
                <Link href="/showproducts">
                  <a className="btn">Back to beers</a>
                </Link>
                <Link href="/checkout">
                  <a className="btn">Payment details</a>
                </Link>
              </div>
            </>
          ) : (
            <>
              <h1 className="header center page-header">{`There's nothing in the basket`}</h1>
              <p className="center">Please go to the beer menu to order</p>
              <div className="btn-container center">
                <Link href="/showproducts">
                  <a className="btn">Beers</a>
                </Link>
              </div>
            </>
          )}
        </section>
      </main>
    </div>
  );
}
