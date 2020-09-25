/*!
    * Start Bootstrap - Freelancer v6.0.4 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  

  
                $('.slider').each(function() {
                    var $this = $(this);
                    var $group = $this.find('.slide_group');
                    var $slides = $this.find('.slide');
                    var bulletArray = [];
                    var currentIndex = 0;
                    var timeout;
                    
                    function move(newIndex) {
                      var animateLeft, slideLeft;
                      
                      advance();
                      
                      if ($group.is(':animated') || currentIndex === newIndex) {
                        return;
                      }
                      
                      bulletArray[currentIndex].removeClass('active');
                      bulletArray[newIndex].addClass('active');
                      
                      if (newIndex > currentIndex) {
                        slideLeft = '100%';
                        animateLeft = '-100%';
                      } else {
                        slideLeft = '-100%';
                        animateLeft = '100%';
                      }
                      
                      $slides.eq(newIndex).css({
                        display: 'block',
                        left: slideLeft
                      });
                      $group.animate({
                        left: animateLeft
                      }, function() {
                        $slides.eq(currentIndex).css({
                          display: 'none'
                        });
                        $slides.eq(newIndex).css({
                          left: 0
                        });
                        $group.css({
                          left: 0
                        });
                        currentIndex = newIndex;
                      });
                    }
                    
                    function advance() {
                      clearTimeout(timeout);
                      timeout = setTimeout(function() {
                        if (currentIndex < ($slides.length - 1)) {
                          move(currentIndex + 1);
                        } else {
                          move(0);
                        }
                      }, 4000);
                    }
                    
                    $('.next_btn').on('click', function() {
                      if (currentIndex < ($slides.length - 1)) {
                        move(currentIndex + 1);
                      } else {
                        move(0);
                      }
                    });
                    
                    $('.previous_btn').on('click', function() {
                      if (currentIndex !== 0) {
                        move(currentIndex - 1);
                      } else {
                        move(3);
                      }
                    });
                    
                    $.each($slides, function(index) {
                      var $button = $('<a class="slide_btn">&bull;</a>');
                      
                      if (index === currentIndex) {
                        $button.addClass('active');
                      }
                      $button.on('click', function() {
                        move(index);
                      }).appendTo('.slide_buttons');
                      bulletArray.push($button);
                    });
                    
                    advance();
                  });