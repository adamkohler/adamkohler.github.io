//The "wrapper" function
module.exports = function(grunt) {

  //Project and task configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /**
    *Grunt sass
    *Compile sass to css
    */
    sass: {
        options: {
          sourceMap: false
        },
        dist: {
          files: {
              'Styles/style2.css' : 'Styles/scssStyles.scss'
          }
        }
    },

    // Grunt Contrib Watch
    // Moniter files and execute tasks
    // https://www.npmjs.com/package/grunt-contrib-watch
    watch: {
      sass: {
        files: [
          'Styles/scssStyles.scss'
        ],
        tasks: [
          'sass'
        ]
      },
      scripts: {
        files: [
            'Styles/js_ugly/javascripts.js'
          ],
          tasks: [
            'uglify'
          ]
        }


    },

    // Grunt contrib uglify
    uglify: {
      my_target:{
        files: {
          'Styles/scripts.js' : ['Styles/js_ugly/javascripts.js', 'node_modules/jquery/dist/jquery.js']
        }
      }
    }



  });

  //Loading Grunt plugins and tasks
  require('load-grunt-tasks')(grunt);

  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-sass');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('load-grunt-tasks');
  //grunt.loadNpmTasks('grunt');

  //Custom tasks
  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
