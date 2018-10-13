var scenes;
(function (scenes) {
    class Over extends objects.Scene {
        constructor() {
            super();
            this.Start();
        }
        ;
        Start() {
            this._background = new objects.Background();
            this._background.SetMove(true);
            this.gameOverLabel = new objects.Label("Game Over", "30px", "Consolas", "#FFFF00", config.SCREEN_WIDTH / 2, config.SCREEN_HEIGHT / 2, true);
            this.scoreLabel = new objects.Label("Score: " + managers.Game.Score.toString(), "30px", "Consolas", "#FFFF00", config.SCREEN_WIDTH / 2, config.SCREEN_HEIGHT / 2 + 30, true);
            this._startButton = new objects.Button("restartButton", config.SCREEN_WIDTH / 2, (config.SCREEN_HEIGHT / 2) + 120, true);
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
            this.addChild(this.gameOverLabel);
            this.addChild(this.scoreLabel);
            console.log(this.getChildAt(1));
            this.addChild(this._startButton);
            this._startButton.on("click", () => {
                managers.Game.currentState = config.Scene.START;
            });
        }
        ;
    }
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map