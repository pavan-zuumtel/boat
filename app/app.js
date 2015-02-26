var app = angular.module('boat', []);

app.controller('boatController', ['$scope', 'postService', 
               function($scope, postService) {
  $scope.speed = 100;

  $scope.$watch('speed', function(newVal) {
    console.log('Hey: ' +newVal);
    postService.post(newVal);
  });
}]);
