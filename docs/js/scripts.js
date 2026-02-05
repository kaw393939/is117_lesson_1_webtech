console.log("Hello World");

const button = document.getElementById("myButton");
const message = document.getElementById("message");

if (button && message) {
	button.addEventListener("click", () => {
		message.textContent = "Nice! You just used JavaScript to change the page.";
	});
}