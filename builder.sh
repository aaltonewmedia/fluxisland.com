#!/bin/sh

rm -rf _site

mkdir public
mkdir public/img
mkdir public/img/artists
mkdir public/fonts

minify index.html > index.min.html
minify index.js > index.min.js
minify style.css > style.min.css

mv index.min.html public/index.html
mv index.min.js public/index.js
mv style.min.css public/style.css

cp favicon.png public/favicon.png
cp img/artists/*.webp public/img/artists
cp fonts/Poppins-Regular.ttf public/fonts
