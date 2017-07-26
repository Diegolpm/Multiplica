myapp.factory('conveniodata', ['$http',function ($http) {
	
	var urlBase = 'http://localhost:8080/multiplica';
	var conveniodata = {};

	conveniodata.onSubmit = function(formconv2) {
		return $http.post(urlBase + '/prima.html', formconv2 )
	}

	return conveniodata;
}])