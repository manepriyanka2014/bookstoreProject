// (
//     function(){
//         angular.module('bookstoreproject')
//         .controller('dashboardCtrl', dashboardCtrl)
//         dashboardCtrl.$inject = ["$scope"]

//         function dashboardCtrl($scope){
//                            console.log("inside get all book");
//                 $http({
//                     method : 'GET',
//                     url : 'http://localhost:8080/book-store/book'
//                 }).then(function successCallback(response) {
    
//                     console.log("response from backend---------->", response);
//                     $scope.customers = response.data;
//                 }, function errorCallback(response) {
//                     console.log(response.statusText);//http status code response
//                 });
//             }  
    
//     }
// )();
angular.module('bookstoreproject').controller("dashboardCtrl", function($scope, $http) {
   var ctrl=this;
   ctrl.$onInit= function(){
       console.log("inside OnInit");
       getAllBookDetails();
   }
   
    $scope.getAllBookDetails=function() {
        console.log("inside get all book");
        $http({
            method : 'GET',
            url : 'http://localhost:8080/book-store/book'
        }).then(function successCallback(response) {

            console.log("response from backend---------->", response);
            $scope.books = response.data;
        }, function errorCallback(response) {
            console.log(response.statusText);//http status code response
        });
    }  
});