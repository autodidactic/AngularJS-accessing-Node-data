var myApp = angular.module('myApp', []);

myApp.config(['$httpProvider', function ($httpProvider, res) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

}]);

function UserListCtrl($scope, $http) {

    var url1 = "https://new_html_web_and_beyond-c9-shawnp01.c9.io/userlist";
    $scope.list = function (res) {
        var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20flickr.photos.search%20where%20has_geo%3D%22true%22%20and%20text%3D%22london%2CUK%22%20and%20api_key%3D%2292bd0de55a63046155c09f1a06876875%22%3B&format=json&diagnostics=true&callback=';
        $http.get(url1).success(function (data) {

            //$scope.users = data.query.results.photo[0];
            $scope.users = (data);

        });
    };

    $scope.list();

}
