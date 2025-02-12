import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;

    private player!: Phaser.Physics.Arcade.Sprite;
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    private items!: Phaser.Physics.Arcade.Group;
    private currentState: string = "normal";
    private currentHat: string = "";
    private currentGlasses: string = "";
    private playerTexture: string = "normal.png";
    private itemSounds: { [key: string]: Phaser.Sound.BaseSound } = {};

    constructor ()
    {
        super('Game');
    }

    preload() {
        //  this.load.image('background', 'assets/background.png');
       this.load.image('normal', 'assets/normal.png');
       this.load.spritesheet('dude', 'assets/normal.png', { frameWidth: 908, frameHeight: 905 });
       
        this.load.image('cry', 'assets/normal.png');
        this.load.image('angry', 'assets/normal.png');
        this.load.image('farmer_hat', 'assets/normal.png');
        this.load.image('baseball_hat', 'assets/normal.png');
        this.load.image('winter_hat', 'assets/normal.png');
        this.load.image('black_glasses', 'assets/normal.png');
        this.load.image('sun_glasses', 'assets/normal.png');
        this.load.image('transparent_glasses', 'assets/normal.png');
        this.load.image('item1', 'assets/normal.png');
        this.load.image('item2', 'assets/normal.png');
        this.load.audio('bgMusic', 'assets/music.mp3');
        this.load.audio('sound1', 'assets/music.mp3');
        this.load.audio('sound2', 'assets/music.mp3');
    }

    create ()
    {
        this.camera = this.cameras.main;
        // this.camera.setBackgroundColor(0x00ff00);


        this.background = this.add.image(512, 384, 'background');
        this.background.setAlpha(0.5);

        this.msg_text = this.add.text(512, 384, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        this.msg_text.setOrigin(0.5);

        // this.input.once('pointerdown', () => {

        //     this.scene.start('GameOver');

        // });
          this.add.image(908/8 / 2, 905/8 / 2, 'normal').setScale(1/8,1/8);
        
          this.physics.add.sprite(908/2, 908/2, 'dude');
        //  platforms = this.physics.add.staticGroup();
        

    }
}
