function orderCtrl($location){
    ctrl = this;
    $location.path('/order-greeting')
    ctrl.onClickClear() = function () {
    
    {
      sessionStorage.clear();
    }
    ctrl.$onInit = function () {
      console.log("inside order greeting page on init");
    }
    }
}

angular.module('bookstoreproject') .component("orderGreeting", {
    templateUrl: 'views/order-greeting.html',
    controller: orderCtrl,
    controllerAs: 'ctrl'
});