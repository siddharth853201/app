$(window).load(function(){
  $('#loader-wrapper').hide();
});

$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	if (scroll >= 60){
		$("header").addClass("fixed");
	}else {
		$("header").removeClass("fixed");
	}
});

$(document).ready(function(){
    //nav
    $("nav button").click(function(){
        $(this).toggleClass('active');
        $('nav ul').toggleClass('open');
    });
    
    // setTimeout(function(){
    //    $('.enquirynow').addClass('open');
    // },5000);
    //
    $('a.email').click(function(){
       $('.enquirynow').addClass('open');
    });
    //            
    $('.enquirynow .popup a.close').click(function(){
       $('.enquirynow').removeClass('open');
    });
    //
    $('.accordion-panel h5').click(function(){
       $('.accordion-panel h5').not(this).removeClass('active').next().slideUp('1000');
       $(this).addClass('active').next().slideToggle();
    });
    //
    $('footer .row .col-33.flinks h3').click(function(){
       $(this).next().next().slideToggle();
       $(this).next().next().next().slideToggle();
    });

    //
    setTimeout(function(){
       $('.google_tag').addClass('open');
    },3000);
    // setTimeout(function(){
    //    $('.google_tag a.close').addClass('on');
    // },5000);
    // $('.google_tag a.close').click(function(){
    //    $('.google_tag').removeClass('open');
    // });
});

if(screen.width < 980){
  $(document).ready(function(){
    //
    $('header nav ul li>a.toggle').click(function(){
      $('header nav ul li>a.toggle').not(this).removeClass('active').next().slideUp(300);
      $(this).addClass('active').next().slideToggle(300);
    });
  });
}

if(screen.width < 768){
  $(document).ready(function(){
    //
    $('footer h5.toggle').click(function(){
       $(this).next().slideToggle();
       $(this).next().next().slideToggle();
    });
  });
}

$(document).mouseup(function(e){
  var container = $("nav");
  if(!container.is(e.target) && container.has(e.target).length === 0){
    //container.removeClass('open');
    $('nav button').removeClass('active');
    $('nav ul').removeClass('open');
  }
});

// Trigger CSS animations on scroll.
// --> Check https://codepen.io/bramus/pen/vKpjNP
jQuery(function($) {
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {            
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');            
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }            
    // Check all animatables and animate them if necessary
    $animatables.each(function(i) {
       var $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
      }
    });
  };          
  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');
});