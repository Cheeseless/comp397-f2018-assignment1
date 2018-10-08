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
var objects;
(function (objects) {
    var Rectangle = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle() {
            var _this = _super.call(this, "tank") || this;
            _this.speed = 4;
            _this.rotationSpeed = 2;
            _this.Start();
            return _this;
        }
        Rectangle.prototype.Reset = function () {
            throw new Error("Method not implemented.");
        };
        Rectangle.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.x = 150;
            this.y = 150;
            this.scaleX = 3;
            this.scaleY = 3;
        };
        Rectangle.prototype.Update = function () {
            if (managers.Input.isKeydown("ArrowUp")) {
                this.x += this.speed * Math.sin(this.rotation * Math.PI / 180);
                this.y -= this.speed * Math.cos(this.rotation * Math.PI / 180);
            }
            if (managers.Input.isKeydown("ArrowDown")) {
                this.x -= this.speed * Math.sin(this.rotation * Math.PI / 180);
                this.y += this.speed * Math.cos(this.rotation * Math.PI / 180);
            }
            if (managers.Input.isKeydown("ArrowRight")) {
                this.rotation += this.rotationSpeed;
            }
            if (managers.Input.isKeydown("ArrowLeft")) {
                this.rotation -= this.rotationSpeed;
            }
        };
        Rectangle.prototype.Destroy = function () {
            throw new Error("Method not implemented.");
        };
        Rectangle.prototype.Move = function () {
        };
        return Rectangle;
    }(objects.GameObject));
    objects.Rectangle = Rectangle;
})(objects || (objects = {}));
//# sourceMappingURL=rectangle.js.map