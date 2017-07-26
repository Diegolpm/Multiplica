var myapp = angular.module('Myapp', ['ngRoute']);

// myapp.config(['$routeProvider', function($routeProvider) {
// 	routeProvider
// 	.when("views/prima", {
// 		templateUrl: "prima.html",
// 		controller: "primaController"
// 	})
// 	.when("views/resumen", {
// 	    templateUrl: "resumen.html",
// 	    controller: "resumenController"
//     })
//     .otherwise({ 
//     	redirectTo: '/index' 
//     });
// }]);
            
myapp.controller('ConvenioController', function($scope){
   
    $scope.formconv = {};
    
    $scope.onSubmit = function(valid){
        
    }
    
});
// myapp.controller('ConvenioController','$scope', '$location', function($scope, $location){
	
//     $scope.formconv = {};
    
//     $scope.onSubmit = function(){
//         $location.path("resumen");
//     }
// });
