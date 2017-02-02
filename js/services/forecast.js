app.factory('forecast', ['$http', function($http) { 
  return $http.get('http://localhost:3000/people').then( 
            function(response) { 
                var data=response.data;
                console.log(data);
                return data;
            }
            )
}]);
