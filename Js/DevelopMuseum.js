let config = {

    type: Phaser.AUTO,
    width: 800,
    height: 640,
    scale: {
        width: 800,
        height: 640,
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
let map; 
let popUp;
let response1;
let response2;
let response3;
let score;


var cursors;
var character;
var dist;

function preload ()
{
    this.load.image('background', 'Assets/Images/museum640.png');
    this.load.spritesheet('character', 'Assets/Images/chara.png', {
        frameWidth: 49,
        frameHeight: 49,
    });
    this.load.image('Computer', 'Assets/Images/Computer.png');
    this.load.image('museumTiles', 'Assets/Images/museum640.png');
    this.load.tilemapTiledJSON('museumMap', 'Assets/maps/museummapproject.tmj');
    this.load.image('window', 'Assets/Images/window.png')
    this.load.image('response', 'Assets/Images/response.png')
}

function create ()
{
    //-------------------BACKGROUND -----------------------------------------//
    background = this.add.image(0,0, 'background');
    background.setOrigin(0,0);

    map = this.make.tilemap({ key: 'museumMap'});
    let museumm = map.addTilesetImage('museum', 'museumTiles');
    let museumLayer = map.createStaticLayer(0, museumm, 0,0);
    museumLayer.setCollisionBetween(0, 1000);
    character = this.physics.add.sprite(300, 350, 'character');

    this.physics.add.collider(character, museumLayer, collisionPlayerLayer, null, this);
    
    
    computer = this.add.image(200,400,'Computer').setInteractive();
    computer.on('pointerdown', PopUp);
    
    
    
    // ---- Creation of all animation for the character and add of physics for the velocity ----//
    //---- ANIMATION ------ UP -----------------------------------------------//
    
    this.anims.create({
        key: "up",
        frameRate: 8,
        frames: this.anims.generateFrameNumbers("character", {start: 9, end:11}),
        repeat: -1
    });
    
    character.anims.play("up");
    
    //----CREATION ANIMATION ------ DOWN ---------------------------------------//
    
    this.anims.create({
        key: "down",
        frameRate: 8,
        frames: this.anims.generateFrameNumbers("character", {start: 0, end:2}),
        repeat: -1
    });
    
    character.anims.play("down");
    
    //-----CREATION ANIMATION ----- RIGHT ----------------------------------------//
    
    this.anims.create({
        key: "right",
        frameRate: 8,
        frames: this.anims.generateFrameNumbers("character", {start: 6, end:8}),
        repeat: -1
    });
    
    character.anims.play("right");
    
    //----CREATION ANIMATION ------ LEFT --------------------------------------------//
    
    this.anims.create({
        key: "left",
        frameRate: 8,
        frames: this.anims.generateFrameNumbers("character", {start: 3, end:5}),
        repeat: -1
    });
    
    character.anims.play("left");
    
    this.anims.create({
        key: "idle",
        frameRate: 1,
        frames: this.anims.generateFrameNumbers("character", {start: 0, end:0}),
        repeat: -1
    });
    
    character.anims.play("idle");
    
    //------------- Pop Up question / response ----------------------//
    
    cursors = this.input.keyboard.createCursorKeys();
    popUp = this.add.image(400,300,'window').setVisible(false).setInteractive();
    popUp.on('pointerdown', Close);
    popUpText = this.add.text(200, 120, 'Quel est l"OS parmi ces trois propositions', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setVisible(false);


    response1= this.add.image(400,250 + 10, 'response').setVisible(false).setInteractive();
    response1.setScale(0.7);
    response1Text = this.add.text(300, 250 + 5, 'Windows 10', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setVisible(false);

    response2= this.add.image(400,250 + 90, 'response').setVisible(false).setInteractive();
    response2.setScale(0.7);
    response2Text = this.add.text(300, 250 + 90, 'DHCP', { fontFamily: 'LLPIXEL3' }).setVisible(false);

    response3= this.add.image(400,250 + 170, 'response').setVisible(false).setInteractive()
    response3.setScale(0.7);
    response3Text = this.add.text(300, 250 + 160, 'DNS', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setVisible(false);


    response1.on('pointerdown', Close);
    response2.on('pointerdown', Close);
    response3.on('pointerdown', Close);


    this.cameras.main.startFollow(character, true);

    // ------------------DECOR-----------------------------------//

    
}

function update()
{
    // -----------------------Update movement --------------------//
    // Character control with the arrow ( left, right, up, down) 
    

    // if (this.cameras.main.scrollX<1600) this.cameras.main.scrollX += 1;

    //---------LEFT MOVE------------//
    
    if (cursors.left.isDown) 
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
        
        character.anims.play('idle');
    }



    //dist = Phaser.Math.Distance.BetweenPoints(character, computer);

    // if(dist < 75)
    // {
    //     console.log("T'es tout pres");
    // }

}

function PopUp()
{
    popUp.setVisible(true);
    popUpText.setVisible(true);

    response1.setVisible(true);
    response1Text.setVisible(true);

    response2.setVisible(true);
    response2Text.setVisible(true);

    response3.setVisible(true);
    response3Text.setVisible(true);


}

function Close()
{
    popUp.setVisible(false);

    popUpText.setVisible(false);

    response1.setVisible(false);
    response1Text.setVisible(false);

    response2.setVisible(false);
    response2Text.setVisible(false);

    response3.setVisible(false);
    response3Text.setVisible(false);

    score ++;
    console.log(score);
}

// function checkAnswer(answerNumber) {
//     for (let i = 0; i < 3; i++) {
//         if (i == questions[questionCounter].goodAnswer) answerText[i].setColor("#00AA00");
//         else answerText[i].setColor("#AA0000");
//     }
//     for (let i = 0; i < 3; i++) {
//         answerPanelImage[i].disableInteractive();
//     }
//     if (answerNumber == questions[questionCounter].goodAnswer) {
//         starImage[questionCounter].alpha = 1;
//         score++;
//     }
//     else {
//         starImage[questionCounter].tint = 0xff0000;
//         starImage[questionCounter].alpha = 0.6;
//         answerPanelImage[answerNumber].tweenWrong.play();
//     }
//     nextButton.setVisible(true);
// }
function collisionPlayerLayer(characterCollide, museumLayerCollide){
    console.log("collision");
}
