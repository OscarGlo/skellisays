(async () => {
	const canvas = document.querySelector("canvas");
	const ctx = canvas.getContext("2d");
	const textarea = document.querySelector("textarea");

	// Load images
	const templates = ["original", "skelli"];
	const images = [];
	templates.map((name, i) => {
		let template = new Image();
		template.src = `templates/${name}.png`;
		images[i] = template;
	});

	// Init drawing
	ctx.fillStyle = "black";
	ctx.font = "bold 40px Comic Sans MS";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";

	// Main drawing function
	const lineHeight = 45;
	let current = 0;
	let text = "Ok";

	function render() {
		ctx.drawImage(images[current], 0, 0);

		const lines = text.split("\n");
		const startHeight = canvas.height * 0.21 - ((lines.length - 1) * lineHeight) / 2;
		for (const i in lines) {
			ctx.fillText(lines[i], canvas.width / 2, startHeight + i * lineHeight);
		}
	}

	// Event listeners
	textarea.addEventListener("input", () => {
		text = textarea.value;
		render();
	});

	window.addEventListener("keydown", evt => {
		if (evt.key === "ArrowLeft") {
			current = (current + images.length - 1) % images.length;
			render();
		} else if (evt.key === "ArrowRight") {
			current = (current + 1) % images.length;
			render();
		}
	});

	render();
})();
