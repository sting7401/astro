/** @type {import('tailwindcss').Config} */
export default {
    plugins: {
        content: ['./src/**/*.{svelte,js,ts,jsx,tsx,html}'],
        tailwindcss: { config: './tailwind.config.js' },
        autoprefixer: {},
    },
};
