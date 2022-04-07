function dashboardCtrl($http) {
  ctrl = this;
  ctrl.$onInit = function () {
    console.log("inside on init");
    getAllBookDetails();
  };
  ctrl.onClickAddToCart = function (book) {
    let cartList = [];
    cartList = JSON.parse(localStorage.getItem("cartList") || "{}");
    if (cartList != null && cartList.length > 0) {
      cartList.push(book);
    } else {
      cartList = [book]; //to strore first book
    }

    localStorage.setItem("cartList", JSON.stringify(cartList));
  };

  function getAllBookDetails() {
    console.log("inside get all book");
    $http({
      method: "GET",
      url: "http://localhost:8080/book-store/book",
    }).then(
      function successCallback(response) {
        console.log("response from backend---------->", response);
        ctrl.books = response.data;
      },
      function errorCallback(response) {
        console.log(response.statusText); //http status code response
      }
    );
  }
}

angular.module("bookstoreproject").component("bookList", {
  templateUrl: "views/book-view.html",
  controller: dashboardCtrl,
  controllerAs: "ctrl"
});
