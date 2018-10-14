// IIFE - Immediately Invoked Function Expression
(function () {
    // game variables
    let canvas: HTMLCanvasElement;
    let stage: createjs.Stage;
    let assetManager: createjs.LoadQueue;

    let currentScene: objects.Scene;
    let currentState: config.Scene;

    let assetManifest = [
        { id: "startButton", src: "./Assets/Images/startButton.png" },
        { id: "restartButton", src: "./Assets/Images/restartButton.png" },
        { id: "background1", src: "./Assets/Images/background1.jpg" },
        { id: "background2", src: "./Assets/Images/background2.jpg" },
        { id: "background3", src: "./Assets/Images/background3.jpg" },
        { id: "blank", src: "./Assets/images/blank.png" },
        { id: "chicken", src: "./Assets/images/chicken.png" },
        { id: "megaman", src: "./Assets/images/megaman.png" },
        { id: "pikachu", src: "./Assets/images/pikachu.png" },
        { id: "seven", src: "./Assets/images/seven.png" },
        { id: "slime", src: "./Assets/images/slime.png" },
        { id: "shroom", src: "./Assets/images/shroom.png" },
        { id: "triforce", src: "./Assets/images/triforce.png" },
        { id: "slotMachine", src: "./Assets/images/slotmachine-layout.png" },
        { id: "spin", src: "./Assets/images/spin-button.png" },
        { id: "reset", src: "./Assets/images/reset-button.png" },
        { id: "quit", src: "./Assets/images/quit-button.png" },
        { id: "zerobet", src: "./Assets/images/zerobet.png" },
        { id: "onebet", src: "./Assets/images/onebet.png" },
        { id: "fivebet", src: "./Assets/images/fivebet.png" },
        { id: "tenbet", src: "./Assets/images/tenbet.png" },

    ];

    function Init(): void {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager;
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start);

    }

    function Start(): void {
        console.log(`%c Game Started`, "color:blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage;
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);

        currentState = config.Scene.START;
        managers.Game.currentState = currentState;

        document.addEventListener("keydown", (event) => {
            managers.Input.HandleInput(event);
        })
        document.addEventListener("keyup", (event) => {
            managers.Input.HandleUpInput(event);
        })

        Main();
    }

    // this is the game loop
    function Update(): void {
        currentScene.Update();

        if (currentState != managers.Game.currentState) {
            currentState = managers.Game.currentState;
            Main();
        }

        stage.update();
    }

    function Main(): void {

        if (currentScene) {
            currentScene.Destroy();
            stage.removeAllChildren();
        }

        switch (currentState) {
            case config.Scene.START:
                currentScene = new scenes.Start();
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.Play();
                break;
            case config.Scene.OVER:
                currentScene = new scenes.Over();
                break;
        }

        stage.addChild(currentScene);
    }

    window.addEventListener("load", Init);
})();