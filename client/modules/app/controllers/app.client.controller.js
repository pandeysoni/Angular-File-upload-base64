'use strict';


angular.module('app').controller('AppController', ['$scope', 'appService', 'growl', 'Upload',
	function($scope, appService, growl,  Upload) {
		// This provides Authentication context.
		
		$scope.upload = function(file) {
			 Upload.base64DataUrl(file).then(function(urls){
			 	var object = {};
			 	object['image'] = urls;
			 	appService.save({url: 'image'}, object).$promise.then(function(data) { 
			        growl.addSuccessMessage('image uploaded successfully');
			        $scope.image = '';
			    }).catch(function(error){
			        growl.addErrorMessage('oops something went wrong');
			    });
			 });
		}
		$scope.get = function(file) {
		 	appService.getArray({url: 'image'}).$promise.then(function(data) { 
		        $scope.imageList = data;
		    }).catch(function(error){
		        growl.addErrorMessage('oops something went wrong');
		    });
		}
		$scope.get();
	}
]);