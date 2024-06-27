// 1. Select all elements
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const submit = document.querySelector("submit");
const todoLists = document.querySelector("#todo-list");

// 2. When i submit the form add a new element to the page05 TO-DO app/script.js
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // 1. Create a new element
  const p = document.createElement("p");
  p.innerText = todoInput.value;
  p.classList.add("list");
  let span = document.createElement("span");
  span.classList.add("fa-trash");

  // 2. Add the todoInput to the newly created element
  todoLists.appendChild(p);
  p.appendChild(span);

  // 3. Clear the todoInput
  todoInput.value = "";

  p.addEventListener("click", (e) => {
    if (e.target === p) {
      e.target.classList.toggle("strikethrough");
    } else if (e.target === span) {
      e.target.parentElement.remove();
    }
  });
  // 5. Event listener to strike through the todo when i click
  //   p.addEventListener("click", (e) => {
  //     p.classList.add("strikethrough");
  //     e.stopPropagation(); // Prevent bubbling up
  //   });

  // 6. Event listener to delete the todo when i double click
  //   span.addEventListener(
  //     "click",
  //     (e) => {
  //       e.target.parentElement.remove();
  //     },
  //     true
  //   );
});
