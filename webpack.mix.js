let mix = require('laravel-mix');

mix.setPublicPath('dist')
    .js('src/js/app.js', 'dist')
    .js('src/js/vendor.js', 'dist')
    .copy('src/img', 'dist/img')
    .sass('src/sass/app.scss', 'dist')