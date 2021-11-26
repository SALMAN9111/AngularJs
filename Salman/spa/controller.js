angular.module('app')
    .controller('HomeCtrl',function($scope){
        $scope.data = "Welcome from  Home controller"
    })
    .controller('ContactCtrl',function($scope){
        $scope.data = "Welcome from  Contact controller"
    })
    .controller('CareerCtrl',function($scope){
        $scope.data = "Welcome from  Career controller"
    });
    