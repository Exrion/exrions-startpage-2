module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      colors: {
        "blue": {
          "50": "#EBEBFF",
          "100": "#D2D2FE",
          "200": "#A6A4FE",
          "300": "#7E7CFD",
          "400": "#524FFD",
          "500": "#2522FC",
          "600": "#0703E2",
          "700": "#0502AB",
          "800": "#03026F",
          "900": "#020137"
        },
        "gray": {
          "50": "#74716a",
          "100": "#6a6760",
          "200": "#605d56",
          "300": "#56534c",
          "400": "#4c4942",
          "500": "#423f38",
          "600": "#38352e",
          "700": "#2e2b24",
          "800": "#24211a",
          "900": "#1a1710"
        },
        "white": {
          "50": "#ffffff",
          "100": "#ffffff",
          "200": "#fcfcfc",
          "300": "#f2f2f2",
          "400": "#e8e8e8",
          "500": "#dedede",
          "600": "#d4d4d4",
          "700": "#cacaca",
          "800": "#c0c0c0",
          "900": "#b6b6b6"
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}