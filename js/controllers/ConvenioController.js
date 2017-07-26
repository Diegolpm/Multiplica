myapp.controller('ConvenioController',  function($scope, conveniodata){
	$scope.convenios;
    
    
    $scope.onSubmit = function() {
    	var formconv2 = {
    		valortotal: $scope.vte + $scope.vif + $scope.vc +$scope.vme +$scope.vm + $scope.ve +$scope.lcge,
    		valortotal2: $scope.vte2 + $scope.vif2 + $scope.vc2 +$scope.vme2 +$scope.vm2 + $scope.ve2 +$scope.lcge2 

    	};
        conveniodata.onSubmit(formconv2)
	        .then(function () {
	        	// console.log(valortotal);
	        	$scope.convenios.push(formconv2);
	        },function error(response){
	        	console.log(error.message);
	        });
    };
});