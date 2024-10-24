const img = document.querySelector(".starbucks");
const circle = document.querySelector(".circle");

function trocarImagem(src) {
	img.src = src;
}

function trocarCor(color) {
	circle.style.backgroundColor = color;
}
