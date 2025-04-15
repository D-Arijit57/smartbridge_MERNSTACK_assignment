/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensures Tailwind scans all relevant files
    theme: {
      extend: {
        colors: {
          primary: "#1E3A8A", // Custom primary color (blue)
          secondary: "#9333EA", // Custom secondary color (purple)
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"], // Default font
        },
      },
    },
    plugins: [],
  };