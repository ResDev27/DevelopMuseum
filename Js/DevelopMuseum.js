let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
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

let octopusSprite;
let backGround;
let octopusAnimation, crabyAnimation, cuteStarAnimation, shrimpAnimation;
let octopusAnim, crabyAnim, cuteStarAnim, shrimpAnim;

function preload ()
{
    this.load.image('backGround', './assets/images/bg_water.png');
    this.load.spritesheet('octopusSprite', './assets/images/octopus.png', { 
        frameWidth: 24,
        frameHeight: 32
    });

    this.load.spritesheet('crabySprite', './assets/images/craby.png', { 
        frameWidth: 32,
        frameHeight: 32
    });

    this.load.spritesheet('cuteStarSprite', './assets/images/cuteStar.png', { 
        frameWidth: 34,
        frameHeight: 32
    });

    this.load.spritesheet('shrimpSprite', './assets/images/shrimp.png', { 
        frameWidth: 32,
        frameHeight: 32
    });


}

function create ()
{
    backGround = this.add.image(0,0,'backGround');
    backGround.setOrigin(0,0);

    octopusAnimation = this.anims.create({
        key: 'jumpyOctopus',
        frames: this.anims.generateFrameNumbers('octopusSprite'),
        frameRate: 10,
        repeat: -1
        });
    octopusAnim = this.add.sprite(400, 300, 'octopusSprite');
    octopusAnim.play('jumpyOctopus');

    crabyAnimation = this.anims.create({
        key: 'jumpyCraby',
        frames: this.anims.generateFrameNumbers('crabySprite'),
        frameRate: 10,
        repeat: -1
        });
    crabyAnim = this.add.sprite(300, 300, 'crabySprite');
    crabyAnim.play('jumpyCraby');

    cuteStarAnimation = this.anims.create({
        key: 'jumpyCuteStar',
        frames: this.anims.generateFrameNumbers('cuteStarSprite'),
        frameRate: 10,
        repeat: -1
        });
    cuteStarAnim = this.add.sprite(600, 300, 'cuteStarSprite');
    cuteStarAnim.play('jumpyCuteStar');

    shrimpAnimation = this.anims.create({
        key: 'jumpyShrimp',
        frames: this.anims.generateFrameNumbers('shrimpSprite'),
        frameRate: 10,
        repeat: -1
        });
    shrimpAnim = this.add.sprite(550, 300, 'shrimpSprite');
    shrimpAnim.play('jumpyShrimp');




}

function update ()
{}