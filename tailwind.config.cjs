/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                developerBlue: "#6f73d9",
                developerBlueDark: "#6e38a8",
                landscapeGreen: "#50b590",
                landscapeGreenDark: "#14878e",
                black: "#0f0f11",
            },
            brightness: {
                25: ".25",
                30: ".3",
                40: ".4",
            },
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
