// 	/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./*.html", // Crucial: Tells Tailwind to scan all HTML files
// 	'./src/**/*.{html,js}', // This is the key line 
// 	//'./index.html', // Add other relevant paths if you use a framework
//   "./script.js",   // Scan your JS logic
//   "./style.css",   // Needed because you use @apply here
// 	  ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",  // Crucial: Tells Tailwind to scan all HTML files
    "./script.js",
    "./style.css",
    "./src/**/*.{html,js,css}",  // <-- include input.css here
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

