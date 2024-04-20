// Here we are selecting the '+' button HTML element. The below querySelector will give us a reference to that HTML element.
// #1 We assign this reference to that '+' HTML element to a const variable.
const increaseButtonEl = document.querySelector(".counter__button--increase ");
// Checking that the reference is indeed being stored in the const variable:
// console.log(increaseButtonEl);

// #3 Create another variable to store the reference to the counter HTML element
const counterValueEl = document.querySelector(".counter__value");

// #2 Now add an event listener to the const variable we created.
// First argument - which event? e.g Mouse enter: invoked as soon as the mouse cursor enters that target element; similarly Mouse leave event; On Click, etc. In our case, we want to listen for the click event.
// Second argument -What do we want to do after clicking? The action. So for that we will have to create a function and pass that function here. Since the function will behave as just a value here, we don't really need a name for it so just pass an anonymous function.
// When we click the '+' button on the page, the counter value should increase, so we want to write the function statements such that it should manipulate the counter. Which means, we need the HTML element 'counter__value' here so we can manipulate it when '+' is clicked.
increaseButtonEl.addEventListener("click", function () {
  // We created the counterValue variable in Step #3, so use it here to manipulate its content on the page.
  // get Current value of counter
  const currValue = counterValueEl.textContent;
  console.log(currValue);

  // Convert value to Number type
  // let currValueNumber = Number(currValue);
  const currValueAsNumber = Number(currValue);
  // increment by 1
  // currValueNumber++;
  const newValue = currValueAsNumber + 1;
  // set counter element with new value
  // counterValueEl.textContent = currValueNumber;
  counterValueEl.textContent = newValue;
});

// Creating a variable for decrease button:
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
// Add event listener to decrease button (-)
decreaseButtonEl.addEventListener("click", function () {
  // get current value of counter
  const currValue = counterValueEl.textContent;
  console.log(currValue);
  // conver to num type
  const currValueAsNumber = Number(currValue);
  // decrement by 1
  if (currValueAsNumber) {
  }
  const newValue = currValueAsNumber - 1;
  counterValueEl.textContent = newValue;
});
