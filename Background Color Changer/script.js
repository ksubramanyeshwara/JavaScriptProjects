// const buttons = document.querySelectorAll(".btn");
// const body = document.querySelector("body");
// const dark = document.querySelector(".dark");
// const light = document.querySelector(".light");

// function activateTheme(themeName) {
//   body.classList = themeName;
// }

// buttons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     if (btn === dark) {
//       activateTheme("dark");
//     }
//     if (btn === light) {
//       activateTheme("light");
//     }
//   });
// });

// switch function
function switchTheme() {
  //get the root element
  const rootElement = document.documentElement; // refers to html tag
  let dataTheme = rootElement.getAttribute("data-theme");
  let newTheme = dataTheme === "dark" ? "light" : "dark";
  rootElement.setAttribute("data-theme", newTheme);
  // local storage
  localStorage.setItem("theme", newTheme);
}

let localS = localStorage.getItem("theme");
if (localS === null) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
} else {
  let themeToSet = localS;
  document.documentElement.setAttribute("data-theme", themeToSet);
}

// event listener to theme switcher
let themeSwitch = document.querySelector(".theme-switch");
themeSwitch.addEventListener("click", switchTheme);
