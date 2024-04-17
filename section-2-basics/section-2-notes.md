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

- 
