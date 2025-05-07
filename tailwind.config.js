/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}"
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['var(--font-poppins)'],
                montserrat: ['var(--font-montserrat)'],
            },
            colors: {
                primary: '#B8860B',
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
} 