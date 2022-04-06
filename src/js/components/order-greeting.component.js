function orderCtrl($location){
    ctrl = this;
    ctrl.onClickClear() = function () {
      $location.path('/order-greeting')
    
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