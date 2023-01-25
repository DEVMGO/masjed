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
        khaki: "#cbb27a",
        lightKhaki: "#e1cb9d96"
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
      backgroundImage: theme => ({
         'islamsvg-pattern': "url('/images/auth/islamic-pattern.svg')",
         'islampng-pattern': "url('/images/auth/islamic-pattern.png')",
         'bbb': "url('/public/assets/images/auth/bbb.png')"
      })
    },
  },
  plugins: [],
};
