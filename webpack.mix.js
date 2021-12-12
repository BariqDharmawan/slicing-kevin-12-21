let mix = require('laravel-mix');

mix.setPublicPath('dist')
    .js('src/js/app.js', 'dist/js')
    .js('src/js/vendor.js', 'dist/js')
    .copy('src/img', 'dist/img')
    .sass('src/sass/app.scss', 'dist/css')