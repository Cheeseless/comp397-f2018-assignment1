//IIFE - Immediately Invoked Function Expression
(function () {
    // game variables
    let canvas: HTMLCanvasElement;
    let stage: createjs.Stage;
    let assetManager: createjs.LoadQueue;
    let currentScene: objects.Scene;
    let currentState: config.Scene;
    let assetManifest = [
        { id: "startButton", src: "/Assets/images/startButton.png" },
        { id: "restartButton", src: "/Assets/images/restartButton.png" },
        { id: "plane", src: "/Assets/images/plane.png" },
        { id: "cloud", src: "/Assets/images/cloud.png" },
        { id: "tank", src: "/Assets/images/tank.png" },
        { id: "island", src: "/Assets/images/island.png" },
        { id: "ocean", src: "/Assets/images/ocean.gif" },
        { id: "engineSound", src: "/Assets/audio/engine.ogg" },
        { id: "thunderSound", src: "/Assets/audio/thunder.ogg" },
        { id: "yaySound", src: "/Assets/audio/yay.ogg" }
    ];
    function Init(): void {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager; // creates a reference to the global assetManager
        assetManager.installPlugin(createjs.Sound); // enable sound preloading
        assetManager.loadManifest(assetManifest); // preloads all assets listed in the manifest
        assetManager.on("complete", Start); // call Start when assets are finished loading
    }
    function Start(): void {
        console.log(`%c Game Started...`, "color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage; // passing a reference to the stage globally
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);

        currentState = config.Scene.TANK_TEST;
        managers.Game.currentState = currentState;

        //FOR PROTOTYPE
        console.log("load start");

        
        document.addEventListener("keydown", (event) => {
            managers.Input.HandleInput(event);
        })
        document.addEventListener("keyup", (event) => {
            managers.Input.HandleUpInput(event);
        })
        Main();
    }
    function Update(): void {
        currentScene.Update();
        if (currentState != managers.Game.currentState) {
            currentState = managers.Game.currentState;
            Main();
        }
        stage.update();
    }
    function Main(): void {

        // clean up current scene
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
            case config.Scene.TANK_TEST:

                currentScene = new scenes.TankTest();
                break;
            case config.Scene.OVER:
                currentScene = new scenes.Over();
                break;
        }
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Init);
})();