function draw(){
    if(gameState === "intro"){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        drawBackground();
        drawMenu();
        if(kontrola % 2 === 0){
            drawHudba();
        }
        else{
            drawHudbaN();
        }
        ctx.save();
        ctx.translate(canvas.width/2,canvas.height/2);
        drawShipIntro();
        degrees = degrees + 1;
        requestAnimationFrame(draw);

        ctx.restore();
    }
    else if (gameState === "playing"){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    hram = 1;
    drawBackground();
     cas_koniec = new Date();
     if (cas_koniec/1000 - cas_zaciatok/1000 <= 10){
         obtiaznost = 1; // 5000
         cyclespeed = 5000;
         console.log(cyclespeed);
     }
     else if(cas_koniec/1000 - cas_zaciatok/1000>10 && cas_koniec/1000 - cas_zaciatok/1000 <= 20){
         obtiaznost = 2; // 4000
         cyclespeed = 4000;
         console.log(cyclespeed);
     }
     else if(cas_koniec/1000 - cas_zaciatok/1000>20 && cas_koniec/1000 - cas_zaciatok/1000 <= 30){
         obtiaznost = 3; // 3000
         cyclespeed = 3000;
         console.log(cyclespeed);
     }
     else if(cas_koniec/1000 - cas_zaciatok/1000>30 && cas_koniec/1000 - cas_zaciatok/1000 <= 40){
         obtiaznost = 4; // 2000
         cyclespeed = 2000;
         console.log(cyclespeed);
     }
     else if(cas_koniec/1000 - cas_zaciatok/1000>40 && cas_koniec/1000 - cas_zaciatok/1000 <= 50){
         obtiaznost = 5; // 1000
         cyclespeed = 1000;
         console.log(cyclespeed);
     }
     else if(cas_koniec/1000 - cas_zaciatok/1000>50 && cas_koniec/1000 - cas_zaciatok/1000 <= 60){
         obtiaznost = 6; // 500
         cyclespeed = 500;
         console.log(cyclespeed);
     }
     else{
         vyhra = 1;
         gameState = "gameOver";
     }
        let i = -1;
    for (let meteor of meteority) {

        let j = -1;
        i++;
        if(meteor.x >= 850  && meteor.x <= 980 && meteor.y >= 360 && meteor.y <= 490){
        }
        for (let vystrel of strely) {
            j++;
            if(meteor.x < vystrel.x + 66 &&
                meteor.x + 90 > vystrel.x &&
                meteor.y < vystrel.y + 70 &&
                meteor.y + 90 > vystrel.y) {
                skore += 10;
                meteority.splice(i, 1);
                strely.splice(j, 1);
                zvuk_vybuch.play();
            }
        }
        j = -1;
        meteor.update();
    }
        for (let vystrel of strely) {
            vystrel.update();
        }
        if (keys && keys[65]) { //68 d 65 a 32 space
            degrees -= otocka;
            degrees = degrees % 360;
        }
        if (keys && keys[68]) { //68 d 65 a 32 space
            degrees += otocka;
            degrees = degrees % 360;
        }
        drawScore();
        for (let meteor of meteority) {
            if(meteor.x < 1000 &&
                meteor.x + 90 > 890 &&
                meteor.y < 500 &&
                meteor.y + 90 > 450){
                gameState = "gameOver";
            }
        }
        if(kontrola % 2 === 0){
            drawHudba();
        }
        else{
            drawHudbaN();
        }
    ctx.save();
    ctx.translate(canvas.width/2,canvas.height/2);
    drawShip();
    requestAnimationFrame(draw);

    ctx.restore();
    }
    else if (gameState === "gameOver"){
        strely = [];
        meteority = [];
        ctx.clearRect(0,0,canvas.width,canvas.height);
        hram = 0;
        drawBackground();
        if(kontrola % 2 === 0){
            drawHudba();
        }
        else{
            drawHudbaN();
        }
        if(vyhra === 1){
            drawGameover_win();
            drawLoseScore();
        }
        else{
            drawGameover();
            drawLoseScore();
        }
        ctx.save();
        requestAnimationFrame(draw);

        ctx.restore();
    }
    else if(gameState === "instructions"){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        drawBackground();
        drawInstructions();
        if(kontrola % 2 === 0){
            drawHudba();
        }
        else{
            drawHudbaN();
        }

        ctx.save();
        ctx.translate(canvas.width/2,canvas.height/2);
        requestAnimationFrame(draw);

        ctx.restore();
    }
}
requestAnimationFrame(draw);
