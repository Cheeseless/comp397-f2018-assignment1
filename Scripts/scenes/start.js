var scenes;
(function (scenes) {
    class Start extends objects.Scene {
        constructor() {
            super();
            this.Start();
        }
        ;
        Start() {
            this._background = new objects.Background();
            this._background.SetMove(true);
            this._welcomeLabel = new objects.Label("Slot Machine", "30px", "Consolas", "#FFFF00", config.SCREEN_WIDTH / 2, config.SCREEN_HEIGHT / 2, true);
            this._startButton = new objects.Button("startButton", config.SCREEN_WIDTH / 2, (config.SCREEN_HEIGHT / 2) + 120, true);
            this.Main();
        }
        ;
        Update() {
            this._background.Update();
        }
        ;
        Destroy() {
            this.removeAllChildren();
        }
        ;
        Reset() {
        }
        ;
        Main() {
            this.addChild(this._background);
            this.addChild(this._welcomeLabel);
            console.log(this.getChildAt(1));
            this.addChild(this._startButton);
            this._startButton.on("click", () => {
                managers.Game.currentState = config.Scene.PLAY;
            });
        }
        ;
    }
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map