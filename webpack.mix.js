const mix = require('laravel-mix');

// Set options
mix.options({
  processCssUrls: false,
  terser: {
    extractComments: false
  }
});

// SCSS/SASS compiling
mix.sass(`sass/main.scss`, `dist/css/main.css`).sourceMaps();
