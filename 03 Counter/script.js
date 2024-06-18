const count = document.querySelector("[data-count]");
const countOne = document.querySelector("#count");
const plus = document.querySelector(".fa-plus");
const minus = document.querySelector(".fa-minus");
const reset = document.querySelector("#reset");
const jump = document.querySelector("#jump");

jump.addEventListener("change", (e) => {
  const inputValue = parseInt(e.target.value);
  if (isNaN(inputValue) || inputValue < 0) {
    e.target.value = 1;
  }
});

plus.addEventListener("click", () => {
  // let counts = parseInt(count.dataset.count);
  let counts = parseInt(countOne.innerText);
  const inputValue = jump.value;
  count.textContent = count.dataset.count = counts + parseInt(inputValue);
});
minus.addEventListener("click", () => {
  let counts = parseInt(count.dataset.count);
  count.textContent = count.dataset.count = counts - parseInt(jump.value);
});

reset.addEventListener("click", () => {
  count.textContent = "0";
  count.dataset.count = "0";
  jump.value = "1";
});
