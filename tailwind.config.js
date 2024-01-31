/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "youTube-red": "#fe0000",
        "youTube-dark": "#0f0f0f"
      },
      fontFamily: {
        TradeGothicLTBold: [""],
      },
    },
  },
  plugins: [],
}