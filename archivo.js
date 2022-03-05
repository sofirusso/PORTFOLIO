$(document).ready(function(){
	$('a[href^="#"]').click(function(){
		var destino = $(this.hash);
		if (destino.lenght == 0){
			destino = $('a[name="' + this.hash.substr(1) + '"]')
		}
		if (destino.lenght == 0) {
			destino = $('html');
		}
		$('html,body').animate({scrollTop: destino.offset().top },500);
		return false;
	});
});
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

 var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });



