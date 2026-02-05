# JavaScript Lesson (Minimal)

JavaScript is the **behavior** of a web page.

Your file
- [docs/js/scripts.js](docs/js/scripts.js)

Basic example (type this)
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
1) Make sure your HTML has a button with `id="myButton"`.
2) Make sure your HTML has a paragraph with `id="message"`.

You are learning how pages react. That is the core idea.

Typing matters
- Type it. Don’t paste.
- The goal is muscle memory.
