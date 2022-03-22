// angular.module('bookstoreproject')
// .controller('HomeCtrl',['$scope',
// function($scope){
//     $scope.name= 'Priya'
// }
// ])

angular.module('bookstoreproject').controller("HomeCtrl", function($scope, $http) {
        // $scope.name = 'Priyanka';
        $scope.getAllBookDetails=function() {
            $http({
                method : 'GET',
                url : 'http://localhost:8080/book-store/book'
            }).then(function successCallback(response) {
                $scope.customers = response;
            }, function errorCallback(response) {
                console.log(response.statusText);//http status code response
            });
        }  
});
// HomeCtrl.$inject = ['$scope']

