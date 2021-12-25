const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');


module.exports = {
  presets: [require(join(__dirname,  '../../tailwind-workspace-preset.js'))],
  purge: [
    join(__dirname, 'src/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),],
  darkMode: 'media', // or 'media' or 'class'
};
