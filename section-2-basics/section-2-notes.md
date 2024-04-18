### Section 2 - Beginner JS

#### Selecting HTML Elements with JS

- `document` - An object that the browser gives us to interact with the html via JS. Some properties of document object.
    + `document.images` - gives all images on the page.
    + `document.forms`
    + `document.getElementById`
    + `document.getElementsByClass` etc...

- But the modern way of selecting elements is with `query selector`. Here any query would work. It allows us to use CSS' selectors. So, IDs, classes, etc. The selectors must be using the same format as they do in CSS. `const heading1 = document.querySelector(".heading");`.

- [How To Fix “Uncaught Typeerror: Cannot set property” Error in JavaScript](https://kinsta.com/knowledgebase/uncaught-typeerror-cannot-set-property/) - Something to be careful of when manipulating DOM elements via JS. The placement of script tag can cause this error.

- In the below e.g. we are changing the page heading using document.querySelector, with the `textContent` property.
```
const headingl = document.querySelector(".heading");
// We are storing the document object in heading1. To access its properties, we use dot notation.
headingl.textContent = "Hello Everyone";
```

- `inner HTML` - Let's say we want to manipulate the text "Everyone" in the previous heading via JS. Since it is 'in-line' with "Hello" (as they are part of same h1 element type), we can make use of <span> here to treat "Everyone" as a separate element within h1. As <span> is inline, the text would continue to appear alongside "Hello" but we could attach a separate class to "Everyone" to manipulate it. So if we did something like this:
```
headingEl.textContent = 'Hello <span class="heading--big">everyone</span>!';
```
This wouldn't work because using `textContent` property, it will consider the <span> as plain text and not an HTML element. To pass a string as an HTML instead of plain text, we would need to make use of `innerHTML`.

```
headingEl.innerHTML = 'Hello <span class="heading--big">everyone</span>!';
```

Using the above innerHTML property, we have added a new HTML element <span> to the page! So now we can use this .heading--big class in the CSS file and change the properties of "Everyone".

So in short, **textContent will not pass the string as HTML even if we specify it under HTML tags, but innerHTML property will pass it as an HTML, i.e. it will actually create the HTML elements for us**

- `insertAdjacentHTML` -> To insert the new content instead of simply replacing the previous one. This will insert the text before the heading.
```
headingEl.insertAdjacentHTML(
  "beforebegin",
  'Hello <span class="heading--big">everyone</span>!'
);
```

#### Mainpulating the CSS

- `headingEl.style.fontSize = "60px";` - Not recommended to manipulate the CSS like this as the JS file will get littered with all sorts of CSS values.

- So the actual values of the properties of the CSS selectors should be kept in the CSS files itself as usual. But we can use JS to add/remove the classes. For e.g. `headingEl.classList.add("heading--big");` - This will add the class heading--big to the element. So earlier the h1 element had only the "heading" class but now it will get the heading--big as well. So the CSS where we had already added the properties for heading--big will take effect. Basically this is the recommended way to manipulate the CSS rather than hardcoding property values.


#### Events and Event handler functions

- adding event Listener to a DOM object. `headingEl.addEventListener()` -> two args required: which particular event do we want to listen for - e.g. click event, moust enter/leave event, etc. Second arg is: what we want to do when that event happens. For e.g we want the color to be changed once we click. Here, we would usually pass a function which will do that action rather than defining a bunch of statements and passing them individually.

- For e.g. below would be our clickHandler function that will get passed into Even Listener:
```
const clickHandler = () => {
  headingEl.style.color = "red";
  console.log("Changed color");
};
```
One common mistake that people do is they pass the handler like this: `headingEl.addEventListener("click", clickHandler());
`. This is wrong because we are calling clickHandler() right at the point of adding the Eventlistener! But that's not what we want; we want the clickHandler() function to be called and execute the actions AFTER the click event takes place, i.e. we click on that element or whatever and only then clickHandler() should be fired. But in this case, even before we click, clickHandler() will get triggered as soon as the event listener is added which is not what we want.

So instead of above, we need to pass the handler function with just the variable name and not the function call:
`headingEl.addEventListener("click", clickHandler);`. Check out [this detailed explanation](https://chat.openai.com/c/46780e86-be60-4fe0-9a44-16a0d0487f1c) given by CG on this concept. [Shared Link](https://chat.openai.com/share/f8188e96-dff4-493c-984e-b98d5ab77bce)
