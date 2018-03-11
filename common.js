$(function() {

	$('.menuToggle').on('click', function(){

			$('.main-list').slideToggle(300, function(){

				if($(this).css('display') === 'none') {
					$(this).removeAttr('style');
			}

			});

	});

});

$(document).ready(function() {
	$('#mainHeader').removeClass('mainHeaderFixed');
	$(window).scroll(function(){
		if ($(this).scrollTop() > 10) {
			$('#mainHeader').addClass('mainHeaderFixed').fadeIn('fast');
			$('li a').css('color', '#fff');
		} else {
			$('#mainHeader').removeClass('mainHeaderFixed').fadeIn('fast');
			$('li a').css('color', '#000');
		};
	});

});