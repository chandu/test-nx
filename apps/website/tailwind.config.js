const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');


module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  mode: 'jit',
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),],
  purge: [
    join(__dirname, '../src/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),],
};
