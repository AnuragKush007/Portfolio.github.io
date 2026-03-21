if (window.AOS) {
	AOS.init({
		duration: 800,
		easing: 'slide'
	});
}

(function($) {

	"use strict";

	if ($.fn.stellar) {
		$(window).stellar({
			responsive: true,
			parallaxBackgrounds: true,
			parallaxElements: true,
			horizontalScrolling: false,
			hideDistantElements: false,
			scrollProperty: 'scroll'
		});
	}


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   if ($.Scrollax) {
		$.Scrollax();
	}



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');
	    var $target = $(href);

	    if (!$target.length) {
	    	return;
	    }

	    $('html, body').animate({
	        scrollTop: $target.offset().top - 90
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		if ($.fn.owlCarousel) {
			$('.home-slider').owlCarousel({
				loop:true,
				autoplay: true,
				margin:0,
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
				nav:false,
				autoplayHoverPause: false,
				items: 1,
				navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
				responsive:{
					0:{ items:1 },
					600:{ items:1 },
					1000:{ items:1 }
				}
			});
		}
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);

(function() {
	"use strict";

	var loader = document.getElementById('game-loader');
	var cursorGlow = document.getElementById('cursor-glow');
	var scrollProgressBar = document.getElementById('scroll-progress-bar');
	var abilityBars = document.querySelectorAll('.ability-item__fill');
	var missionSections = document.querySelectorAll('.mission-section');
	var hoverTargets = '.btn, a[href], .nav-link, .game-card, .mission-card, .contact-card, .stat-band-card, .hero-avatar-card, .player-panel__card';
	var navLinks = document.querySelectorAll('#ftco-nav .nav-link[href^="#"]');

	function hideLoader() {
		if (!loader) {
			return;
		}

		window.setTimeout(function() {
			loader.classList.add('is-hidden');
		}, 1800);
	}

	function initScrollProgress() {
		if (!scrollProgressBar) {
			return;
		}

		var ticking = false;

		function updateScrollProgress() {
			var doc = document.documentElement;
			var scrollTop = window.scrollY || doc.scrollTop || 0;
			var scrollableHeight = doc.scrollHeight - window.innerHeight;
			var progress = scrollableHeight > 0 ? Math.min(1, Math.max(0, scrollTop / scrollableHeight)) : 0;

			scrollProgressBar.style.width = (progress * 100).toFixed(2) + '%';
			ticking = false;
		}

		function requestUpdate() {
			if (ticking) {
				return;
			}

			ticking = true;
			window.requestAnimationFrame(updateScrollProgress);
		}

		window.addEventListener('scroll', requestUpdate, { passive: true });
		window.addEventListener('resize', requestUpdate);
		requestUpdate();
	}

	function animateAbilityBars() {
		if (!('IntersectionObserver' in window) || !abilityBars.length) {
			abilityBars.forEach(function(bar) {
				bar.style.width = bar.getAttribute('data-width') || '0%';
			});
			return;
		}

		var barsObserver = new IntersectionObserver(function(entries, observer) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					var width = entry.target.getAttribute('data-width') || '0%';
					entry.target.style.width = width;
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.35 });

		abilityBars.forEach(function(bar) {
			barsObserver.observe(bar);
		});
	}

	function updateActiveMission(section) {
		if (!section) {
			return;
		}

		section.classList.add('is-active');
		window.setTimeout(function() {
			section.classList.remove('is-active');
		}, 700);
	}

	function observeMissionSections() {
		if (!missionSections.length || !('IntersectionObserver' in window)) {
			return;
		}

		var missionObserver = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					updateActiveMission(entry.target);
				}
			});
		}, {
			rootMargin: '-30% 0px -45% 0px',
			threshold: 0.2
		});

		missionSections.forEach(function(section) {
			missionObserver.observe(section);
		});
	}

	function initScrollReveal() {
		if (!document.querySelectorAll) {
			return;
		}

		var revealTargets = document.querySelectorAll(
			'.scroll-reveal, .mission-section .game-card, .mission-section .stat-orb, .mission-section .stat-band-card, .mission-section .contact-card, .mission-section .btn'
		);

		if (!revealTargets.length) {
			return;
		}

		revealTargets.forEach(function(element, index) {
			element.classList.add('scroll-reveal');
			element.classList.add('reveal-stagger-' + (index % 4));
		});

		if (!('IntersectionObserver' in window)) {
			revealTargets.forEach(function(element) {
				element.classList.add('is-visible');
			});
			return;
		}

		var revealObserver = new IntersectionObserver(function(entries, observer) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			});
		}, {
			rootMargin: '0px 0px -12% 0px',
			threshold: 0.15
		});

		revealTargets.forEach(function(element) {
			revealObserver.observe(element);
		});
	}

	function initActiveNavTracking() {
		if (!navLinks.length || !missionSections.length || !('IntersectionObserver' in window)) {
			return;
		}

		function setActiveLink(id) {
			navLinks.forEach(function(link) {
				var isActive = link.getAttribute('href') === '#' + id;
				link.parentElement.classList.toggle('active', isActive);
				if (isActive) {
					link.setAttribute('aria-current', 'page');
				} else {
					link.removeAttribute('aria-current');
				}
			});
		}

		var navObserver = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting && entry.target.id) {
					setActiveLink(entry.target.id);
				}
			});
		}, {
			rootMargin: '-35% 0px -45% 0px',
			threshold: 0.2
		});

		missionSections.forEach(function(section) {
			if (section.id) {
				navObserver.observe(section);
			}
		});

		navLinks.forEach(function(link) {
			link.addEventListener('click', function() {
				var targetId = link.getAttribute('href').slice(1);
				if (targetId) {
					setActiveLink(targetId);
				}
			});
		});
	}

	function initButtonPressFeedback() {
		if (!document.querySelectorAll) {
			return;
		}

		document.querySelectorAll('.btn, .mission-card .btn, .nav-link, .contact-card a, .mission-card a').forEach(function(buttonLike) {
			buttonLike.addEventListener('click', function() {
				buttonLike.classList.add('is-pressed');
				window.setTimeout(function() {
					buttonLike.classList.remove('is-pressed');
				}, 160);
			});
		});
	}

	function initInteractiveHoverState() {
		if (!document.querySelectorAll) {
			return;
		}

		document.querySelectorAll(hoverTargets).forEach(function(element) {
			element.addEventListener('mouseenter', function() {
				element.classList.add('is-sonic-hover');
			});

			element.addEventListener('mouseleave', function() {
				element.classList.remove('is-sonic-hover');
			});
		});
	}

	function initCursorGlow() {
		if (!cursorGlow || !window.requestAnimationFrame) {
			return;
		}

		var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		var coarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;

		if (reducedMotion || coarsePointer || window.innerWidth < 992) {
			return;
		}

		var currentX = window.innerWidth / 2;
		var currentY = window.innerHeight / 2;
		var targetX = currentX;
		var targetY = currentY;
		var rafId = null;

		document.body.classList.add('cursor-enhanced');

		function render() {
			currentX += (targetX - currentX) * 0.16;
			currentY += (targetY - currentY) * 0.16;
			cursorGlow.style.transform = 'translate3d(' + currentX + 'px, ' + currentY + 'px, 0) translate(-50%, -50%) scale(1)';
			rafId = window.requestAnimationFrame(render);
		}

		document.addEventListener('mousemove', function(event) {
			targetX = event.clientX;
			targetY = event.clientY;
			cursorGlow.classList.add('is-visible');
		}, { passive: true });

		document.addEventListener('mouseleave', function() {
			cursorGlow.classList.remove('is-visible');
		});

		document.addEventListener('mousedown', function() {
			cursorGlow.classList.add('is-pressed');
		});

		document.addEventListener('mouseup', function() {
			cursorGlow.classList.remove('is-pressed');
		});

		document.querySelectorAll(hoverTargets).forEach(function(element) {
			element.addEventListener('mouseenter', function() {
				cursorGlow.classList.add('is-hovering');
			});

			element.addEventListener('mouseleave', function() {
				cursorGlow.classList.remove('is-hovering');
			});
		});

		if (!rafId) {
			rafId = window.requestAnimationFrame(render);
		}
	}

	function initProfileAvatarEffect() {
		var avatars = document.querySelectorAll('.profile-avatar-3d');

		if (!avatars.length) {
			return;
		}

		var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		var coarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
		var smallViewport = window.innerWidth < 768;
		var lowMotionMode = prefersReducedMotion || coarsePointer || smallViewport;
		avatars.forEach(function(avatar) {
			var canvas = avatar.querySelector('.profile-avatar-3d__canvas');
			var ctx = canvas ? canvas.getContext('2d') : null;
			var animationFrame = null;
			var resizeFrame = null;
			var particles = [];
			var pointer = { x: 0.5, y: 0.5, active: false };
			var hoverBoost = 0;
			var orbitCount = lowMotionMode ? 10 : 18;

			if (!ctx) {
				return;
			}

			function setCanvasSize() {
				var size = avatar.clientWidth;
				var ratio = window.devicePixelRatio || 1;
				canvas.width = Math.max(1, Math.floor(size * ratio));
				canvas.height = Math.max(1, Math.floor(size * ratio));
				ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
			}

			function createParticles() {
				particles = [];
				for (var i = 0; i < orbitCount; i += 1) {
					particles.push({
						angle: (Math.PI * 2 * i) / orbitCount,
						radius: 64 + Math.random() * 40,
						speed: 0.004 + Math.random() * (lowMotionMode ? 0.004 : 0.01),
						length: 0.55 + Math.random() * 0.85,
						width: 0.7 + Math.random() * 1.6,
						alpha: 0.18 + Math.random() * 0.35,
						offset: Math.random() * Math.PI * 2,
						color: i % 3 === 0 ? '100, 247, 255' : (i % 3 === 1 ? '94, 167, 255' : '155, 109, 255')
					});
				}
			}

			function drawFieldLines(time) {
				var size = avatar.clientWidth;
				var center = size / 2;
				var driftX = pointer.active ? (pointer.x - 0.5) * (lowMotionMode ? 6 : 16) : 0;
				var driftY = pointer.active ? (pointer.y - 0.5) * (lowMotionMode ? 6 : 16) : 0;
				var speedBoost = 1 + hoverBoost * 0.8;

				ctx.clearRect(0, 0, size, size);
				ctx.save();
				ctx.beginPath();
				ctx.arc(center, center, center - 2, 0, Math.PI * 2);
				ctx.clip();

				particles.forEach(function(line, index) {
					var pulse = Math.sin(time * 0.0012 + line.offset) * 8;
					var baseRadius = line.radius + pulse + hoverBoost * 5;
					var orbitAngle = line.angle + time * line.speed * speedBoost;
					var startAngle = orbitAngle + index * 0.02;
					var endAngle = startAngle + line.length;
					var gradient = ctx.createLinearGradient(
						center + Math.cos(startAngle) * baseRadius,
						center + Math.sin(startAngle) * baseRadius,
						center + Math.cos(endAngle) * baseRadius,
						center + Math.sin(endAngle) * baseRadius
					);

					gradient.addColorStop(0, 'rgba(' + line.color + ', 0)');
					gradient.addColorStop(0.5, 'rgba(' + line.color + ', ' + (line.alpha + hoverBoost * 0.16).toFixed(3) + ')');
					gradient.addColorStop(1, 'rgba(' + line.color + ', 0)');

					ctx.beginPath();
					ctx.strokeStyle = gradient;
					ctx.lineWidth = line.width + hoverBoost * 0.45;
					ctx.shadowBlur = lowMotionMode ? 8 : 14;
					ctx.shadowColor = 'rgba(' + line.color + ', 0.32)';
					ctx.arc(center + driftX, center + driftY, baseRadius, startAngle, endAngle);
					ctx.stroke();
				});

				ctx.restore();
			}

			function animate(time) {
				hoverBoost += ((avatar.classList.contains('is-hovered') ? 1 : 0) - hoverBoost) * 0.08;
				drawFieldLines(time);
				animationFrame = window.requestAnimationFrame(animate);
			}

			function setTiltFromPointer(clientX, clientY) {
				if (lowMotionMode) {
					return;
				}

				var rect = avatar.getBoundingClientRect();
				var x = (clientX - rect.left) / rect.width;
				var y = (clientY - rect.top) / rect.height;
				var rotateY = (x - 0.5) * 12;
				var rotateX = (0.5 - y) * 12;

				pointer.x = Math.max(0, Math.min(1, x));
				pointer.y = Math.max(0, Math.min(1, y));
				pointer.active = true;
				avatar.style.setProperty('--tilt-x', rotateX.toFixed(2) + 'deg');
				avatar.style.setProperty('--tilt-y', rotateY.toFixed(2) + 'deg');
			}

			function resetTilt() {
				pointer.active = false;
				avatar.style.setProperty('--tilt-x', '0deg');
				avatar.style.setProperty('--tilt-y', '0deg');
			}

			function onResize() {
				if (resizeFrame) {
					window.cancelAnimationFrame(resizeFrame);
				}

				resizeFrame = window.requestAnimationFrame(function() {
					setCanvasSize();
					createParticles();
				});
			}

			avatar.addEventListener('mouseenter', function() {
				avatar.classList.add('is-hovered');
			});

			avatar.addEventListener('mouseleave', function() {
				avatar.classList.remove('is-hovered');
				resetTilt();
			});

			avatar.addEventListener('mousemove', function(event) {
				setTiltFromPointer(event.clientX, event.clientY);
			});

			avatar.addEventListener('touchstart', function() {
				avatar.classList.add('is-hovered');
			}, { passive: true });

			avatar.addEventListener('touchend', function() {
				avatar.classList.remove('is-hovered');
				resetTilt();
			}, { passive: true });

			window.addEventListener('resize', onResize);

			setCanvasSize();
			createParticles();
			if (prefersReducedMotion) {
				drawFieldLines(0);
				return;
			}

			animationFrame = window.requestAnimationFrame(animate);
		});
	}

	window.addEventListener('load', function() {
		hideLoader();
		animateAbilityBars();
		observeMissionSections();
		initActiveNavTracking();
		initScrollReveal();
		initScrollProgress();
		initCursorGlow();
		initButtonPressFeedback();
		initInteractiveHoverState();
		initProfileAvatarEffect();
	});
})();
