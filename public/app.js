var app = angular.module('utahClub', ['ui.router', 'angularMoment']);

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
      url: '/home',
      resolve: {
        user: function(userService, $state) {
          return userService.getMe().then(function(result){
            if(result._id){
              return result;
            }else{
              $state.go("Login");
            }
          });

        }
      }
    })
    .state('Profile', {
      templateUrl: 'components/profile/profile.html',
      controller: 'profileCtrl',
      url: '/profile/:id',
      resolve: {
        user: function(userService, $state, $stateParams) {
          return userService.findUser($stateParams.id);

        }
      }
    })
    .state('Report', {
      templateUrl: 'components/report/report.html',
      controller: 'reportCtrl',
      url: '/reports',
      resolve: {
        user: function(userService, $state) {
          return userService.getMe().then(function(result){
            if(result._id){
              return result;
            }else{
              $state.go("Login");
            }
          });

        }
      }
    });

    $urlRouterProvider.otherwise('/login');

});
