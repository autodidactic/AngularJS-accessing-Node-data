var myApp = angular.module('myApp', []);

myApp.config(['$httpProvider', function ($httpProvider, res) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

}]);

function UserListCtrl($scope, $http, $templateCache) {
    var method = 'POST';
    var inserturl = 'http://localhost:8080/insertangularmongouser'; // URL where the Node.js server is running
    $scope.codeStatus = "";
    $scope.save = function () {
        // Preparing the Json Data from the Angular Model to send in the Server. 
        var formData = {
            'username': this.username,
                'password': this.password,
                'email': this.email
        };

        this.username = '';
        this.password = '';
        this.email = '';

        var jdata = 'mydata=' + JSON.stringify(formData); // The data is to be string.

        $http({ // Accessing the Angular $http Service to send data via REST Communication to Node Server.
            method: method,
            url: inserturl,
            data: jdata,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            cache: $templateCache
        }).
        success(function (response) {
            console.log("success"); // Getting Success Response in Callback
            $scope.codeStatus = response.data;
            console.log($scope.codeStatus);

        }).
        error(function (response) {
            console.log("error"); // Getting Error Response in Callback
            $scope.codeStatus = response || "Request failed";
            console.log($scope.codeStatus);
        });
        $scope.list(); // Calling the list function in Angular Controller to show all current data in HTML
        return false;
    };



    var url1 = "http://localhost:8080/getangularusers";
    $scope.list = function (res) {
        var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20flickr.photos.search%20where%20has_geo%3D%22true%22%20and%20text%3D%22london%2CUK%22%20and%20api_key%3D%2292bd0de55a63046155c09f1a06876875%22%3B&format=json&diagnostics=true&callback=';
        $http.get(url1).success(function (data) {

            //$scope.users = data.query.results.photo[0];
            $scope.users = data;

        });
    };

    $scope.list();

}
