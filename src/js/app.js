angular.module('bookstoreproject', [
    'ngRoute'
])
.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'dashboardCtrl',
                templateUrl: 'views/dashboard.html'
            })
//             .when('/booklist/:bookname', {
//                 templateUrl: 'booklist/booklist.html',
//                 controller: 'booklistController'
//             }).otherwise({
//                 redirectTo: "/"
//             });
 }
])