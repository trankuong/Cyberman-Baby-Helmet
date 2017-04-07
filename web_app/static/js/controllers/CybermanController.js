app.controller('CybermanController', ['$scope', 'SharedService', '$http', function($scope, SharedService, $http) {
	
	$scope.info = SharedService.sharedInfo;
	
	$scope.logout = function(){
		console.log("logout clicked");
		$http.post('api/v1/logout').then(
			function(success){
				window.location = '/';
			}
		);
	};

}]);
