var myApp = angular.module('HappinessMeter',[]);
console.log('helllo from angular',angular)

myApp.controller('HappinessController', ['$scope', function($scope) {

 $scope.test2 = function(){
    alert('hello');
  };


  $scope.greeting = 'Hola!';

  $scope.questions = {
    '01':{
      'answered': false
    },
    '02':{},
    '03':{},
    '04':{}
  };

  $scope.answered = function(qId,resultId){
    //post results
    console.log('clicked answered')
    postResults(qId, resultId);
  };

  //get data dummy for now
  function postResults(qId, resultId){
    // post to data base and wait for result
    var dummyData = {
      'id' : '01',
      'positive': 23,
      'neutral': 12,
      'negative': 5
    };

    resultsReceived(dummyData);
  };

  function resultsReceived(result){
    $scope.questions[result.id] = result;
    $scope.questions[result.id].answered = true;
    var id = result.id;
    var total = result.positive + result.negative + result.neutral;
    var pos = (result.positive / total)* 100;
    var neutral = (result.neutral/total)*100;
    var neg = (result.negative/total)*100;
    createCircle('q'+id+'Positive',pos);
    createCircle('q'+id+'Neutral', neutral);
    createCircle('q'+id+'Negative', neg);
  };

  // click functions
  $scope.answerQuestion = function(a,b){
    console.log('clicked',a,b.target.className)
  }



  $scope.test = function(targetId,event){
    console.log('clicked test',event);

     Circles.create({
         id:         targetId,
         percentage: 87,
         radius:     80,
         width:      8,
         number:     87,
         text:       '%',
         colors:     ['#eee', '#72c02c'],
         duration:   2000
     });
  };




}]);


function createCircle(id, result){
  Circles.create({
       id:         id,
       percentage: result,
       radius:     80,
       width:      8,
       number:     result,
       text:       '%',
       colors:     ['#eee', '#72c02c'],
       duration:   2000
   })
}
