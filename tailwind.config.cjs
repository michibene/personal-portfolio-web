/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            developerBlue: "#6f73d9",
            landscapeGreen: "#3f8c70",
            black: "#0f0f11",
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
