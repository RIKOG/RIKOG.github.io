let canvas = document.createElement('canvas');
canvas.width = 1900;  //1980
canvas.height = 950; //1080
let ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
let shipImage = new Image();
shipImage.src = 'imgs/lod.png';
let backImage = new Image();
backImage.src = 'imgs/Pozadie.png';
let meteoritImage = new Image();
meteoritImage.src = 'imgs/Meteorit.png';
let vybuchImage = new Image();
vybuchImage.src = 'imgs/vybuch.png';
let strelaImage = new Image();
strelaImage.src = 'imgs/strela.png';
let menuImage = new Image();
menuImage.src = 'imgs/menu.png';
let hudbaImage = new Image();
hudbaImage.src = 'imgs/zvuk.png';
var myAudio = document.createElement("audio");
myAudio.src = "sounds/hudba.mp3";
let hudbaNImage = new Image();
hudbaNImage.src = 'imgs/zvukN.png';
let instructionsImage = new Image();
instructionsImage.src = 'imgs/instructions.png';
let gameoverImage = new Image();
gameoverImage.src = 'imgs/gameover.png';
let gameoverwinImage = new Image();
gameoverwinImage.src = 'imgs/gameoverWin.png';


class GameObject {
    constructor(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
    }

    update() {
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
    }
}

class ImageableGameObject extends GameObject{
    constructor(x, y, dx, dy, image_src) {
        super(x, y, dx, dy);

        this.image = new Image();
        this.image.src = image_src;
    }
    update() {
        super.update();
        ctx.drawImage(this.image, this.x, this.y);
    }
}

class Meteorit extends ImageableGameObject {
    constructor(x, y, dx, dy) {
        super(x, y, dx, dy, 'imgs/Meteorit.png');
    }
}
class Strela extends ImageableGameObject {
    constructor(x, y, dx, dy) {
        super(x, y, dx, dy, 'imgs/Strela.png');
    }
}

let strely = [];
let meteority = [];
let boxes = [];
let obtiaznost = 0;
let degrees = 360;
let otocka = 2;
let poziciax = 0;
let poziciay = 0;
let gameState = "intro";
// let gameState = "gameOver";
let meteorX = 100;
let meteorY = 20;
let kontrola = 1;
let hram = 0;
let skore = 0;
let cas_zaciatok = new Date();
let cas_koniec = new Date();
let cyclespeed = 0;
let vyhra = 0;

var zvuk_vybuch = new Sound("sounds/vybuch.mp3");
var zvuk_vystrel = new Sound("sounds/vystrel.mp3");
var zvuk_klik = new Sound("sounds/klik.mp3");
function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    };
    this.stop = function(){
        this.sound.pause();
    };
}