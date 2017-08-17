
var app = angular.module("ItemsApp", ['ngRoute']);



app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/',
    {
        templateUrl: 'app/HtmlTemplateFiles/ListOfItems.html'

    }).when('/add',
    {
        templateUrl: 'app/HtmlTemplateFiles/AddNewItem.html'

    }).when('/delete',
    {
        templateUrl: 'app/HtmlTemplateFiles/DeleteAnItem.html'

    }).when('/edit',
    {
        templateUrl: 'app/HtmlTemplateFiles/EditAnItem.html'

    }).
    otherwise(
    {
        redirectTo: '/'
    });

 
}]);






