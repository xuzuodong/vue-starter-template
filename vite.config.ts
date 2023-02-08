/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    plugins: [
        Vue(),

        // https://github.com/hannoeru/vite-plugin-pages
        Pages({
            routeStyle: 'nuxt',
            extensions: ['vue'],
        }),

        // https://github.com/antfu/unplugin-auto-import
        AutoImport({
            imports: [
                'vue',
                'vue/macros',
                'vue-router',
                '@vueuse/core',
            ],
            dts: 'src/types/auto-imports.d.ts',
            vueTemplate: true,
        }),

        // https://github.com/antfu/vite-plugin-components
        Components({
            directoryAsNamespace: true,
            dts: 'src/types/components.d.ts',
            resolvers: [
                IconsResolver({
                    prefix: 'icon',
                }),
            ],
        }),

        // https://github.com/antfu/unplugin-icons
        Icons({ compiler: 'vue3', defaultClass: 'inline' }),
    ],

    // https://github.com/vitest-dev/vitest
    test: {
        environment: 'jsdom',
    },
})
