console.log("Main JS is loaded")

angular.module('personalWebsite', ['ui.router'])
  .config(Config)


  function Config($stateProvider, $urlRouterProvider) {
      // $urlRouterProvider.otherwise('/Login');
      $stateProvider

      // .state('Home', {
      //     url: '/home',
      //     templateUrl: './views/home.html'
      //     // controller: '',
      //     // authenticate: true
      // })
      .state('Profile', {
          url: '/profile',
          templateUrl: './views/profile.html'
          // controller: '',
          // authenticate: true
      })
        .state('Experience', {
          url: '/experience',
          templateUrl: './views/experience.html'
          // controller: '',
          // authenticate: true
      })
        .state('Technology', {
          url: '/technology',
          templateUrl: './views/technology.html'
          // controller: '',
          // authenticate: true
      })
        .state('Education', {
          url: '/education',
          templateUrl: './views/education.html'
          // controller: '',
          // authenticate: true
      })
     $urlRouterProvider.otherwise('/profile');
   }
