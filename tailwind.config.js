/** @type {import('tailwindcss').Config} */


// function withOpacity(variableName) {
//   return ({ opacityValue }) => {
//     if (opacityValue !== undefined) {
//       return `rgba(var(${variableName}), ${opacityValue})`
//     }
//     return `rgb(var(${variableName}))`
//   }
// }
module.exports = {
  content: [
    "./html/**/*.{html,js}",
    // "./node_modules/jquery/dist/jquery.min.js"
  ],
  theme: {
    extend: {
      fontSize:{
        "extra-large":["48px"]
      },
      colors:{
        primary: 'var(--color-text-base)',
        // btn: 'var(--btn-bg)',
      },
      borderColor:{
        current: 'var(--border-current)'
      },
      fontFamily:{
        "poppins":["Poppins"]
      },
      backgroundImage:{
        "background":"url('../images/img/restaurant-image.png')",
        "background-two":"url('../images/img/bg.png')",
        "background-hotel":"url('../images/hotel-image/hotel-image.png')"
      },

    },
  },

  plugins: [require("daisyui")],
}
