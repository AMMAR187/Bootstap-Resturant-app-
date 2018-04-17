'use strict'
module.exports= function (grunt) {
	
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);
	grunt.initConfig({
		sass: {
			dist: {
				files:{
					'css/styles.css':'css/styles.scss'
				}
			}
		},

		wacth: {
			files:'css/*.scss',
			task:['sass']
		},

        browserSync:{
        	dev:{
        		bsFiles:{
        			src:[
                        'css/*.css',
                        '*.html',
                        'js/*.js'
        			]
        		},
        		options:{
        			wacthTask:true,
        			server:{
        				baseDir:'./'
        			}
        		}
        	}

        }
	});
	grunt.registerTask('css',['sass']);
	grunt.registerTask('default',['browserSync','wacth']);
}