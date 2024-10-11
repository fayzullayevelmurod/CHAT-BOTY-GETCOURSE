/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ['"Manrope"'],
        Onest: ['"Onest"'],
        Gilroy: ['"Gilroy"'],
        IgraSans: ['"Igra Sans"'],
      },
      colors: {
        "black": "#000000",
        "black-dark": "#0B0A0A",
        "black-bg-dark": "#1C1C1C",
        "grey-dark": "#2F2E32",
        "accent": "#FFCC00",
        "secondary": "#525050",
        "secondary-50": "#F3F3F380",
        "bg-color": "#F2F2F2",
        "card-bg": "#F3F3F380",
        "comment-bg": "#F3F3F3",
        "primary": "#0B0A0A",
        "black-light": "#878787",
        "bluesales": "#008BE8",
        "pink": "#7001FE",
        "green": "#8FFE01",
        "border-line": "#606356",
        "what-bg": "rgba(35, 34, 37, 0.5)",
      },
      padding: {
        '17': '4.375rem',
      },
      screens: {
        'custom': '460px',
      },
    },
  },
  plugins: [],
}

