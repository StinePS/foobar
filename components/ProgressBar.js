// https://ant.design/components/progress/
import { Progress, Button } from "antd";
import { useState } from "react";

export default function ProgressBar() {
  const [percent, setPercent] = useState(0);

  increase = () => {
    let percent = this.state.percent + 33.33;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };

  decline = () => {
    let percent = this.state.percent - 33.33;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };

  return (
    <>
      <Progress percent={this.state.percent} />
      <Button.Group>
        <button onClick={this.decline}>Previous</button>
        <button onClick={this.increase}>Next</button>
      </Button.Group>
    </>
  );
}
