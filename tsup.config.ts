import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  publicDir: 'public',
  banner: {
    js: '#!/usr/bin/env node',
  },
});
