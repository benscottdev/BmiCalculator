import { useState } from "react";

function BmiResults(props) {
  let bmiDescriptive = "";
  let bmiParagraph = "";

  let colorToBe = { color: "#C8E48D" };

  const colorChange = (colorToUse) => {
    colorToBe = { color: colorToUse };
  };

  if (props.finalBmi === 0) {
    bmiDescriptive = "Calculate to show...";
    bmiParagraph = "Waiting for calculation...";
    colorChange("#C8E48D");
  } else if (props.finalBmi < 15) {
    colorChange("#FF603E");
    bmiDescriptive = "Severely Underweight";
    bmiParagraph =
      "A BMI of under 15 is classified as severely underweight, indicating a significant deficit in body weight relative to height. This condition can lead to serious health risks, including malnutrition and weakened immune function. It is essential to address this issue promptly. Statistics show that approximately 0.1% of the population falls into this category, with a higher prevalence among individuals with eating disorders.";
  } else if (props.finalBmi <= 18.5) {
    colorChange("#EC8A2F");
    bmiDescriptive = "Underweight";
    bmiParagraph =
      "Individuals with a BMI under 18.5 are considered underweight, suggesting that they may not have enough body fat for optimal health. Roughly 2.4% of the population falls into this category. Underweight individuals may experience issues such as poor bone health, weakened immune function, and reduced energy levels. Nutrition and lifestyle adjustments are often recommended to reach a healthier weight.";
  } else if (props.finalBmi >= 18.6 && props.finalBmi <= 24.9) {
    colorChange("#C8E48D");
    bmiDescriptive = "Healthy Weight";
    bmiParagraph =
      "A BMI within the range of 18.5 to 24.9 is considered a healthy weight. Approximately 35.7% of the population falls into this category, making it the most common. Maintaining a healthy weight is associated with a lower risk of chronic diseases, improved overall health, and enhanced longevity. This range is the target for most adults seeking to maintain or achieve optimal health.";
  } else if (props.finalBmi >= 25 && props.finalBmi <= 29.9) {
    colorChange("#EC8A2F");
    bmiDescriptive = "Overweight";
    bmiParagraph =
      "Individuals with a BMI between 25 and 29.9 are categorized as overweight. Around 35.9% of the population falls into this group. Being overweight increases the risk of various health conditions, including heart disease, diabetes, and hypertension. Effective weight management strategies, such as dietary changes and regular exercise, are recommended to reduce these risks.";
  } else if (props.finalBmi >= 30) {
    colorChange("#FF603E");
    bmiDescriptive = "Obese";
    bmiParagraph =
      "A BMI over 30 is classified as obese, indicating a significant excess of body fat. Roughly 25.9% of the population falls into this category. Obesity is associated with an increased risk of serious health issues, including type 2 diabetes, cardiovascular disease, and certain cancers. Lifestyle modifications, including a balanced diet and increased physical activity, are crucial for managing and reducing obesity-related health risks.";
  }

  return (
    <div className="results">
      <div className="score">
        <p id="your-bmi-title">YOUR BMI IS:</p>
        <h1>{props.finalBmi}</h1>
        <h2 style={colorToBe}>{bmiDescriptive}</h2>
      </div>
      <p id="what-this-means">{bmiParagraph}</p>
    </div>
  );
}
export default BmiResults;
