/*-------------------------------------------
           Preloader
        --------------------------------------------- */
$(window).on("load", function () {
  var speed = 500;
  setTimeout(function () {
    $('body').addClass('loaded');
  }, speed);
  setTimeout(function () {
    $(".header").addClass("opened");
  }, speed + 1000);

  setTimeout(function () {
    $(".text-wrap .animate__animated").addClass("animate__slideInUp");
  }, speed + 300);

  setTimeout(function () {
    $(".merto-img.animate__animated").addClass("animate__fadeInRight");
  }, speed + 300);
});

$(document).ready(function () {




  /*-------------------------------------------
        Navbar
    --------------------------------------------- */
  //navbar add remove calss
  var header = $(".header");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
      header.removeClass('bg-transparent').addClass("header-bg");
    } else {
      header.removeClass("header-bg").addClass('bg-transparent');
    }
  });





  /*-------------------------------------------
           Node Cursor
        --------------------------------------------- */
  NodeCursor({
    cursor: true,
    node: true,
    cursor_velocity: 1,
    node_velocity: 0.15,
    native_cursor: 'none',
    element_to_hover: '.nodeHover',
    cursor_class_hover: 'disable',
    node_class_hover: 'expand',
    hide_mode: true,
    hide_timing: 2000,
  });



  ///////////////////


  var x = 1;
  var y = 1;
  function passwordToggle() {
    var passwordInput = document.getElementById('password');
    var hidePasswordImg = document.getElementById('hide-password');

    if (x === 1) {
      passwordInput.type = 'text';
      hidePasswordImg.src = '/assets/images/icon/Show.png';
      x = 0;
    } else {
      passwordInput.type = 'password';
      hidePasswordImg.src = '/assets/images/icon/Hide.png';
      x = 1;
    }
  }

});


