# JavaScript Basics

JavaScript is the **behavior** of a web page.

Type this JavaScript
```javascript
const button = document.getElementById("myButton");
const message = document.getElementById("message");

if (button && message) {
  button.addEventListener("click", () => {
    message.textContent = "Nice! JavaScript changed this.";
  });
}
```

Micro‑task
1) Add a button with `id="myButton"` in your HTML.
2) Add a paragraph with `id="message"` in your HTML.