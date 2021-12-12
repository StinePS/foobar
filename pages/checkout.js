// import { useBasket } from "../hooks/useBasket";
import Creditcard from "../components/Creditcard";

export default function Checkout() {
  return (
    <>
      <main>
        <section>
          <div className="sec-bg rounded-corners">
            <div id="progress-outer" className="sec-bg">
              <div id="progress-inner" className="terti-bg"></div>
            </div>
            <Creditcard />
          </div>
        </section>
      </main>
    </>
  );
}
