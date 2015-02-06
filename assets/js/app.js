$(document).ready(function() {

	/* Seta tamanho da sidebar */
	$('.sidebar').css('min-height',$(document).height());
	
	/* Controla o botão de retornar ao topo da página */
	var offset = 220;
	var duracao = 500;
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.topo').fadeIn(duracao);
		} else {
			jQuery('.topo').fadeOut(duracao);
		}
	});
	
	$('.topo').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duracao);
		return false;
	})
});

$('#sidebar').affix({
	offset: {
		top: 245
	}
});
