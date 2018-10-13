/*
*   Pedro Bento 300843658
*   Assignment 1   Slot Machine
*   This application is a slot machine game with simple betting and a jackpot
*
*
*   Revision History: https://github.com/Cheeseless/comp397-f2018-assignment1/commits/master
*   creation: 29 September 2018
*/
var scenes;
(function (scenes) {
    class Play extends objects.Scene {
        constructor() {
            super();
            this.playerMoney = 1000;
            this.lastPayout = 0;
            this.jackpot = 5000;
            this.wager = 0;
            this.winRatio = 0;
            this.shrooms = 0;
            this.slimes = 0;
            this.megamans = 0;
            this.pikachus = 0;
            this.chickens = 0;
            this.triforces = 0;
            this.sevens = 0;
            this.blanks = 0;
            this.slots = [];
            this.Start();
        }
        Start() {
            this.Reset();
            this.Main();
        }
        ;
        Update() {
        }
        ;
        Destroy() {
            this.removeAllChildren();
        }
        ;
        Reset() {
            this.removeAllChildren();
        }
        ;
        Main() {
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
        ZeroBet() {
            console.log(this.wager);
            this.wager = 0;
            this.betText.text = this.wager.toString();
            this.UpdateSpinButton();
        }
        OneBet() {
            this.wager += 1;
            this.betText.text = this.wager.toString();
            this.UpdateSpinButton();
        }
        FiveBet() {
            this.wager += 5;
            this.betText.text = this.wager.toString();
            this.UpdateSpinButton();
        }
        TenBet() {
            this.wager += 10;
            this.betText.text = this.wager.toString();
            this.UpdateSpinButton();
        }
        UpdateSpinButton() {
            if (this.wager > this.playerMoney) {
                this.spinButton.alpha = 0.5;
            }
            else {
                this.spinButton.alpha = 1;
            }
        }
        Spin() {
            let rollValue = [0, 0, 0];
            if (this.wager > this.playerMoney) {
                alert("Not enough money for current bet.");
            }
            else if (this.wager <= 0) {
                alert("wager must be 1 or greater");
            }
            else {
                this.playerMoney -= this.wager;
                this.moneyText.text = this.playerMoney.toString();
                for (let spin = 0; spin < 3; spin++) {
                    //roll a die between 1 and 65 to determine the outcome for a given slot
                    rollValue[spin] = Math.floor((Math.random() * 65) + 1);
                    switch (rollValue[spin]) {
                        case this.checkRange(rollValue[spin], 1, 27): // 41.5% probability
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
        ResetTally() {
            this.shrooms = 0;
            this.slimes = 0;
            this.megamans = 0;
            this.pikachus = 0;
            this.chickens = 0;
            this.triforces = 0;
            this.sevens = 0;
            this.blanks = 0;
        }
        DetermineWinnings() {
            this.lastPayout = 0;
            //blanks invalidate any payout
            if (this.blanks == 0) {
                //matches of three and two icons provide payout. Sevens provide payout on single ocurrence
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
        checkRange(value, lowerBounds, upperBounds) {
            if (value >= lowerBounds && value <= upperBounds) {
                return value;
            }
            else {
                return !value;
            }
        }
        checkJackPot() {
            /* compare two random values */
            var jackPotTry = Math.floor(Math.random() * 51 + 1);
            var jackPotWin = Math.floor(Math.random() * 51 + 1);
            if (jackPotTry == jackPotWin) {
                alert("You Won the $" + this.jackpot + " Jackpot!!");
                this.playerMoney += this.jackpot;
                this.jackpot = 1000;
            }
            else {
                this.jackpot += this.wager;
            }
            this.UpdateNumbers();
        }
        UpdateNumbers() {
            this.jackpotText.text = this.jackpot.toString();
            this.moneyText.text = this.playerMoney.toString();
            this.betText.text = this.wager.toString();
            this.payoutText.text = this.lastPayout.toString();
        }
        ResetNumbers() {
            this.playerMoney = 1000;
            this.wager = 0;
            this.lastPayout = 0;
            this.jackpot = 5000;
            this.UpdateNumbers();
        }
        Quit() {
            managers.Game.Score = this.playerMoney;
            managers.Game.currentState = config.Scene.OVER;
        }
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map