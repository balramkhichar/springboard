'use strict';

/**
 * @ngdoc function
 * @name springboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the springboardApp
 */
angular.module('springboardApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('//hackerearth.0x10.info/api/learning-paths?type=json&query=list_paths')
    .then(function(response) {
      $scope.apiData = response.data;
    });

    $scope.tagFilter = function(path){
    	if($scope.searchText){
    		return path.tags.split(', ').indexOf($scope.searchText) >= 0 ;
    	}
    	return true;
    }
  });
