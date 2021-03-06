

$(document).ready(function(){

	if(navigator.serviceWorker){
		navigator.serviceWorker
			.register('/omnifood/sw_cached_website.js')
			.then((reg)=> console.log("Registered service worker."))
			.catch((err)=>console.error(`Service Worker Error: ${err}`));
	}

    var waypoint = new Waypoint({
        element: $('.js--section-features'),
		handler:function(direction){
					if(direction == "down"){
						$("nav").addClass("sticky");
					}else{
						$("nav").removeClass("sticky");
					}
				},
		offset:'60px;'
	});

		$('.js--wp-1').waypoint({
		handler: function(direction){
					$('.js--wp-1').addClass('animate__animated animate__fadeIn');
				},
		offset:'50%'
	});
	
		$('.js--wp-2').waypoint({
		handler: function(direction){
					$('.js--wp-2').addClass('animate__animated animate__slideInUp')
		},
		offset:'50%'
	})
	
		$('.js--wp-3').waypoint({
		handler: function(direction){
					$('.js--wp-3').addClass('animate__animated animate__fadeIn')
		},
		offset:'50%'
	})
	
		$('.js--wp-4').waypoint({
		handler: function(direction){
					$('.js--wp-4').addClass('animate__animated animate__pulse')
		},
		offset:'50%'
	})
	
	/* Scroll on buttons */
	
	$('.js--scroll-to-plans').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
	});
	
	$('.js--scroll-to-start').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
	});
	
	/* Navigation Scroll*/
	// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
	
	/*Mobile Navigation*/
	
	$('.js--nav-icon').click(function(){
		var nav = $('.js--main-nav');
		nav.slideToggle(200);
		
		var icon = $('.js--nav-icon').find('ion-icon');
		if(icon.attr('name')=='menu'){
			icon.attr('name', 'close');
		}else{
			icon.attr('name','menu');
		}
	});
	
	
	
    
})

