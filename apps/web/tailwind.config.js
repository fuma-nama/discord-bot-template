const preset = require("config/tailwind/tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [preset],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "../../packages/ui/**/*.{ts,tsx}",
        "../../packages/docs/**/*.{ts,tsx}",
    ],
};
