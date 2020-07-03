var app = angular.module("Application", []);
app.controller("MainController", function($scope, $http) {
const consumerKey = "C5FBEDC82C96DECFA5C595C608F65576";
const consumerSecret = "4D872FB5AF6FD6DAEE33070A49BEC496";
const OAuthToken = "39D2C7E3D4E68AC04E0E8244ED58F170";
const OAuthSecret = "4F34EE68371F4ED7EB77B0DF51D84589";

//public static void main(String... args) {
$scope.bool = false;

  createSalesOrders();
//}
function createSalesOrders() {
  refreshSalesList();
}

function refreshSalesList() {
  $http({
    method: 'GET',
    url: 'https://api.tmsandbox.co.nz/v1/MyTradeMe/SoldItems/Last45Days.JSON',
    headers: {
          'Authorization':
              'OAuth oauth_consumer_key=C5FBEDC82C96DECFA5C595C608F65576,' +
              'oauth_signature_method=PLAINTEXT,' +
              'oauth_token=39D2C7E3D4E68AC04E0E8244ED58F170,' +
              'oauth_signature=4D872FB5AF6FD6DAEE33070A49BEC496&4F34EE68371F4ED7EB77B0DF51D84589'
      }
  }).then(function success(response) {
    $scope.tmSalesList = response.data.List;
    debug();
  }), function error(response) {
    console.log('error');
  };
}

function debug() {
  console.log('Debug Line');
}

});
