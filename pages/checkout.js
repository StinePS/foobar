// import { useBasket } from "../hooks/useBasket";
import Creditcard from "../components/Creditcard";
import Link from "next/link";

export default function Checkout() {
  return (
    <>
      <main>
        <section>
          <div className="sec-bg rounded-corners">
            <div className="progress">
              <p>Step 2 of 3</p>
            </div>
            <Creditcard />
            <div className="btn-container center">
              <Link href="/cart">
                <a className="btn">Back to cart</a>
              </Link>
              <Link href="/thanks">
                <a className="btn">Pay</a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
