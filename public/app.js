var app = angular.module('utahClub', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('Login', {
      templateUrl: 'components/login/login.html',
      controller: 'loginCtrl',
      url: '/login'
    })
    .state('Home', {
      templateUrl: 'components/home/home.html',
      controller: 'homeCtrl',
      url: '/home'
    })
    .state('Profile', {
      templateUrl: 'components/profile/profile.html',
      controller: 'profileCtrl',
      url: '/profile'
    })
    .state('Report', {
      templateUrl: 'components/report/report.html',
      controller: 'reportCtrl',
      url: '/reports'
    })
    .state('Admin', {
      templateUrl: 'components/admin/admin.html',
      controller: 'reportCtrl',
      url: '/admin'
    });

    $urlRouterProvider.otherwise('/login');

});
