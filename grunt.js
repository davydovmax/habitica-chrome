module.exports = function(grunt) {

	grunt.initConfig({
		lint: {
			background: ['test/*.js', 'src/*.js']

		},
		concat: {
			background: {
				src: ['src/utilies.js', 'src/activators.js', 'src/sitewatcher.js', 'src/habitrpg.js', 'src/app.js'],
				dest: 'background.js'
			}
		},
		watch: {
			background: {
				files: ['src/*.js', 'test/*.js'],
				tasks: ['lint', 'jasmine', 'concat:background', 'clean:test']
			},
			options: {
				files: ['options.js', 'options.html'],
				tasks: ['concat:background', 'copy:extension']
			}
		},
		jasmine : {
			src : ['src/utilies.js', 'src/activators.js', 'src/sitewatcher.js', 'src/habitrpg.js'],
			specs : ['test/utilies_test.js', 'test/activators_test.js', 'test/sitewatcher_test.js', 'test/habitrpg_test.js'],
			timeout : 1000
		},
		clean: {
			test: ['_SpecRunner.html']
		},
		copy: {
			extension: {
				files: {
					'../chromExtension/': ['img/*', 'vendor/*', 'background.html', 'options.html', 'background.js', 'options.js', 'manifest.json']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-jasmine-runner');

	grunt.registerTask('create', ['concat:background', 'copy:extension']);

	grunt.registerTask('default', 'create');
	

};