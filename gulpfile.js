const { src, dest, series, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
const csso = require('gulp-csso');
const concat = require('gulp-concat');
const fileinclude = require('gulp-file-include');
const terser = require('gulp-terser');
const sync = require('browser-sync').create();

let del = null;

const importDel = async () => {
  if (!del) {
    del = (await import('del')).default;
  }
};

// Clear
const clear = async () => {
  await importDel();
  if (typeof del === 'function') {
    return del('docs');
  } else {
    console.error('Error: del is not a function');
  }
};
exports.clear = clear;
// ... (остальной код остается без изменений)

// HTML

const html = () => {
  return src('src/*.html')
    .pipe(fileinclude())
    .pipe(dest('docs'))
    .pipe(sync.stream())
}

exports.html = html

// Styles

const styles = () => {
  return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(postcss([
      require('postcss-import'),
      require('autoprefixer'),
    ]))
    .pipe(csso())
    .pipe(concat('index.css'))
    .pipe(dest('docs/css'))
    .pipe(sync.stream())
}

exports.styles = styles

// Styles libs

const stylesLibs = () => {
  return src([
      'node_modules/swiper/swiper-bundle.min.css',
	  'node_modules/@fancyapps/ui/dist/fancybox/fancybox.css',
    ])
    .pipe(concat('libs.css'))
    .pipe(dest('docs/css'))
    .pipe(sync.stream())
};

exports.stylesLibs = stylesLibs

// Scripts libs

const scriptsLibs = () => {
  return src([  
		'node_modules/swiper/swiper-bundle.min.js',
		'node_modules/@fancyapps/ui/dist/fancybox/fancybox.umd.js',
    ])
    .pipe(concat('libs.js'))
    .pipe(dest('docs/js'))
    .pipe(sync.stream())
};

exports.scriptsLibs = scriptsLibs

// Scripts

const scripts = () => {
  return src('src/js/*.js')
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(concat('index.js'))
    .pipe(terser())
    .pipe(dest('docs/js'))
    .pipe(sync.stream())
};

exports.scripts = scripts

// Copy

const copy = () => {
  return src(['src/fonts/**/*', 'src/img/**/*', 'src/video/**/*', 'src/js/pace/**/*'], { base: 'src' })
    .pipe(dest('docs'))
    .pipe(sync.stream({ once: true }))
};

exports.copy = copy

// Server

const server = () => {
  sync.init({
    ui: false,
    notify: false,
    server: {
      baseDir: 'docs'
    }
  });
};

exports.server = server



// Watch

const watcher = () => {
  watch('src/*.html', series(html))
  watch('src/scss/**/*.scss', series(styles))
  watch('src/js/**/*.js', series(scripts))
  watch(['src/fonts/**/*', 'src/img/**/*',], series(copy))
};

exports.watcher = watcher

// Default

exports.default = series(
  clear,
  parallel(
    html,
    stylesLibs,
    styles,
    scriptsLibs,
    scripts,
    copy,
  ),
  parallel(
    watcher,
    server,
  ),
)
