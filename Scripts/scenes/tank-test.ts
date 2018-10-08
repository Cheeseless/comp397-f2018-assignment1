module scenes {
    export class TankTest extends objects.Scene {
        private tank: objects.Rectangle;
        
        constructor() {
            super();
            this.Start();
        }
        
        public Start(): void {
            this.Main();
        }
        public Update(): void {
            this.tank.Update();
        }
        public Destroy(): void {
            this.removeAllChildren();
        }
        public Reset(): void {
        }
        public Main(): void {
            this.tank = new objects.Rectangle();
            this.addChild(this.tank);
        }
    }
}