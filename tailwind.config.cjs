/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        poppinsbold: ["PoppinsBold"],
      },
      backgroundImage: {
        'author1': "url('/src/assets/author1.jpg')",
      },
      plugins: [
        require('@tailwindcss/aspect-ratio'),
      ],
    }
  }
}