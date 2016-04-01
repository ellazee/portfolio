
angular.module('navbar', []).directive('navbar', function() {
	return {
	restrict: 'E',
	templateUrl: 'views/partials/navbar.html',
	}
});

angular.module('footer', []).directive('footer', function() {
	return {
	restrict: 'E',
	templateUrl: 'views/partials/footer.html',
	}
});

