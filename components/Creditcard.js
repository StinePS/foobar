import React from "react";
import { useRef, useState } from "react";
import Cards from "react-credit-cards";

// Credit card animation made with a mix of https://www.npmjs.com/package/react-credit-cards and what we learned in class
export default function CreditCard(props) {
  const form = useRef(null);
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [cardNumber, setCardnumber] = useState("");

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleNameChanged = (e) => {
    setName(e.target.value);
  };

  function onSubmit(e) {
    e.preventDefault();
    console.log(form.current.checkValidity());
  }

  return (
    <div id="PaymentForm" className="grid-2">
      <div className="column">
        <Cards cvc={cvc} expiry={expiry} focused={focus} name={name} number={cardNumber} />
      </div>
      <div className="column">
        <form ref={form} onSubmit={onSubmit}>
          <fieldset>
            <label htmlFor="fullname">Full name</label>
            <input id="fullname" type="text" placeholder="Aaron Aaronson" required onChange={handleNameChanged} name="name" value={name} onFocus={handleInputFocus} />
            <span className="hint">Please write your full name</span>
          </fieldset>

          <fieldset>
            <label htmlFor="cardnumber">Card number</label>
            <input
              id="cardnumber"
              type="tel"
              placeholder="0000 0000 0000 0000"
              required
              onChange={(e) => setCardnumber(e.target.value)}
              name="cardNumber"
              value={cardNumber}
              onFocus={handleInputFocus}
              pattern="[\d| ]{16,19}"
              maxLength="19"
              size="19"
            />
            <span className="hint">Please check you cardnumber</span>
          </fieldset>

          <fieldset>
            <label htmlFor="expiry">Expiry</label>
            <input id="expiry" type="tel" placeholder="01/23" required onChange={(e) => setExpiry(e.target.value)} name="expiry" value={expiry} onFocus={handleInputFocus} pattern="[\d|]{2}/?[\d|]{2}" maxLength="5" size="5" />

            <label htmlFor="cvc">CVC</label>
            <input id="cvc" type="tel" placeholder="123" required onChange={(e) => setCvc(e.target.value)} name="cvc" value={cvc} onFocus={handleInputFocus} pattern="[\d|]{3}" maxLength="3" size="3" />
            <span className="hint">Please enter the expiry date of your card (4 digits)</span>
            <span className="hint">Please enter the CVC number of your card (3 digits)</span>
            <span className="hint-double">Please enter the correct expiry date and CVC number of your card</span>
          </fieldset>

          <button>Pay</button>
        </form>
      </div>
    </div>
  );
}
