var app = angular.module("Application", []);
app.controller("MainController", function($scope, $http) {
const consumerKey = "C5FBEDC82C96DECFA5C595C608F65576";
const consumerSecret = "4D872FB5AF6FD6DAEE33070A49BEC496";
const OAuthToken = "39D2C7E3D4E68AC04E0E8244ED58F170";
const OAuthSecret = "4F34EE68371F4ED7EB77B0DF51D84589";

$http.defaults.headers.common.Authorization = 'OAuth oauth_consumer_key=4D872FB5AF6FD6DAEE33070A49BEC496, oauth_token=39D2C7E3D4E68AC04E0E8244ED58F170, oauth_signature_method=PLAINTEXT, oauth_signature=160FCF77971DC92A38596288DB071A8CA5&4F34EE68371F4ED7EB77B0DF51D84589';

$http.get('https://api.tmsandbox.co.nz/v1/MyTradeMe/Watchlist/All.json').
  then(function(response) {
    $scope.greeting = response.data;
    console.log($scope.greeting);
  });


});
