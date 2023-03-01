const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const textarea = document.querySelector("textarea");

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
	textarea.addEventListener("input", () => render(textarea.value));
	render("Ok");
});

const lineHeight = 45;

function render(text) {
	ctx.drawImage(template, 0, 0);

	const lines = text.split("\n");
	const startHeight = canvas.height * 0.21 - ((lines.length - 1) * lineHeight) / 2;
	for (const i in lines)
		ctx.fillText(lines[i], canvas.width / 2, startHeight + i * lineHeight);
}