import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
// import rollupNodePolyfills from 'rollup-plugin-node-polyfills';

let nodeGlobalPolyfill = NodeGlobalsPolyfillPlugin({
  buffer: true
})

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      // Polyfill Node.js global to access Buffer
      define: {
        global: 'globalThis'
      },
      plugins: [
        nodeGlobalPolyfill
      ]
    }
  },
  build: {
    // rollupOptions: {
    //   plugins: [
    //     rollupNodePolyfills()  // Use imported polyfill plugin here
    //   ]
    // }
  }
});
