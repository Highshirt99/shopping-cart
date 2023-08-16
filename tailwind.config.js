/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        lightGrayishBlue :  "hsl(223, 64%, 98%)",
        Orange: " hsl(26, 100%, 55%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        Black: "hsl(0, 0%, 0%)",
        paleOrange: "hsl(25, 100%, 94%)",
        veryDarkBlue: " hsl(220, 13%, 13%)"
      },

      fontFamily: {
        bodyFont: ["Kumbh Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}