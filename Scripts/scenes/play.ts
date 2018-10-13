/*
*   Pedro Bento 300843658
*   Assignment 1   Slot Machine
*
*
*
*
*
*/

module scenes {
    export class Play extends objects.Scene {

        playerMoney = 1000;
        lastPayout = 0;
        jackpot = 5000;
        wager = 0;
        winRatio = 0;
        shrooms = 0;
        slimes = 0;
        megamans = 0;
        pikachus = 0;
        chickens = 0;
        triforces = 0;
        sevens = 0;
        blanks = 0;

        slotMachine: objects.SlotMachine;

        slots: objects.Slot[] = [];

        moneyText: objects.Label;
        payoutText: objects.Label;
        betText: objects.Label;
        jackpotText: objects.Label;

        spinButton: objects.Button;
        resetButton: objects.Button;
        quitButton: objects.Button;
        zeroBet: objects.Button;
        oneBet: objects.Button;
        fiveBet: objects.Button;
        tenBet: objects.Button;

        constructor() {
            super();
            this.Start();
        }

        public Start(): void {
            this.Reset();
            this.Main();
        };

        public Update(): void {
        };

        public Destroy(): void {
            this.removeAllChildren();
        };

        public Reset(): void {
            this.removeAllChildren();
        };

        public Main(): void {
            this.slotMachine = new objects.SlotMachine();
            this.addChild(this.slotMachine);
            this.slots[0] = new objects.Slot("blank");
            this.addChild(this.slots[0]);
            this.slots[0].x = 20;
            this.slots[0].y = 50;
            this.slots[1] = new objects.Slot("blank");
            this.addChild(this.slots[1]);
            this.slots[1].x = 115;
            this.slots[1].y = 50;
            this.slots[2] = new objects.Slot("blank");
            this.addChild(this.slots[2]);
            this.slots[2].x = 210;
            this.slots[2].y = 50;


            this.spinButton = new objects.Button("spin", 186, 454);
            this.addChild(this.spinButton);
            this.spinButton.on("click", () => this.Spin());
            this.resetButton = new objects.Button("reset", 186, 491);
            this.addChild(this.resetButton);
            this.resetButton.on("click", () => this.ResetNumbers());
            this.quitButton = new objects.Button("quit", 186, 528);
            this.addChild(this.quitButton);
            this.quitButton.on("click", () => this.Quit());

            this.zeroBet = new objects.Button("zerobet", 13, 454);
            this.addChild(this.zeroBet);
            this.zeroBet.on("click", () => this.ZeroBet());
            this.oneBet = new objects.Button("onebet", 49, 454);
            this.addChild(this.oneBet);
            this.oneBet.on("click", () => this.OneBet());
            this.fiveBet = new objects.Button("fivebet", 86, 454);
            this.addChild(this.fiveBet);
            this.fiveBet.on("click", () => this.FiveBet());
            this.tenBet = new objects.Button("tenbet", 122, 454);
            this.addChild(this.tenBet);
            this.tenBet.on("click", () => this.TenBet());

            this.betText = new objects.Label(this.wager.toString(), "30px", "Consolas", "#000000", 15, 410);
            this.addChild(this.betText);
            this.payoutText = new objects.Label(this.lastPayout.toString(), "30px", "Consolas", "#000000", 15, 330);
            this.addChild(this.payoutText);
            this.moneyText = new objects.Label(this.playerMoney.toString(), "30px", "Consolas", "#000000", 15, 250);
            this.addChild(this.moneyText);
            this.jackpotText = new objects.Label(this.jackpot.toString(), "30px", "Consolas", "#000000", 35, 5);
            this.addChild(this.jackpotText);


        }
        ZeroBet(): void {
            console.log(this.wager);

            this.wager = 0;
            this.betText.text = this.wager.toString();
            this.UpdateSpinButton();
        }
        OneBet(): void {
            this.wager += 1;
            this.betText.text = this.wager.toString();
            this.UpdateSpinButton();
        }
        FiveBet(): void {
            this.wager += 5;
            this.betText.text = this.wager.toString();
            this.UpdateSpinButton();
        }
        TenBet(): void {
            this.wager += 10;
            this.betText.text = this.wager.toString();
            this.UpdateSpinButton();
        }
        UpdateSpinButton(): void {
            if (this.wager > this.playerMoney) {
                this.spinButton.alpha = 0.5;
            } else {
                this.spinButton.alpha = 1;
            }
        }

        public Spin(): void {
            let rollValue = [0, 0, 0];

            if (this.wager > this.playerMoney) {
                alert("Not enough money for current bet.");
            } else if (this.wager <= 0) {
                alert("wager must be 1 or greater");
            } else {
                this.playerMoney -= this.wager;
                this.moneyText.text = this.playerMoney.toString();
                for (let spin = 0; spin < 3; spin++) {
                    rollValue[spin] = Math.floor((Math.random() * 65) + 1);
                    switch (rollValue[spin]) {
                        case this.checkRange(rollValue[spin], 1, 27):  // 41.5% probability
                            this.slots[spin].ReplaceSlot("blank");
                            this.blanks++;
                            break;
                        case this.checkRange(rollValue[spin], 28, 37): // 15.4% probability
                            this.slots[spin].ReplaceSlot("shroom");
                            this.shrooms++;
                            break;
                        case this.checkRange(rollValue[spin], 38, 46): // 13.8% probability
                            this.slots[spin].ReplaceSlot("slime");
                            this.slimes++;
                            break;
                        case this.checkRange(rollValue[spin], 47, 54): // 12.3% probability
                            this.slots[spin].ReplaceSlot("megaman");
                            this.megamans++;
                            break;
                        case this.checkRange(rollValue[spin], 55, 59): //  7.7% probability
                            this.slots[spin].ReplaceSlot("pikachu");
                            this.pikachus++;
                            break;
                        case this.checkRange(rollValue[spin], 60, 62): //  4.6% probability
                            this.slots[spin].ReplaceSlot("chicken");
                            this.chickens++;
                            break;
                        case this.checkRange(rollValue[spin], 63, 64): //  3.1% probability
                            this.slots[spin].ReplaceSlot("triforce");
                            this.triforces++;
                            break;
                        case this.checkRange(rollValue[spin], 65, 65): //  1.5% probability
                            this.slots[spin].ReplaceSlot("seven");
                            this.sevens++;
                            break;
                    }
                }
                this.DetermineWinnings();
                this.ResetTally();
                this.UpdateNumbers();
            }
        }

        ResetTally(): void {
            this.shrooms = 0;
            this.slimes = 0;
            this.megamans = 0;
            this.pikachus = 0;
            this.chickens = 0;
            this.triforces = 0;
            this.sevens = 0;
            this.blanks = 0;
        }
        DetermineWinnings(): void {
            this.lastPayout = 0;
            if (this.blanks == 0) {
                if (this.shrooms == 3) {
                    this.lastPayout = this.wager * 10;
                }
                else if (this.slimes == 3) {
                    this.lastPayout = this.wager * 20;
                }
                else if (this.megamans == 3) {
                    this.lastPayout = this.wager * 30;
                }
                else if (this.pikachus == 3) {
                    this.lastPayout = this.wager * 40;
                }
                else if (this.chickens == 3) {
                    this.lastPayout = this.wager * 50;
                }
                else if (this.triforces == 3) {
                    this.lastPayout = this.wager * 75;
                }
                else if (this.sevens == 3) {
                    this.lastPayout = this.wager * 100;
                }
                else if (this.shrooms == 2) {
                    this.lastPayout = this.wager * 2;
                }
                else if (this.slimes == 2) {
                    this.lastPayout = this.wager * 2;
                }
                else if (this.megamans == 2) {
                    this.lastPayout = this.wager * 3;
                }
                else if (this.pikachus == 2) {
                    this.lastPayout = this.wager * 4;
                }
                else if (this.chickens == 2) {
                    this.lastPayout = this.wager * 5;
                }
                else if (this.triforces == 2) {
                    this.lastPayout = this.wager * 10;
                }
                else if (this.sevens == 2) {
                    this.lastPayout = this.wager * 20;
                }
                else if (this.sevens == 1) {
                    this.lastPayout = this.wager * 5;
                }
                else {
                    this.lastPayout = this.wager * 1;
                }
                this.payoutText.text = this.lastPayout.toString();
                this.playerMoney += this.lastPayout;
                this.moneyText.text = this.playerMoney.toString();
                console.log(this.lastPayout.toString());
                this.checkJackPot();
            }
            this.UpdateNumbers();

        }
        checkRange(value: number, lowerBounds: number, upperBounds: number): any {
            if (value >= lowerBounds && value <= upperBounds) {
                return value;
            }
            else {
                return !value;
            }
        }
        checkJackPot(): void {
            /* compare two random values */
            var jackPotTry = Math.floor(Math.random() * 51 + 1);
            var jackPotWin = Math.floor(Math.random() * 51 + 1);
            if (jackPotTry == jackPotWin) {
                alert("You Won the $" + this.jackpot + " Jackpot!!");
                this.playerMoney += this.jackpot;
                this.jackpot = 1000;
            } else {
                this.jackpot += this.wager;
            }
            this.UpdateNumbers();
        }
        UpdateNumbers(): void {
            this.jackpotText.text = this.jackpot.toString();
            this.moneyText.text = this.playerMoney.toString();
            this.betText.text = this.wager.toString();
            this.payoutText.text = this.lastPayout.toString();
        }
        ResetNumbers(): void {
            this.playerMoney = 1000;
            this.wager = 0;
            this.lastPayout = 0;
            this.jackpot = 0;
            this.UpdateNumbers();
        }
        public Quit(): void {
            managers.Game.currentState = config.Scene.OVER;
        }
    }
}