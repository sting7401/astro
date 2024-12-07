import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './*.{html,js}',
        './public/static/**/*.{html,js}',
        './src/**/*.{svelte,html,js,ts}',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        screens: {
            sm: { max: '640px' },
            'sm-md': { min: '0', max: '1366px' },
            'md-min': { min: '641px' },
            'md-max': { max: '1366px' },
            md: { min: '641px', max: '1366px' },
            lg: { min: '1367px' },
            'sm-h-min': { raw: '(min-height: 641px)' },
        },
        // extend: {
        //     spacing: generatePxRem(1200),
        //     maxWidth: generatePxRem(1200),
        //     maxHeight: generatePxRem(1200),
        //     minWidth: generatePxRem(1200),
        //     minHeight: generatePxRem(1200),
        // },
        // borderRadius: generatePxRem(200),
        // fontSize: generatePxRem(200),
    },
    plugins: [
        require('flowbite/plugin'),
        require('tailwind-scrollbar'),
        typography,
        forms,
        containerQueries,
        aspectRatio,
        // tailwindVectorEffect는 정의가 필요합니다.
    ],
} satisfies Config;
