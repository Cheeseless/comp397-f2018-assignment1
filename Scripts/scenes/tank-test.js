var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var TankTest = /** @class */ (function (_super) {
        __extends(TankTest, _super);
        function TankTest() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        TankTest.prototype.Start = function () {
            this.Main();
        };
        TankTest.prototype.Update = function () {
            this.tank.Update();
        };
        TankTest.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        TankTest.prototype.Reset = function () {
        };
        TankTest.prototype.Main = function () {
            this.tank = new objects.Rectangle();
            this.addChild(this.tank);
        };
        return TankTest;
    }(objects.Scene));
    scenes.TankTest = TankTest;
})(scenes || (scenes = {}));
//# sourceMappingURL=tank-test.js.map