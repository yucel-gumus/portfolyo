/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class", // Enables dark mode via class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5A2DFF", // More vibrant and modern primary color
        secondary: "#3B3F89", // Deep contrasting secondary color
        tertiary: "#FF5F5F", // A fresh, light tertiary color for accents
        quaternary: "#4C9EEA", // Clean and professional quaternary color
        five: "#D0C0FF", // Light accent color for highlights or backgrounds

        // Updated for better contrast and readability
        ctnPrimaryLight: "#1E2736", // Darker primary light color
        ctnSecondaryLight: "#3B3F89", // Maintain consistency in colors
        ctnSpecialDark: "#800020", // Rich dark color for special components
        ctnPrimaryDark: "#E5E6E9", // Bright dark mode primary background
        ctnSecondaryDark: "#A1B1C0", // Softer dark secondary color
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(0,0,0,0.5)", // Softer shadow for a cleaner look
        glow: "0 4px 10px rgba(0, 122, 255, 0.6)", // Subtle glow effect for hover states
      },
      backgroundImage: {
        bgPrimaryDark:
          "linear-gradient(90deg, rgba(52, 85, 139, 1) 0%, rgba(33, 150, 243, 1) 50%, rgba(52, 85, 139, 1) 100%)",
        bgSecondaryDark:
          "linear-gradient(90deg, rgba(31,31,55,1) 0%, rgba(47,47,71,1) 50%, rgba(31,31,55,1) 100%)",
        bgSpecialDark:
          "linear-gradient(90deg, rgba(63,45,56,1) 0%, rgba(101,35,57,1) 50%, rgba(79,49,68,1) 100%)",
        bgPrimaryLight:
          "linear-gradient(90deg, rgba(211,207,212,1) 0%, rgba(231,239,244,1) 50%, rgba(211,207,212,1) 100%)",
        bgSecondaryLight:
          "linear-gradient(90deg, rgba(224,234,240,1) 0%, rgba(232,239,243,1) 50%, rgba(224,234,240,1) 100%)",
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px", // Added larger screen support for responsiveness
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern, clean font for better readability
      },
      spacing: {
        "18": "4.5rem", // Additional spacing for design flexibility
        "28": "7rem",
      },
    },
  },
  plugins: [],
};
