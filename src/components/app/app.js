"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    function App(appController, appView) {
        this.appController = appController;
        this.appView = appView;
    }
    App.prototype.start = function () {
        var _this = this;
        var source = document.querySelector('.sources');
        source === null || source === void 0 ? void 0 : source.addEventListener('click', function (e) { return _this.appController.getNews(e, function (data) { return _this.appView.drawNews(data); }); });
        this.appController.getSources(function (data) { return _this.appView.drawSources(data); });
    };
    return App;
}());
exports["default"] = App;
