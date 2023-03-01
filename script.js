const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const input = document.querySelector("input");

// Load image
let template = new Image();
template.src = "template.png";
template.addEventListener("load", () => {
	// Init canvas
	canvas.width = template.width;
	canvas.height = template.height;

	// Init drawing
	ctx.fillStyle = "black";
	ctx.font = "bold 40px Comic Sans MS"
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";

	// Start updating
	input.addEventListener("input", () => render(input.value));
	render("Ok");
});

function render(text) {
	ctx.drawImage(template, 0, 0);
	ctx.fillText(text, canvas.width / 2, canvas.height * 0.21);
}