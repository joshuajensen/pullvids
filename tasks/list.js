module.exports = function(grunt) {
	var manifest = require('manifest');
	var _ = require('underscore');


	
	//var config = grunt.file.read("slingshotConfig.json");


  grunt.registerTask("list", "get em", function() {

    grunt.log.writeln("download image");

    // download files from test.com 
	// as specified in the manifest file "http://test.com/manifest"
	// to the current working directory



	var total = 163;

	for(i=0;i<total;i++){
		grunt.log.writeln("open:dev"+i);
	}

	
	// var indexConfigObj = new Object();
	
	// indexConfigObj.cssSlingshot = "http://tgtfiles.target.com/run/slingshot/public/css/packages/compiled/slingshot-main.css";
	
	// indexConfigObj.jsScript = "http://tgtfiles.target.com/run/slingshot/public/vendor/require.js";

	// indexConfigObj.require = "http://tgtfiles.target.com/run/slingshot/public/common.js";

	// indexConfigObj.basePath = "http://tgtfiles.target.com/run/slingshot/public/";

	// indexConfigObj.cssImgPath = "http://tgtfiles.target.com/run/slingshot/public/images/slingshot/";
	





	// var pathScss = "./public/css/includes/_path.scss";
	// var newPathScss = grunt.template.process(grunt.file.read( "gruntTemplates/_pathTemplate.scss" ), {data: indexConfigObj});
	// grunt.file.write(pathScss, newPathScss);




	// var json_import = [];
	// var sling_cache_files = [];
	// grunt.file.expand({
 //        filter: 'isFile',
 //        cwd: 'public/images/slingshot'
 //    }, ['**/*']).forEach(function(file){

    	
 //        sling_cache_files.push(indexConfigObj.basePath+'images/slingshot/' + file);

 //    });
	// var html_export = "";
	// grunt.file.expand({
 //        filter: 'isFile',
 //        cwd: 'public/modules/slingshot/component_library'
 //    }, ['**/*']).forEach(function(file){
 //    	var fileContents = grunt.file.read(process.cwd() + '/public/modules/slingshot/component_library/' + file);
 //    	var description = "";
 //    	var runApproved = "";
 //    	var slingshotApproved= "";
 //    	if (fileContents.match('slingshotDescription')){
 //    		var index = fileContents.match('slingshotDescription').index;
 //    		description = fileContents.slice(index);
 //    		description = description.split("'")[1];
 //    	}
 //    	if (fileContents.match('runApproved')){
 //    		runApproved = "<span class='approved'>**RUN APPROVED**</span>";
 //    	}
 //    	if (fileContents.match('slingshotApproved')){
 //    		slingshotApproved = "<span class='approved'>**SLINGSHOT APPROVED**</span>";
 //    	}
    	
 //        sling_cache_files.push(indexConfigObj.basePath+"modules/slingshot/component_library/"+file);
       
 //        json_import = json_import + "<script src=\'"+indexConfigObj.basePath+"modules/slingshot/component_library/"+file+"?ver="+(new Date().getTime())+"'></script>";
 //        var name = file.split(".js")[0];
 //        name = name.split("/");
 //        name = name[name.length - 1];
 //        var h4 = "<h4 class=\'sling-description\'>"+ description +"</h4>";
 //        var aTag = " <a href=\'"+indexConfigObj.basePath+"modules/slingshot/component_library/"+file+"\' target=\'blank\' style=\'color: blue !important;text-decoration: underline !important;display: inline-block !important; font-size: 16px;\'>view json</a> ";
 //        var h2 = "<h2 class=\'slingtemp\'>" + name + aTag + runApproved + slingshotApproved + "</h2>";
	// 	var div = "<div class=\'run_component\'><div id=\'"+name+"\'></div></div><hr>";
	// 	html_export = html_export + h2 + h4 + div;

 //    });
 //    indexConfigObj.json_import = json_import;
 //    indexConfigObj.html_export = html_export;

 //    var akamaiPaths = grunt.config.get("akamai");

	// grunt.log.writeln("akamai.options.urls: ");
	// grunt.log.writeln(akamaiPaths["options"]["urls"]);

	// grunt.log.writeln("");
	// var existing_urls = akamaiPaths["options"]["urls"];

	// for(i=0;i < existing_urls.length - 1; i++){
	// 	sling_cache_files.push(existing_urls[i]);
	// }

	
	// grunt.log.writeln("");
	// grunt.log.writeln(sling_cache_files);
		
	// akamaiPaths.options.urls = sling_cache_files;
	// grunt.config.set("akamai", akamaiPaths);









	
	// var indexTemplate = grunt.template.process(grunt.file.read( "gruntTemplates/slingshotTemplate.ejs" ), {data: indexConfigObj});
	
	// grunt.log.writeln("rewriting slingshotTemplate.ejs...");

	// var indexFile = './generated/slingshot.html';
	
	// grunt.file.write( indexFile, indexTemplate );
	
	
	// var commonConfig = new Object();
	
	// commonConfig.baseURL = "http://tgtfiles.target.com/run/slingshot/public/vendor";
	
	// grunt.log.writeln(commonConfig.baseUrl);
	

	
	// var commonConfigJSTemplate = grunt.template.process(grunt.file.read( "gruntTemplates/commonTemplate.js" ), {data: commonConfig});
	
	// //grunt.log.writeln(grunt.file.read("gruntTemplates/commonTemplate.js"));
	
	// grunt.log.writeln("rewriting common.js...");

	// var commonConfigFile = 'public/common.js';
	
	// grunt.file.write( commonConfigFile, commonConfigJSTemplate );
	
	// grunt.log.writeln(commonConfigFile);
	

	
		
  });
};
