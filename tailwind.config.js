/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    // "./node_modules/jquery/dist/jquery.min.js"
  ],
  theme: {
    extend: {
      fontSize:{
        "extra-large":["48px"]
      },
      colors:{
        "primary":["#212121"],
        "secondary":["#F5F5F5"],
        "main":["#A36D3D"]
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
