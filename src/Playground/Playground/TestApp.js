var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    var testApp;
    (function (testApp) {
        var testAppController = (function () {
            function testAppController() {
                var self = this;
                self.welcomeMessage = "Hi! Welcome to the test page for Angular2!";
                self.items = [
                    "item 1",
                    "item 2",
                    "item 3",
                    "item 4"
                ];
            }
            testAppController.prototype.AddItem = function () {
                var self = this;
                var itemNumber = Math.round(Math.random() * 10);
                self.items.push("item " + itemNumber);
            };
            testAppController = __decorate([
                angular2_1.Component({
                    selector: 'testApp'
                }),
                angular2_1.View({
                    templateUrl: "/testApp.html",
                    directives: [angular2_1.NgFor]
                }), 
                __metadata('design:paramtypes', [])
            ], testAppController);
            return testAppController;
        })();
        testApp.testAppController = testAppController;
        angular2_1.bootstrap(testAppController);
    })(testApp || (testApp = {}));
});
//# sourceMappingURL=TestApp.js.map