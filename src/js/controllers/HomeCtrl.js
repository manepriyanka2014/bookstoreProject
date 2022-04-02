// // angular.module('bookstoreproject')
// // .controller('HomeCtrl',['$scope',
// // function($scope){
// //     $scope.name= 'Priya'
// // }
// // ])

// angular.module('bookstoreproject').controller("HomeCtrl", ['$scope','$http',function($scope, $http) {
//         // $scope.name = 'Priyanka';

//         $scope.getAllBookDetails=function() {
//             console.log("inside get all book");
//             $http({
//                 method : 'GET',
//                 url : 'http://localhost:8080/book-store/book'
//             }).then(function successCallback(response) {

//                 console.log("response from backend---------->", response);
//                 $scope.customer = response.data;
//             }, function errorCallback(response) {
//                 console.log(response.statusText);//http status code response
//             });
//         }  
// }]);
// HomeCtrl.$inject = ['$scope']

