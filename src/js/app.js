angular.module('bookstoreproject', [
    'ngRoute'
])
.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
               template: '<book-list></book-list>'
            }).when('/cart',{
                template: '<cart-list></cart-list>'
            }).when('/order-greeting', {
                template: '<order-greeting></order-greeting>'
            })
            
 }
])