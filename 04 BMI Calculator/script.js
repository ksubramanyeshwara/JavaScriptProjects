const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const form = document.querySelector("form");
const displayBMI = document.querySelector("#display-bmi");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const meter = parseFloat(height.value) / 100;
  const bmi = parseFloat(weight.value) / (meter * meter);
  displayBMI.textContent = bmi.toFixed(3);
  height.value = "";
  weight.value = "";
});
