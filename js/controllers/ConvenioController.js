myapp.controller('ConvenioController', function($scope, $location){
	
    $scope.formconv = {};
    
    $scope.onSubmit = function(){
        $location.path("resumen");
    }
});