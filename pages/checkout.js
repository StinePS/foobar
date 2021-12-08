// import { useBasket } from "../hooks/useBasket";
import Creditcard from "../components/Creditcard";
import { Progress, Button } from "antd";
import { useState } from "react";

export default function Checkout() {
  // Progress bar
  const [percent, setPercent] = useState(0);
  const [step, setStep] = useState(0);

  const increase = () => {
    setStep(Math.min(2, step + 1));
  };

  const decline = () => {
    setStep(Math.max(0, step - 1));
  };

  return (
    <>
      <Progress type="line" percent={33} showInfo={false} />

      <section>
        <Creditcard />
        <Button.Group>
          <Button onClick={decline}>Previous</Button>
          <Button onClick={increase}>Next</Button>
        </Button.Group>
      </section>
    </>
  );
}
