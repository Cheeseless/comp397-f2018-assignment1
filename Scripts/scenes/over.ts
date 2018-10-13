module scenes {
    export class Over extends objects.Scene{

        private gameOverLabel:objects.Label;
        private scoreLabel: objects.Label;
        private _background:objects.Background;
        private _startButton:objects.Button;;

        constructor() {
            super();

            this.Start();
        }

        public Start():void {
            this._background = new objects.Background();
            this._background.SetMove(true);
            this.gameOverLabel = new objects.Label("Game Over", "30px", "Consolas", "#FFFF00", config.SCREEN_WIDTH/2, config.SCREEN_HEIGHT/2, true);
            this.scoreLabel = new objects.Label("Score: " + managers.Game.Score.toString(), "30px", "Consolas", "#FFFF00", config.SCREEN_WIDTH/2, config.SCREEN_HEIGHT/2+30, true);
            this._startButton = new objects.Button("restartButton", config.SCREEN_WIDTH/2, (config.SCREEN_HEIGHT/2) + 120, true);
            this.Main();
        };

        public Update():void {
            this._background.Update();
        };

        public Destroy():void {
            this.removeAllChildren();
        };

        public Reset():void {

        };

        public Main():void {
            this.addChild(this._background);
    
            
            this.addChild(this.gameOverLabel);
            this.addChild(this.scoreLabel);
            console.log(this.getChildAt(1));
    
            this.addChild(this._startButton);

            this._startButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.START;
            });
        };
    }
}