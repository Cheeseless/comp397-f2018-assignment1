module scenes {
    export class Play extends objects.Scene {
        // private instance variable
        private _player: objects.Player;
        private _ocean: objects.Ocean;
        private _island: objects.Island;
        private _clouds: objects.Cloud[];
        private _numClouds: number;
        constructor() {
            super();
            this.Start();
        }
        public Start(): void {
            this.Main();
        }
        public Update(): void {
            this._ocean.Update();
            this._player.Update();
            this._island.Update();
            for (const cloud of this._clouds) {
                cloud.Update();
            }
        }
        public Destroy(): void {
            this.removeAllChildren();
        }
        public Reset(): void {
        }
        public Main(): void {
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            this._island = new objects.Island();
            this.addChild(this._island);
            // adds cloud to the scene
            for (let count = 0; count < this._numClouds; count++) {
                this.addChild(this._clouds[count]);
            }
            // adds player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
        }
    }
}