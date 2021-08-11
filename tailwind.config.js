const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        padat: "0px 0px 4px 1px rgba(0, 0, 0, 0.75);",
      },
      boxShadow: {
        "padat-md": "1px 1px 4px 1px rgba(0, 0, 0, 0.75);",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        "background-1": "url('/background-1.jpg')",
        "background-2": "url('/background-2.jpg')",
      }),
      animation: {
        "fade-in-back-rv":
          "fade-in-back 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both reverse",
        "slide-in-blurred-bottom":
          "slide-in-blurred-bottom 0.4s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
      },
      keyframes: {
        "fade-in-back": {
          "0%": {
            transform: "translateZ(80px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateZ(0)",
            opacity: 1,
          },
        },
        "slide-in-blurred-bottom": {
          "0%": {
            transform: "translateY(1000px) scaleY(2.5) scaleX(0.2)",
            "transform-origin": "50% 100%",
            filter: "blur(40px)",
          },
          "100%": {
            transform: "translateY(0) scaleY(1) scaleX(1)",
            "transform-origin": "50% 50%",
            filter: "blur(0)",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["hover"],
      ringColor: ["hover"],
      ringOpacity: ["hover"],
      backgroundColor: ["active"],
      fontSize: ["hover", "focus"],
    },
  },
  plugins: [],
};
