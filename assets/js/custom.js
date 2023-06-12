(function ($) {
  "use strict";
  var nateget = {
    initialize: function () {
      this.preloaderAnimation();
      this.headerScroll();
      this.menuDropdown();
      this.hideShowPassword();
      this.nodeCursorEffect();
      this.tabsContent();
      this.radioForm();
      this.timer();
      this.waterRippleEffect();
      this.mgGlitchEffect();
      this.particlesEffect();
    },
    // -------------------------------------------------------------------------- //
    // Hide loading box (preloader) and header title animation
    // -------------------------------------------------------------------------- //
    preloaderAnimation: function () {
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
    },
    // -------------------------------------------------------------------------- //
    // Navbar add remove calss
    // -------------------------------------------------------------------------- //
    headerScroll: function () {
      var header = $(".header");
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
          header.removeClass('bg-transparent').addClass("header-bg");
        } else {
          header.removeClass("header-bg").addClass('bg-transparent');
        }
      });
    },
    // -------------------------------------------------------------------------- //
    // Metismenu
    // -------------------------------------------------------------------------- //
    menuDropdown: function () {
      $(".metismenu").metisMenu();
    },
    // -------------------------------------------------------------------------- //
    // Password toggle
    // -------------------------------------------------------------------------- //  
    hideShowPassword: function () {
      $(".feather-eye").on("click", function () {
        var passwordInput = document.getElementById("password");
        var hidePasswordIcon = document.getElementById('hide-password');
        if (passwordInput.type === "password") {
          passwordInput.type = "text";
          hidePasswordIcon.setAttribute('xlink:href', '#icon-eye');
        } else {
          passwordInput.type = "password";
          hidePasswordIcon.setAttribute('xlink:href', '#icon-eye-hide');
        }
      });
    },

    // -------------------------------------------------------------------------- //
    //  Node Cursor
    // -------------------------------------------------------------------------- //
    nodeCursorEffect: function () {
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
    },
    // -------------------------------------------------------------------------- //
    // tabs content
    // -------------------------------------------------------------------------- //
    tabsContent: function () {
      const loginContainer = document.getElementById('loginContainer');
      const registerContainer = document.getElementById('registerContainer');
      const loginButton = document.getElementById('loginButton');
      const registerButton = document.getElementById('registerButton');
      const continueButton = document.getElementById('continue-button');
      const passwordButton = document.getElementById('cong-container');
      const loginBtnTwo = document.getElementById('loginButtonTwo');
      const connectBtn = document.getElementById('connect-btn');
      const logOut = document.getElementById('logout');
      const logoutButton = document.getElementById('logoutButton')
      loginButton.addEventListener('click', () => {
        registerContainer.classList.remove('fade-in');
        registerContainer.classList.add('container-hidden');
        loginContainer.classList.remove('container-hidden');
        setTimeout(() => {
          loginContainer.classList.add('fade-in');
        }, 50);
      });

      registerButton.addEventListener('click', () => {
        loginContainer.classList.remove('fade-in');
        loginContainer.classList.add('container-hidden');
        registerContainer.classList.remove('container-hidden');
        setTimeout(() => {
          registerContainer.classList.add('fade-in');
        }, 50);
      });
      continueButton.addEventListener('click', () => {
        passwordButton.classList.add('fade-in');
        passwordButton.classList.remove('container-hidden');
        registerContainer.classList.add('container-hidden');
        setTimeout(() => {
          registerContainer.classList.add('fade-in');
        }, 50);
      });
      loginBtnTwo.addEventListener('click', () => {
        loginContainer.classList.add('fade-in');
        loginContainer.classList.remove('container-hidden');
        registerContainer.classList.add('container-hidden');
        passwordButton.classList.add('container-hidden');
        setTimeout(() => {
          loginButton.classList.add('fade-in');
        }, 50);
      });
      connectBtn.addEventListener('click', () => {
        logOut.classList.add('fade-in');
        logOut.classList.remove('container-hidden');
        loginContainer.classList.add('container-hidden');
        registerContainer.classList.add('container-hidden');
        passwordButton.classList.add('container-hidden');
        setTimeout(() => {
          loginButton.classList.add('fade-in');
        }, 50);
      });

      logoutButton.addEventListener('click', () => {
        loginContainer.classList.add('fade-in');
        loginContainer.classList.remove('container-hidden');
        registerContainer.classList.add('container-hidden');
        passwordButton.classList.add('container-hidden');
        logOut.classList.add('container-hidden');
        setTimeout(() => {
          loginButton.classList.add('fade-in');
        }, 50);
      });
    },

    // -------------------------------------------------------------------------- //
    // Radio form
    // -------------------------------------------------------------------------- //
    radioForm: function () {
      const radioOption1 = document.getElementById('option_1');
      const radioOption2 = document.getElementById('option_2');
      const form = document.getElementById('myForm');

      radioOption1.addEventListener('change', function () {
        if (this.checked) {
          form.classList.add('hidden');     // Hide the form
        }
      });
      radioOption2.addEventListener('change', function () {
        if (this.checked) {
          form.classList.remove('hidden');  // Show the form
        }
      });
    },

    // -------------------------------------------------------------------------- //
    // Counter
    // -------------------------------------------------------------------------- //
    timer: function () {
      var countDown = new Date("June 30, 2023 00:00:00").getTime();
      var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDown - now;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Add leading zeros if needed
        hours = addLeadingZero(hours);
        minutes = addLeadingZero(minutes);
        seconds = addLeadingZero(seconds);

        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
      }, 1000);

      function addLeadingZero(value) {
        return value < 10 ? "0" + value : value;
      }
    },
    // -------------------------------------------------------------------------- //
    // Ripple Effect
    // -------------------------------------------------------------------------- //
    waterRippleEffect: function () {
      if ($('.water-ripple-effect').length) {
        var ripple1 = new RippleEffect({
          parent: document.querySelector('.water-ripple-effect'),
          texture: '/assets/images/office.jpg',
          speedIn: 2,
          speedOut: 1.5,
        });

      }
    },
    // -------------------------------------------------------------------------- //
    // Glitch Effect
    // -------------------------------------------------------------------------- //
    mgGlitchEffect: function () {
      if ($('.glitch-img').length) {
        $(".glitch-img").mgGlitch({
          // set 'true' to stop the plugin
          destroy: false,
          // set 'false' to stop glitching
          glitch: true,
          // set 'false' to stop scaling
          scale: true,
          // set 'false' to stop glitch blending
          blend: true,
          // select blend mode type
          blendModeType: 'hue',
          // set min time for glitch 1 elem
          glitch1TimeMin: 10,
          // set max time for glitch 1 elem
          glitch1TimeMax: 100,
          // set min time for glitch 2 elem
          glitch2TimeMin: 10,
          // set max time for glitch 2 elem
          glitch2TimeMax: 300,
        });

      }
    },
    // -------------------------------------------------------------------------- //
    // Particles Effect
    // -------------------------------------------------------------------------- //
    particlesEffect: function () {
      if ($('#particles').length) {
        particlesJS("particles", {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#fff" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
              image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
              value: 0.2,
              random: false,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
              value: 6,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#fff",
              opacity: 0.5,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: false, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 }
            }
          },
          retina_detect: true
        });
      }
    },

  };

  // Initialize
  $(document).ready(function () {
    nateget.initialize();
  });

  // On load
  $(window).on("load", function () {
    nateget.preloaderAnimation();
  });

}(jQuery));