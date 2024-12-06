/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        metropolis: ["Metropolis", "sans-serif"],
        metropolis_semi_bold: ["Metropolis_Semi_Bold", "sans-serif"],
        metropolis_bold: ["Metropolis_Bold", "sans-serif"],
        metropolis_extra_bold: ["Metropolis_Extra_Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
