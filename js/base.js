function carroceu(z,size){
	/*Create navigation buttons to use with CarrouFredSel*/
	$(z).append("<div id='prev'><img src='img/estilo/prev_button.png'></div><div id='next'><img src='img/estilo/next_button.png'>")
	/*	CarouFredSel: a circular, responsive jQuery carousel.
	Configuration created by the "Configuration Robot"
	at caroufredsel.dev7studios.com
	*/
	z = z+" ul";
	$(z).carouFredSel({
		width: "100%",
		height: size,
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

$(document).ready(function() {
	$("section").hide();
	$("section").fadeIn();
	carroceu("#trabalhos", 400);
	carroceu("#ensaio", 350);

	$(".informacoes a").fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    afterLoad   : function() {
        this.inner.prepend( '<h1>Espaços de um futuro que não existiu</h1>' );
        this.content = '<h1>Jean Marcel Camargo</h1><br>' + this.content.html();
    }
	});

	$(".fancybox").fancybox({
	helpers	: {
			title	: {
				type: 'outside'
			},
			buttons	: {}
		}
	});
	
});