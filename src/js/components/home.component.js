function homeCtrl($location){
    function redirectToCart(){
        console.log('inside cart');
        $location.path('/cart')
        
    }

}


angular.module('bookstoreproject') .component("home", {
    templateUrl: 'views/index.html',
    controller: homeCtrl,
    controllerAs: 'ctrl'
});