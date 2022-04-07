function homeCtrl($location){
    ctrl = this;
    ctrl.$onInit =function(){
        console.log("inside home init");
    }
    ctrl.redirectToCart = function (){
        console.log('inside cart');
        $location.path('/cart')
        
    }


}

angular.module('bookstoreproject') .component("home", {
    templateUrl: 'views/dashboard.html',
    controller: homeCtrl,
    controllerAs: 'ctrl'
});