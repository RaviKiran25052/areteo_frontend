/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      theme: {
        colors: {
          primary: {
            50: "#F0FDF4",
            100: "#DCFCE7",
            200: "#BBF7D0",
            300: "#86EFAC",
            400: "#4ADE80",
            500: "#22C55E",
            600: "#4FC409",
            700: "#15803D",
            800: "#166534",
            900: "#14532D",
          },
        },
      },
    },
    plugins: [],
  }
}