const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const buttonInput = document.querySelector("button");
const results = document.querySelector("#answer");
const info = document.querySelector("h3");

buttonInput.addEventListener("click", () => {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);
  const bmi = weight / (height / 100) ** 2;
  results.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
  info.innerHTML = `${Interpretation(bmi)}`;
});

function Interpretation(bmi) {
  if (bmi < 18.5) {
    return "You are uderweight consult a doctor or registered dietitian to create a personalized weight gain plan. Increase calories intake, focus on nutrient-dense foods";
  } else if (bmi < 25) {
    return "congratulations your BMI is normal, maintain a healthy lifestyle";
  } else if (bmi < 30) {
    return "Overweight";
  } else if (bmi > 30) {
    return "Obese";
  }
}
