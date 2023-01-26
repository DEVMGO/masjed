/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black33: "#333",
        black44: "#444",
        khaki: "#cbb27a",
        lightKhaki: "#e1cb9d96",
        bgColor: '#d8b771d10'
      },
      screens: {
        res1: "1410px",
        res2: "1230px",
        res3: { max: "640px" },
        res4: { max: "700px" },
        res5: { max: "900px" },
        res6: { max: "1000px" },
        res7: { max: "1200px" },
      },
      boxShadow: {
        '3xl': '0 0 15px 0px rgba(0, 0, 0, 0.4)',
      },
      gridTemplateColumns: {
        16: "repeat(auto-fit, minmax(150px, 1fr))",
        17: "repeat(auto-fit, minmax(160px, 1fr))",
        18: "repeat(auto-fit, minmax(200px, 1fr))",
        19: "repeat(auto-fit, minmax(250px, 1fr))",
        20: "repeat(auto-fit, minmax(270px, 1fr))",
        21: "repeat(auto-fit, minmax(280px, 1fr))",
      },
      backgroundImage: theme => ({
         'islamsvg-pattern': "url('/images/auth/islamic-pattern.svg')",
         'islampng-pattern': "url('/images/auth/islamic-pattern.png')",
         'bbb': "url('/public/assets/images/auth/bbb.png')"
      })
    },
  },
  plugins: [],
};
