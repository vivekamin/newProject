app.controller('MainController', ['$scope', 'forecast',function($scope,forecast){
    $scope.fullName="Vivek Amin";
    $scope.avatars=null;
    $scope.getItems=function(){
        forecast.then(function(data) {
            $scope.results=data;
      alert(data);
      });
    }
    
    $scope.selectedItem=function(name){
        $scope.viewData=name;
        //alert(name.name);
    }
    
}]);
