angular.module('login.directives',[])

	.directive('browseFile',['$rootScope',function($rootScope){
	    return {
		scope:{

		},
		replace:true,
		restrict:'AE',
		link:function(scope,elem,attrs){

		    scope.browseFile=function(){
		        document.getElementById('browseBtn').click();
		    }

		    angular.element(document.getElementById('browseBtn')).on('change',function(e){

		       var file=e.target.files[0];

		       angular.element(document.getElementById('browseBtn')).val('');

		       var fileReader=new FileReader();

		       fileReader.onload=function(event){
		           $rootScope.$broadcast('event:file:selected',{image:event.target.result});
		       }

		       fileReader.readAsDataURL(file);
		    });

		},
		templateUrl:'templates/browse-file.html'
	    }
	}])

	.directive('browseWork',['$rootScope',function($rootScope){
	    return {
		scope:{

		},
		replace:true,
		restrict:'AE',
		link:function(scope,elem,attrs){

		    scope.browseFile=function(){
		        document.getElementById('browseBtn1').click();
		    }

		    angular.element(document.getElementById('browseBtn1')).on('change',function(e){

		       var file=e.target.files[0];

		       angular.element(document.getElementById('browseBtn1')).val('');

		       var fileReader=new FileReader();

		       fileReader.onload=function(event){
		           $rootScope.$broadcast('event:file:selected',{trabajo:event.target.result});
		       }

		       fileReader.readAsDataURL(file);
		    });

		},
		templateUrl:'templates/browse-work.html'
	    }
	}]);
