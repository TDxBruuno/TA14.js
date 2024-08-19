let input = document.querySelector("input");
let button = document.querySelector("button");

let ul = document.querySelector("ul");

button.addEventListener("click", function () {
  let inputValue = input.value;

  let li = document.createElement("li");
  li.textContent = inputValue;

  ul.appendChild(li);

  input.value = "";
});
