function meteorGenerator(){
    let set;
    let rand = Math.floor(Math.random() * 4) + 1;
    if(rand === 1){
        let spawn = Math.floor(Math.random() * 1800) + 1;
        let dx = (900 - spawn) / 1000;
        set = new Meteorit(spawn, 10,dx,0.4);
    }
    else if(rand === 2){
        let spawn = Math.floor(Math.random() * 850) + 1;
        let dy = (400 - spawn) / 1000;
        set = new Meteorit(1800, spawn,-0.9, dy);
    }
    else if(rand === 3){
        let spawn = Math.floor(Math.random() * 1800) + 1;
        let dx = (900 - spawn) / 1000;
        set = new Meteorit(spawn, 850, dx, -0.4);
    }
    else if(rand === 4){
        let spawn = Math.floor(Math.random() * 850) + 1;
        let dy = (400 - spawn) / 1000;
        set = new Meteorit(10, spawn, 0.9, dy);
    }

    return set;
}
function strelaGenerator(){
    let set;
    let o = 0;
    // ctx.rotate(degrees*Math.PI/180);
    if((degrees >= -90 && degrees <= 0) || degrees >= 270){
        if(degrees >= 270){
            o = (degrees - 360) / 100;
        }
        else{
            o = degrees / 100;
        }
        set = new Strela(900, 470, (o + 0.9)*2, o*2);
    }
    else if((degrees > 0 && degrees <= 90) || degrees <= -270){
        if (degrees > 0){
            o = (degrees / 100);
        }
        else{
            o = (degrees + 360) / 100;
        }
        set = new Strela(900, 470,(0.9 - o) * 2, o * 2);

    }
    else if((degrees > 90 && degrees <= 180) || (degrees > -270 && degrees <= -180)){
        if(degrees < 0){
            o = (degrees + 360) / 100;
        }
        else{
            o = (degrees / 100);
        }
        set = new Strela(900, 470,(0.9-o)*2, (0.9+(0.9-o))*2);
    }
    else{
        if(degrees < 0){
            o = (degrees + 360) / 100;
        }
        else{
            o = (degrees / 100);
        }
        set = new Strela(900, 470,(o-2.8)*2, -(1 + o-2.8)*2);
    }
    return set;
}
function drawBackground() {
    ctx.drawImage(backImage, 0, 0)
}
function drawMenu() {
    ctx.drawImage(menuImage, 850, 400);
}
function drawInstructions() {
    ctx.drawImage(instructionsImage, 620, 200);
}
function drawGameover() {
    ctx.drawImage(gameoverImage, 620, 200);
}
function drawGameover_win() {
    ctx.drawImage(gameoverwinImage, 620, 200);
}
function drawShip() {
    // this.interval = setInterval(draw, 20);
    ctx.fillStyle = '#000';
    ctx.rotate(degrees*Math.PI/180);
    ctx.drawImage(shipImage,-shipImage.width/2+10,-shipImage.width/2+50);
}
function drawShipIntro() {
    // this.interval = setInterval(draw, 20);
    ctx.fillStyle = '#000';
    ctx.rotate(degrees*Math.PI/180);
    ctx.drawImage(shipImage,-shipImage.width/2 - 100,-shipImage.width/2 - 100);
}
function drawScore(){
    ctx.fillStyle = 'red';
    ctx.font="bold 30pt sans-serif";
    ctx.fillText('SCORE:',600,30, 800);
    ctx.fillText(skore,780,30, 800);
}
function drawLoseScore(){
    ctx.fillStyle = 'green';
    ctx.font="bold 30pt sans-serif";
    ctx.fillText(skore,950,315, 800);
    ctx.fillText(obtiaznost,950,350, 800);
}
function drawHudba() {
    ctx.drawImage(hudbaImage, 0, 0)
}
function drawHudbaN() {
    ctx.drawImage(hudbaNImage, 0, 0)
}
function spawni(){
    if(gameState === "playing") {
        let meteor = meteorGenerator(ctx);
        meteority.push(meteor);                 // pushuje nove meteority do const arrayu meteoritov
    }
}
(function loop() {
    setTimeout(function() {
        spawni();
        loop();
    }, cyclespeed);
}());
