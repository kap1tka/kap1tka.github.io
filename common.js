$(function() {

	$('.menuToggle').on('click', function(){

			$('.main-list').slideToggle(300, function(){

				if($(this).css('display') === 'none') {
					$(this).removeAttr('style');
			}

			});

	});

});