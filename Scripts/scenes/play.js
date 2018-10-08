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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        Play.prototype.Start = function () {
            this.Main();
        };
        Play.prototype.Update = function () {
            this._ocean.Update();
            this._player.Update();
            this._island.Update();
            for (var _i = 0, _a = this._clouds; _i < _a.length; _i++) {
                var cloud = _a[_i];
                cloud.Update();
            }
        };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Main = function () {
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            this._island = new objects.Island();
            this.addChild(this._island);
            // adds cloud to the scene
            for (var count = 0; count < this._numClouds; count++) {
                this.addChild(this._clouds[count]);
            }
            // adds player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map