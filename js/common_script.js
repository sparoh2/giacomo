 window.jQuery1_12_4 = jQuery.noConflict(true);
 (function($) {
 	var jQuery = $;
 	function scrolltoTop() {
 		$('#pageTop').click(function(e) {
 			e.preventDefault()
 			$('html, body').animate({'scrollTop':'0'}, 600);
 			return false;
 		})
 	}
	function navSubmenu() {
		var nav_1stMenu = $('.nav-menu li');
		var nav_subMenu = $('.nav-submenu');
			nav_1stMenu.on('mouseover focusin', function() {
			$(this).addClass('active');
		}).on('mouseleave focusout', function() {
			$(this).removeClass('active');			
		});
	}

	/* Mobile Hamburger Menu */
	function hamburgerMenu() {
		var hamburger = document.getElementById('nav-hamburger');
		var nav = document.getElementById('nav');

		hamburger.classList.toggle('change');
		nav.classList.toggle('d-none');
	}

	/* Scroll Top Button */
	function scrolltoTop() {
		$('#pageTop').click(function(e) {
			e.preventDefault();
			$('html, body').animate({'scrollTop':'0'}, 600);
			return false;
		});
	}
	window.scrolltoTop = scrolltoTop;
	window.navSubmenu = navSubmenu;

	/* Slick Slide */
	$('.main-slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
	  prevArrow: $('.prev'),
	  nextArrow: $('.next')
	})

	$('.item-slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
	  prevArrow: $('.item-prev'),
	  nextArrow: $('.item-next')
	})
}(jQuery1_12_4));	