var objects;
(function (objects) {
    class Slot extends objects.GameObject {
        constructor(type) {
            super(type);
            this.value = type;
            this.Start();
        }
        Reset() {
            throw new Error("Method not implemented.");
        }
        Start() {
        }
        Update() {
            throw new Error("Method not implemented.");
        }
        Destroy() {
        }
        ReplaceSlot(type) {
            this.image = managers.Game.assetManager.getResult(type);
        }
    }
    objects.Slot = Slot;
})(objects || (objects = {}));
//# sourceMappingURL=slot.js.map