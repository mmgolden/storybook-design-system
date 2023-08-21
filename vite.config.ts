import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    vue(),

    // Copies SCSS files to the build (otherwise they would be excluded)
    viteStaticCopy({
      targets: [
        {
          src: 'lib/styles/*.scss',
          dest: 'styles'
        },
        {
          src: 'lib/components/button/*.scss',
          dest: 'components/button'
        }
      ]
    })
  ],

  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'StorybookDesignSystem',
      fileName: 'storybook-design-system',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})