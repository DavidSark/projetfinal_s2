module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'BackgroundFooter': "url('/public/BackgroundFooter.svg')",
      },

      screens: {
        '375p': '375px',
        '425p': '425px',
        '640': '640px'
      },
      "colors": {
        "baby-blue": "#78d2d8",
        "dark-black": "#1c1c1c",
        "soft-beige": "#e8e0cd",
        "white": "#ffffff",
        "blue-electric": "#3316e3",
        "gris": "#D2DEF3",
        "gris_surligner": "#AFAFAF",
      },
      "fontFamily": {
        "quicksand": "Quicksand",
        "raleway": "Raleway",
        "mulish": "Mulish",
        "ramabhadra": "Ramabhadra",
        "montserrat": "Montserrat",
      },
    },

  },
  plugins: [],
}
