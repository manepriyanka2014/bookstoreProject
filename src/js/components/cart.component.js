function cartCtrl($http) {
    ctrl = this;
    ctrl.cartList = [];
    ctrl.customerDetail = {};
    ctrl.$onInit = function () {
        console.log("inside on init");
        ctrl.cartList = JSON.parse(localStorage.getItem('cartList') || '{}');
        ctrl.customerDetails.cartBook = ctrl.cartList;
    }

    ctrl.addressTypeSave = function (customerDetails) {
        console.log("inside addressTypeSave");
        $http({
            method: 'POST',
            url: 'http://localhost:8080/book-store/cart',
            data: customerDetails
        }).then(function successCallback(response) {

            console.log("response from backend---------->", response);

        }, function errorCallback(response) {
            console.log(response.statusText);//http status code response
        });
    }

}

function removeOneBook(bookId) {
    console.log("inside removeOneBook");
    $http({
        method: 'DELETE',
        url: 'http://localhost:8080/book-store/cart/' + bookId
    }).then(function successCallback(response) {

        if (ctrl.cartList != null && ctrl.cartList.length > 0) {
            // iterate over cartlist
            ctrl.cartList.forEach((book, index) => {
                // remove the entry from carlist which is deleted from table
                if (book.bookId === bookId) {
                    ctrl.cartList.splice(index, 1);
                }
            });
            // update the localstorage which dose not have deleted book entry
            localStorage.setItem('cartList', JSON.stringify(this.cartList));
        }

    }, function errorCallback(response) {
        console.log(response.statusText);//http status code response
    });

}


angular.module('bookstoreproject') .component("cartList"
, {
        templateUrl: 'views/cart.html',
        controller: cartCtrl,
        controllerAs: 'ctrl'
    });