let config = {

    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: {
        width: 800,
        height: 600,
        parent: "game"
    },
    physics: {
        default: 'arcade'
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    audio: {
        disableWebAudio: true
    }

};

let game = new Phaser.Game(config);
let background;


function preload ()
{
    this.load.image('background', 'Assets/Images/museum.png');
    this.load.spritesheet('character', 'Assets/Images/character.png', {
        frameWidth: 65,
        frameHeight: 98,
    });
}

function create ()
{

    background = this.add.image(0,0, 'background');
    background.setOrigin(0,0);

    //------------- Variable to monitor the movement ----------------------//

    leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);


    //---- ANIMATION ------ UP -----------------------------------------------//

    this.anims.create({
        key: "up",
        frameRate: 2,
        frames: this.anims.generateFrameNumbers("character", {start: 4, end:7}),
        repeat: -1
    });

    character = this.add.sprite(100, 450, 'character');
    character.anims.play("up");

    //----CREATION ANIMATION ------ DOWN ---------------------------------------//

    this.anims.create({
        key: "down",
        frameRate: 2,
        frames: this.anims.generateFrameNumbers("character", {start: 0, end:3}),
        repeat: -1
    });

    character.anims.play("down");

    //-----CREATION ANIMATION ----- RIGHT ----------------------------------------//

    this.anims.create({
        key: "right",
        frameRate: 2,
        frames: this.anims.generateFrameNumbers("character", {start: 12, end:14}),
        repeat: -1
    });

    character.anims.play("right");

    //----CREATION ANIMATION ------ LEFT ----------------------------------------------

    this.anims.create({
        key: "left",
        frameRate: 2,
        frames: this.anims.generateFrameNumbers("character", {start: 8, end:10}),
        repeat: -1
    });

    character.anims.play("left");

    this.anims.create({
        key: "idle",
        frameRate: 2,
        frames: this.anims.generateFrameNumbers("character", {start: 0, end:0}),
        repeat: -1
    });

    character.anims.play("idle");


    //----------------------------------------------
}

function update ()
{
    // -----------------------Update movement --------------------

    if(Phaser.Input.Keyboard.JustDown(downKey)){
        character.anims.play("down");
    }

    if(Phaser.Input.Keyboard.JustDown(upKey)){
        character.anims.play("up");
    }

    if(Phaser.Input.Keyboard.JustDown(rightKey)){
        character.anims.play("right");
    }

    if(Phaser.Input.Keyboard.JustDown(leftKey)){
        character.anims.play("left");
    }
    if(Phaser.Input.Keyboard.JustUp()){
        character.anims.play("idle");
    }



    }