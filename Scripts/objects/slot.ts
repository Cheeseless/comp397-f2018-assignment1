module objects {
    export class Slot extends GameObject {

        public value: string; //the type of the slot result

        constructor(type: string) {
            super(type);
            this.value = type;
            this.Start();
        }
        public Reset(): void {
            throw new Error("Method not implemented.");
        }
        public Start(): void {

        }
        public Update(): void {
            throw new Error("Method not implemented.");
        }
        public Destroy(): void {
        }

        public ReplaceSlot(type:string) {
            
            this.image = <HTMLImageElement>managers.Game.assetManager.getResult(type);
        }


    }
}