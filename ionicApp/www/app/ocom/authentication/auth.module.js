angular
    .module('app.ocom.auth', ['ngStorage', 'angular-jwt'])
    .config(jwtConfig)
    .config(routeConfig)
    .run(run)
    .factory('authService', authService)
    .controller('loginController', loginController);


function jwtConfig($httpProvider, $localStorageProvider, jwtOptionsProvider) {

    jwtOptionsProvider.config({
        tokenGetter: function () {
            return $localStorageProvider.get('token');
        },
        loginPath: '/login',
        unauthenticatedRedirectPath: '/'
    });

    $httpProvider.interceptors.push('jwtInterceptor');
}

function routeConfig($stateProvider) {
    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "app/ocom/authentication/login.html",
            controller: loginController
        })

}

function run($state, $rootScope, $localStorage, $location, authManager, authService) {
    // // Use the authManager from angular-jwt to check for
    // // the user's authentication state when the page is
    // // refreshed and maintain authentication
    authManager.checkAuthOnRefresh();
    //
    // // Listen for 401 unauthorized requests and redirect
    // // the user to the login page
    // // Not working
    authManager.redirectWhenUnauthenticated();
    //
    $rootScope.$state = $state;
    //
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if (!$localStorage.isAuthenticated) {
            $location.path('/login');
        }
    });
    //
    $rootScope.$on('tokenHasExpired', function () {
        authManager.unauthenticate();
        authService.unauthenticate();
    });
}

function authService($state, $filter, $http, $window, $resource, $localStorage,
                     $sessionStorage, $location, jwtHelper) {

    return {
        obtainToken: function (username, password) {
            return $http.post('/api-token-auth/', {username: username, password: password})
                .then(function (result) {
                    if (result.status == 404) {
                        return {success: false}
                    } else {
                        return {success: true, token: result.data.token, user: result.data.user};
                    }
                });
        },
        authenticate: function (token, user) {
            $localStorage.isAuthenticated = true;
            $localStorage.token = token;
            $localStorage.user = user;
            $location.path('/');
        },
        unauthenticate: function () {
            $localStorage.$reset({
                isAuthenticated: false,
                user: null,
                token: null
            });
            $window.location.href = '/';
        }

    };
}

function loginController($scope, $state, $window, $localStorage,
                         $sessionStorage, authManager, authService) {

    $scope.loginUser = function (form) {
        var username = form.username;
        var password = form.password;

        authService.obtainToken(username, password)
            .then(function (result) {
                if (result.success) {
                    authManager.authenticate();
                    authService.authenticate(result.token, result.user);
                }
            });
    }
}


