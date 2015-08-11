///<reference path=""~/../scripts/typings/angularjs/angular.d.ts"" />
///<reference path=""~/../scripts/typings/angularjs/angular-route.d.ts"" />
var TestApp;
(function (TestApp) {
    var Config = (function () {
        function Config($routeProvider) {
            $routeProvider.when("/", {
                templateUrl: "/",
                controller: "testController",
                controllerAs: "testController"
            });
        }
        return Config;
    })();
    TestApp.Config = Config;
    Config.$inject = ['$routeProvider'];
    angular.module("testApp", ['ngRoute']).config(Config);
})(TestApp || (TestApp = {}));
//# sourceMappingURL=app.js.map