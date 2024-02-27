import { useState } from "react";
import BmiCalculator from "./BmiCalculator";
import BmiResults from "./BmiResults";

function BmiContainer() {
  const [finalBmi, setFinalBmi] = useState(0);

  return (
    <div>
      <div className="container">
        <h1 id="title">BMI CALCULATOR</h1>
        <BmiCalculator getBmi={setFinalBmi} />
        <BmiResults finalBmi={finalBmi} />
      </div>
    </div>
  );
}
export default BmiContainer;
