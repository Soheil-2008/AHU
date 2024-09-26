/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        // padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1124px",
          xl: "1380px",
          // xl: "1400px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};
