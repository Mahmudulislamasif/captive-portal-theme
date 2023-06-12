

(function ($) {


    //Hide loading box (preloader) and header title animation
    function preloaderAnimation() {
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
    }




   
    /*-------------------------------------------
          Navbar add remove calss
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
      Password toggle
    --------------------------------------------- */
    var x = 1;

    function passwordToggle() {
        var passwordInput = document.getElementById('password');
        var hidePasswordIcon = document.getElementById('hide-password');
        if (x === 1) {
            passwordInput.type = 'password';
            hidePasswordIcon.setAttribute('xlink:href', '#icon-eye-hide');
            x = 0;
        } else {
            passwordInput.type = 'text';
            hidePasswordIcon.setAttribute('xlink:href', '#icon-eye');
            x = 1;
        }

    }




    $(window).on('load', function () {
        preloaderAnimation();
    });




})(jQuery);