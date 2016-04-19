var EllaApp = angular.module("EllaApp", ["ui.router", "navbar", "footer"])

.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('main', {
			url: '/',
			templateUrl: 'views/main.html',
			controller: 'homeCtrl'
		})

//route for show page
		.state(
			"about",
			{
				url: "/about",
				templateUrl: "views/about.html"
			})
		.state(
			"contact",
			{
				url: "/contact",
				templateUrl: "views/contact.html"
			})
		.state(
			"projects",
			{
				url: "/projects",
				templateUrl: "views/projects.html"
			})
	}
]);
