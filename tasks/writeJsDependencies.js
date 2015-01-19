/*
 * writeJsDependencies
 * 
 *
 * Copyright (c) 2014 Cedric Dugas
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  grunt.registerTask('writeJsDependencies', 'Write an html file with the dependecies provided array', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({});
    
    var content = {
      colis:"sadasd",
      locales : options.locales,
      files : options.files
    };

    grunt.log.writeln('Writing JavaScript dependency bundles for '+options.locales+'.');
    var tmpl = grunt.file.read(__dirname+"/../templates/jsDependencies.html");

    for (i in options.locales) {
      content.currentIndex = i;
      grunt.file.write(options.path+"jsDependencies-"+options.locales[i]+".html", grunt.template.process(tmpl,{data:content}));
      grunt.log.writeln('Dependency bundle "'+options.locales[i]+'" successfully generated as "'+options.path+'jsDependencies-'+options.locales[i]+'.html"');
    }
  });

};
