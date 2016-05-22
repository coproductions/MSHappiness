var myApp = angular.module('HappinessMeter',[]);
console.log('helllo from angular',angular)

myApp.controller('HappinessController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';

  // click functions
  $scope.answerQuestion = function(a,b){
    console.log('clicked',a,b.target.className)
  }

  $scope.test = function(targetId,event){
    console.log('clicked test',event)
       Circles.create({
           id:         targetId,
           percentage: 87,
           radius:     80,
           width:      8,
           number:     87,
           text:       '%',
           colors:     ['#eee', '#72c02c'],
           duration:   2000
       })
  }




}]);
