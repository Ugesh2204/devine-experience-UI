const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('message', function(){
    return console.log('Gulp is running...');
});

//Copy all HTML FILES
gulp.task('copyHtml', function(done){
    //select all html
    gulp.src('src/*html')
    //pipe it to dist
        .pipe(gulp.dest('dist'));
        done();
})

// gulp sass compilie sass
gulp.task('sass', function(done){
    //sass uses scss extension
    //so we are basically say any sass file in that folder
     gulp.src('src/sass/*.scss')
         .pipe(sass().on('error',sass.logError))
         .pipe(gulp.dest('dist/css'));

         done();
});


//font awesome
gulp.task('copyFont', function() {
    gulp.src([
            'node_modules/@fortawesome/fontawesome-free/**',
            
        ])
        .pipe(gulp.dest('dist/vendor/font-awesome'));
    });

//automate all task
    gulp.task('default',['message','copyHtml','sass','copyFont']);


