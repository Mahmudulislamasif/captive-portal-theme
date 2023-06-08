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







// Tabs

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






////////////////////////
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
/*-------------------------------------------
  Timer
--------------------------------------------- */
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