module.exports=function(grunt){
	grunt.initConfig({
  concat: {
   
    js: {
      src: ['js/castController.js', 'js/controller.js', 'js/infController.js','js/searchController.js'],
      dest: 'build/js/scripts.js',
    },
  },
  watch: {
  js: {
    files: ['js/**/*.js'],
    tasks: ['concat'],
  
  },
},
});


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
};