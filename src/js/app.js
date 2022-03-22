angular.module('bookstoreproject', [
    'ngRoute'
])
.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/booklist/:bookname', {
                templateUrl: 'booklist/booklist.html',
                controller: 'booklistController'
            }).otherwise({
                redirectTo: "/"
            });
}
])