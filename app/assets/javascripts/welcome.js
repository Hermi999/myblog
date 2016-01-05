var globals = {
  navbarStyle: 0
};

$( document ).ready(function() {
  // Hide spinner and show website if everythint is loaded
  $('#loading_wrapper').hide();
  $('#content_wrapper').show();

  // set the height of the header depending on the screen size
  $('#header').outerHeight(calculateHeaderHeight());

  // set the height of the header depending on the changed screen size
  $(window).resize(function(){
    $('#header').outerHeight(calculateHeaderHeight());
  });

  // change menu style if user scrolls down
  $(document).scroll(function(){
    changeNavBarStyle();
  });

  // Scroll down icon logic
  $('#scrollDown').click(scrollDownFromMenu);

  // Show some items delayed and with animation
  $('#headline').delay(700).fadeIn(600);
  $('#header_button_wrapper').delay(700).slideDown(300);

  // Show text on hover projects images
  $('.projects_images_wrapper').hover(
    function(el){
      $(el.currentTarget.childNodes[1]).slideDown(200);
      $(el.currentTarget.childNodes[3]).slideDown(200);
      $(el.currentTarget.childNodes[5]).delay(200).fadeIn(400);
    }, function(el){
      $(el.currentTarget.childNodes[1]).hide();
      $(el.currentTarget.childNodes[3]).hide();
      $(el.currentTarget.childNodes[5]).stop(true,true)
      $(el.currentTarget.childNodes[5]).hide();
    });

});


function calculateHeaderHeight(){
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var headerHeight = 0;
  var ratio = windowWidth/windowHeight;

  // The image height should always be the window hight if ratio > 1.
  if (ratio > 1.0){
    headerHeight = windowHeight;

    // Show the scroll down icon
    $('#scrollDown').delay(700).fadeIn(600);
  }else{
    headerHeight = windowWidth;

    // Also hide the scroll down icon
    $('#scrollDown').stop(true, true);
    $('#scrollDown').hide();
  }

  return headerHeight;
}

function changeNavBarStyle(){
  if (globals.navbarStyle === 0){
    if($(document).scrollTop() > 100){
      globals.navbarStyle = 1;

      $('.navbar-fixed-top').css({
        backgroundColor: 'rgb(32, 31, 31)'
      });
      $('.navbar-nav').animate({
        paddingTop: '7px'
      },100);
      $('#header_logo_link_desktop').find('img').animate({
        width: '40px'
      }, 100);
      $('#header_logo_link_mobile').find('img').animate({
        width: '60px'
      }, 100);
    }
  }

  if (globals.navbarStyle ===1){
    if($(document).scrollTop() < 100){
      globals.navbarStyle = 0;

      $('.navbar-fixed-top').css({
        backgroundColor: 'transparent'
      });
      $('.navbar-nav').animate({
        paddingTop: '15px'
      },100);
      $('#header_logo_link_desktop').find('img').animate({
        width: '75px'
      }, 100);
      $('#header_logo_link_mobile').find('img').animate({
        width: '75px'
      }, 100);
    }
  }
}

function scrollDownFromMenu(){
  $('html, body').animate({
      scrollTop: $(".content").offset().top - 65
  }, 2000);
}
