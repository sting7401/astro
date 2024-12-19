import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import lit from '@astrojs/lit';

// https://astro.build/config
export default defineConfig({
    srcDir: './astro', // 원하는 폴더 경로로 변경
    //   output: 'static', // 정적 파일로 빌드
    integrations: [tailwindcss({ nesting: true }), react(), tailwind(), svelte(), lit()],
});
