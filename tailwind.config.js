/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        customgrid: '1fr 0.5fr 0.5fr 0.5fr 0.5fr',
      },
      gridColumn: {
        custom: 'grid-column:  1 / 3',
      },
      colors: {
        Navbar: "hsl(240, 5%, 8%)",
        white2: "hsl(0, 0%, 100%)",
        bro: 'hsl(0, 0%, 85%)',
        bluecrayola: "hsl(222, 100%, 61%)",
        Trendbg: "hsl(228, 9%, 10%)",
        raisinblack: "hsl(225, 15%, 16%)",
        shadow: "0px 15px 10px -20px hsla(0, 0%, 6%, 0.3)",
        gunmetal: "hsla(230, 16%, 22%, 0.5)",
        white_30: 'hsla(0, 0%, 100%, 0.3)',
        cultured: 'hsl(0, 0%, 93%)',
        cadetcrayola: "hsl(227, 13%, 73%)",
        whitey: "hsl(0, 0%, 100%)",
        herobg: "hsl(228, 9%, 10%)",
        white_50: "hsla(0, 0%, 100%, 0.5)",
        gradient: "linear-gradient(90deg, var(hsl(0, 0%, 100%)) 0px 77%, var(hsla(0, 0%, 100%, 0.5)) 92%, transparent)",
      },
      fontFamily: {
        fontUbuntu: 'Ubuntu'
      },
    },
  },
  plugins: [],
};
