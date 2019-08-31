$(function(){
	$('.header-bottom form input').focus(function(event) {
		$('.header-bottom form input').css('border-color', '#ff6700');
		$('.header-bottom form button').css('border-color', '#ff6700');
	});
	$('.header-bottom form input').blur(function(event) {
		$('.header-bottom form input').css('border-color', '#e0e0e0');
		$('.header-bottom form button').css('border-color', '#e0e0e0');
	});
})