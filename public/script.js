/* =================================== FEATURE =================================== */
	// Instagram
	(function(){
		var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
		i.src = "https://cdn.curator.io/published/26c5d94d-b978-4841-9c37-b03755340c5a.js";
		e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
		})();
	// Mentor
	$(document).ready(function() {
		$('#mainHome .homeMentor .image').hover(function() {
			$('#mainHome .homeMentor .image.imgReal').addClass('active');
			$('#mainHome .homeMentor .image.imgIllus').removeClass('active');
		}, function() {
			$('#mainHome .homeMentor .image.imgIllus').addClass('active');
			$('#mainHome .homeMentor .image.imgReal').removeClass('active');
		});
	});
	// Tab
	$(document).ready(function() {
		$('#mainHome .homeCaP.wrap .homeCaPItem1').hover(function() {
			$('#mainHome .homeCaP.wrap .homeCaPItem1Brief').show();
		}, function() {
			$('#mainHome .homeCaP.wrap .homeCaPItem1Brief').hide();
		});
	});
	$(document).ready(function() {
		$('#mainHome .homeCaP.wrap .homeCaPItem2').hover(function() {
			$('#mainHome .homeCaP.wrap .homeCaPItem2Brief1').show();
			$('#mainHome .homeCaP.wrap .homeCaPItem2Brief2').show();
		}, function() {
			$('#mainHome .homeCaP.wrap .homeCaPItem2Brief1').hide();
			$('#mainHome .homeCaP.wrap .homeCaPItem2Brief2').hide();
		});
	});
	$(document).ready(function() {
		$('#mainHome .homeCaP.wrap .homeCaPItem3').hover(function() {
			$('#mainHome .homeCaP.wrap .homeCaPItem3Brief').show();
		}, function() {
			$('#mainHome .homeCaP.wrap .homeCaPItem3Brief').hide();
		});
	});

/* =================================== ANIMATION =================================== */
	$(document).ready(function(){
		// Animation Cursor
		let mouseCursor = document.querySelector('.cursorHover');
		let imgLinks =  document.querySelectorAll('.cursorHoverImg');

		window.addEventListener('mousemove', cursor);

		function cursor(e) {
			mouseCursor.style.top = e.pageY + 'px';
			mouseCursor.style.left = e.pageX + 'px';
		}

		imgLinks.forEach(link => {
			link.addEventListener('mouseleave', () => {
				mouseCursor.classList.remove('cursorHoverOn');
			});
			link.addEventListener('mouseover', () => {
				mouseCursor.classList.add('cursorHoverOn');
			});
		});
	});

	$(document).ready(function(){
		// Animation Cursor 2
		let mouseCursor2 = document.querySelector('.cursorHover2');
		let imgLinks2 =  document.querySelectorAll('.cursorHoverImg2');

		window.addEventListener('mousemove', cursor);

		function cursor(e) {
			mouseCursor2.style.top = e.pageY + 'px';
			mouseCursor2.style.left = e.pageX + 'px';
		}

		imgLinks2.forEach(link2 => {
			link2.addEventListener('mouseleave', () => {
				mouseCursor2.classList.remove('cursorHoverOn2');
			});
			link2.addEventListener('mouseover', () => {
				mouseCursor2.classList.add('cursorHoverOn2');
			});
		});
	});

	$(document).ready(function(){

		// Back to Top
		$(document).ready(function(){
			// hide gotop first
			$(".gotop").hide();
			// fade in gotop
			$(function () {
				$(window).scroll(function () {
					if ($(this).scrollTop() > 400) {
						$('.gotop').fadeIn();
					} else {
						$('.gotop').fadeOut();

					}
				});
				// scroll body to 0px on click
				$('a.gotop').click(function () {
					$('body,html').animate({
						scrollTop: 0
					}, 2000);
					return false;
				});
			});
		});

		// Move Down
    $('#godown').click(function(){
			$('html, body').animate({
				scrollTop: $( $(this).attr('href') ).offset().top
			}, 1500);
		});

		// Moving
		$(window).scroll(function(){
			windowTop = $(window).scrollTop();
			$('.moveTop').css({
				'transform':'translateY('+(windowTop) * -0.1 +'px)'
			});
			$('.moveDown').css({
				'transform':'translateY('+(windowTop) * 0.1 +'px)'
			});
			$('.moveLeft').css({
				'transform':'translateX('+(windowTop) * -0.1 +'px)'
			});
			$('.moveRight').css({
				'transform':'translateX('+(windowTop) * 0.1  +'px)'
			});

			$('.moveDownHeader').css({
				'transform':'translateY('+(windowTop) * 0.001 +'px)'
			});
			$('.moveDownHeader').css({
				'top': (windowTop) * 0.001 +'%'
			});
			$('.moveReWiHeader').css({
				'width': 38 + (windowTop) * 0.02 +'vw'
			});
			$('.moveReHeHeader').css({
				'height': 38 + (windowTop) * 0.02 +'vw'
			});

		});

	});
