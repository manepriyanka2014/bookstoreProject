angular.module('bookstoreproject', [
    'ngRoute'
])
.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
               template: '<book-list></book-list>'
            })


            
//             .when('/booklist/:bookname', {
//                 templateUrl: 'booklist/booklist.html',
//                 controller: 'booklistController'
//             }).otherwise({
//                 redirectTo: "/"
//             });
 }
])