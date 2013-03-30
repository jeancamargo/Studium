function mudapagina(z){
	clearPage();
	if (z==""){
		z = "#exposicao";
	}
	$(z).fadeIn();
}
function clearPage(){
	$("#exposicao").hide();
	$("#editorial").hide();
	$("#expediente").hide();
	$("#studium").hide();
}
function carroceu(z){
	/*Create navigation buttons to use with CarrouFredSel*/
	$(z).append("<div id='prev'><img src='img/estilo/prev_button.png'></div><div id='next'><img src='img/estilo/next_button.png'>")
	/*	CarouFredSel: a circular, responsive jQuery carousel.
	Configuration created by the "Configuration Robot"
	at caroufredsel.dev7studios.com
	*/
	z = z+" ul";
	$(z).carouFredSel({
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
}

/*
###########################################
Esquema pra toda vez que mudar a pagina atualizar o rolê
###########################################
*/

$(window).bind('hashchange', function() {
	clearPage();
    _href = window.location.hash;
	mudapagina(_href);
	carroceu("#trabalhos");
	return false
});

$(document).ready(function() {
clearPage();
var _href = window.location.hash;
//alert(_href);
mudapagina(_href);
carroceu("#trabalhos");
if (Modernizr.history) {
    // history is supported; do magical things
    // hijack the nav click event
    $("nav").delegate("a", "click", function() {
		_href = $(this).attr("href");
		// change the url without a page refresh and add a history entry.
		history.pushState(null, null, _href);
		// load the content
		mudapagina(_href);
		// fear not! we're going to build this function in the next code block
	return false
	});
} else {

}
});
