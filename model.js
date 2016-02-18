var app = angular.module('playground', []);

app.controller('BindController', function($scope){

  $scope.mirror= "Bing Bong";
  $scope.currentField = 'addContractor';
  $scope.current = 'Add a Contractor'

  $scope.name = ''
  $scope.rate = 100;
  $scope.contractors = [];


  $scope.showField = function(thingy){
    return $scope.currentField === thingy;
  };

  $scope.changeCurrent = function(current){
    $scope.currentField = current;
  };

  $scope.addContractor = function(){
    var obj = {
      name: $scope.name,
      rate: $scope.rate
    }
    $scope.contractors.push(obj);
    $scope.currentField = 'addContractor';
    $scope.name = null;
    $scope.current = $scope.contractors.length >= 3 ? 'Really?' : 'Add Another Contractor'
  }

})
