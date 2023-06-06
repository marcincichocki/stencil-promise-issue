import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'dist-bug',
  enableCache: true,
  allowInlineScripts: false,
  buildDist: true,
  tsconfig: './tsconfig.json',
  buildEs5: false,
  sourceMap: true,
  devMode: true,
  plugins: [sass()],
  excludeUnusedDependencies: true,
  autoprefixCss: false,
  minifyCss: false,
  minifyJs: false,
  validateTypes: true,
  hashFileNames: false,
  outputTargets: [
    {
      type: 'dist',
      empty: true,
      polyfills: false,
    },
  ],
};
