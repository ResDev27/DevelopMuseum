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



function preload ()
{

}

function create ()
{

}

function update() { }