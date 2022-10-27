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
let Keystate = true;
let background;
let computer; 

var cursors;
var character;

function preload ()
{
    this.load.image('background', 'Assets/Images/museum.png');
    this.load.spritesheet('character', 'Assets/Images/character.png', {
        frameWidth: 65,
        frameHeight: 98,
    });
    this.load.image('Computer', 'Assets/Images/Computer.png');
}

function create ()
{
    //-------------------BACKGROUND -----------------------------------------//
    background = this.add.image(0,0, 'background');
    background.setOrigin(0,0);

    computer = this.add.image(200,400,'Computer');



    // ---- Creation of all animation for the character and add of physics for the velocity ----//
    //---- ANIMATION ------ UP -----------------------------------------------//
    
    this.anims.create({
        key: "up",
        frameRate: 4,
        frames: this.anims.generateFrameNumbers("character", {start: 4, end:7}),
        repeat: -1
    });
    
    character = this.physics.add.sprite(100, 450, 'character');

    character.anims.play("up");

    //----CREATION ANIMATION ------ DOWN ---------------------------------------//
    
    this.anims.create({
        key: "down",
        frameRate: 4,
        frames: this.anims.generateFrameNumbers("character", {start: 0, end:3}),
        repeat: -1
    });
    
    character.anims.play("down");
    
    //-----CREATION ANIMATION ----- RIGHT ----------------------------------------//

    this.anims.create({
        key: "right",
        frameRate: 4,
        frames: this.anims.generateFrameNumbers("character", {start: 12, end:14}),
        repeat: -1
    });
    
    character.anims.play("turn");
    
    //----CREATION ANIMATION ------ LEFT --------------------------------------------//
    
    this.anims.create({
        key: "left",
        frameRate: 4,
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
    
    //------------- Variable to monitor which key is press ----------------------//
    
    cursors = this.input.keyboard.createCursorKeys();
    
}

function update()
{
    // -----------------------Update movement --------------------//
    // Character control with the arrow ( left, right, up, down) 

    
    if (cursors.left.isDown) //---------LEFT MOVE------------//
    {
        character.setVelocityX(-160);
        character.setVelocityY(0);
        
        character.anims.play('left', true);
    }
    else if (cursors.right.isDown) //---------RIGHT MOVE------------//
    {
        character.setVelocityX(160);
        character.setVelocityY(0);
        
        character.anims.play('right', true);
    }
    else if (cursors.up.isDown)//---------UP MOVE------------//
    {
        character.setVelocityY(-160);
        character.setVelocityX(0);

        character.anims.play('up',true);
    }

    else if (cursors.down.isDown) //---------DOWN MOVE------------//
    {
        character.setVelocityY(160);
        character.setVelocityX(0);

        character.anims.play('down',true);
    }   
    
    else //--------------- IDLE -----------------//
    {
        character.setVelocityX(0);
        character.setVelocityY(0);
        character.anims.play("idle",true);
    }

        
}
