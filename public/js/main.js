'use strict'

let app = angular.module('AppChamados', ['ui.router'])

app.config(myConfig)

function myConfig($stateProvider, $urlRouterProvider) {
	//cria rota
	$stateProvider

	.state('home', {
		url: '/home',
		views: {
			//rota pagina home
			'': {
				templateUrl: './views/home.html',
				controller: 'HomeController',
				controllerAs: 'vm'
			},
			//rota pagina menu
			'menu': {
				templateUrl: './views/menu.html'	
			}
		}
	})
	//caso não tenha a rota é direcionado para rota a baixo
	$urlRouterProvider.otherwise('/home')

}