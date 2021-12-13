// import { useBasket } from "../hooks/useBasket";
import Link from "next/link";

export default function ThankYou() {
  // Correct when we have actual order numbers!
  const data = [];
  return (
    <>
      {!data ? (
        <div>
          <h2 className="center">Your order will be displayed in a few minutes</h2>
        </div>
      ) : null}
      {data ? (
        <main>
          <section>
            <div className="sec-bg rounded-corners">
              <div className="progress">
                <p>Step 3 of 3</p>
              </div>
              <h2 className="header center">Thank you for your order!</h2>
              <p>
                Your order number is ORDER NUMBER <br />
                You can follow your order on the dashboard
              </p>
              <Link href="/">
                <a className="btn">Dashboard</a>
              </Link>
            </div>
          </section>
        </main>
      ) : null}
    </>
  );
}
