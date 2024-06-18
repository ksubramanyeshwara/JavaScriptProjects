const count = document.querySelector("[data-count]");
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
  let counts = parseInt(count.dataset.count);
  count.textContent = count.dataset.count = counts + parseInt(jump.value);
});
minus.addEventListener("click", () => {
  let counts = parseInt(count.dataset.count);
  count.textContent = count.dataset.count = counts - parseInt(jump.value);
});

reset.addEventListener("click", () => {
  count.textContent = "0";
  count.dataset.count = "0";
});
