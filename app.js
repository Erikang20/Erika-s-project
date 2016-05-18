$(document).ready(function(){

  jQuery(window).trigger().trigger('scroll');

  $('.parallax-window').parallax({
      naturalWidth: 600,
      naturalHeight: 400
    });
  });


  $('#jack').click(function(){
    ('#jack').slideUp();

  });


  // * ========================================================================= */
  /*	Preloader
  /* ========================================================================= */

  jQuery(window).load(function(){

  	$("#preloader").fadeOut("slow");

  });
                

  $(document).ready(function(){

  	/* ========================================================================= */
  	/*	Menu item highlighting
  	/* ========================================================================= */

  	jQuery('#nav').singlePageNav({
  		offset: jQuery('#nav').outerHeight(),
  		filter: ':not(.external)',
  		speed: 2000,
  		currentClass: 'current',
  		easing: 'easeInOutExpo',
  		updateHash: true,
  		beforeStart: function() {
  			console.log('begin scrolling');
  		},
  		onComplete: function() {
  			console.log('done scrolling');
  		}
  	});

      $(window).scroll(function () {
          if ($(window).scrollTop() > 400) {
              $(".navbar-brand a").css("color","#fff");
              $("#navigation").removeClass("animated-header");
          } else {
              $(".navbar-brand a").css("color","inherit");
              $("#navigation").addClass("animated-header");
          }
      });


  	/* ========================================================================= */
  	/*	Featured Project Lightbox
  	/* ========================================================================= */

  	$(".fancybox").fancybox({
  		padding: 0,

  		openEffect : 'elastic',
  		openSpeed  : 650,

  		closeEffect : 'elastic',
  		closeSpeed  : 550,

  		closeClick : true,

  		beforeShow: function () {
  			this.title = $(this.element).attr('title');
  			this.title = '<h3>' + this.title + '</h3>' + '<p>' + $(this.element).parents('.portfolio-item').find('img').attr('alt') + '</p>';
  		},

  		helpers : {
  			title : {
  				type: 'inside'
  			},
  			overlay : {
  				css : {
  					'background' : 'rgba(0,0,0,0.8)'
  				}
  			}
  		}
  	});

  });
