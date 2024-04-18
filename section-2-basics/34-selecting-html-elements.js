console.log("Hello from VS Code!");

// document.images;
// document.forms;
// document.getElementById();
// document.getElementsByClassName();

// Modern way of selecting
const headingEl = document.querySelector(".heading");
// We are storing the document object in heading1. To access its properties, we use dot notation.
// headingl.textContent = "Hello Everyone";

// This will treat the span element as plain text and not HTML, so we have to use innerHTML
// headingEl.textContent = 'Hello <span class="heading--big">everyone</span>!';

// headingEl.innerHTML = 'Hello <span class="heading--big">everyone</span>!';

// headingEl.insertAdjacentHTML(
//   "beforebegin",
//   'Hello <span class="heading--big">everyone</span>!'
// );

// Manipulating CSS
// headingEl.style.fontSize = "60px";

// headingEl.classList.add("heading--big");

// Event listeners
const clickHandler = () => {
  headingEl.style.color = "red";
  console.log("Changed color");
};

// Doing this will invoke clickHandler() right at the moment the event listener is added, i.e. the color will become red without clicking which is what we wanted. So we need not pass the handler as a function call but just the variable name itself.
// headingEl.addEventListener("click", clickHandler());

headingEl.addEventListener("click", clickHandler);
