$(document).ready(function() {
/*
Criando botões e o rolê de navegação para o carrocel
		<div id="prev">Prev</h3>
		<h3 id="next">Next</h3>
		<div id="cacete"></div>
*/
$("#exposicao").hide();
$("#editorial").hide();
$("#expediente").hide();

//$('<br />').insertAfter('.titulo');

$("#trabalhos").append("<div id='prev'><img src='img/estilo/prev_button.png'></div><div id='next'><img src='img/estilo/next_button.png'>")
	/*	CarouFredSel: a circular, responsive jQuery carousel.
	Configuration created by the "Configuration Robot"
	at caroufredsel.dev7studios.com
*/
$("#trabalhos ul").carouFredSel({
	width: "100%",
	height: 400,
	items: "variable",
	scroll: {
		items: 1,
		pauseOnHover: true
	},
	auto: 7000,
	prev: {
		button: "#prev",
		key: "left"
	},
	next: {
		button: "#next",
		key: "right"
	},
	swipe: true,
	mousewheel: true
});
});