let keys;
window.addEventListener('keydown', function (e) {
    keys = (keys || []);
    keys[e.keyCode] = (e.type === "keydown");
});
window.addEventListener('keyup', function (e) {
    keys[e.keyCode] = (e.type === "keydown");
});
document.addEventListener('keydown',(e)=> {
    if(gameState === "playing"){
    switch (e.key) {
        case' ':
            console.log(degrees);
            let vystrel = strelaGenerator(ctx);
            strely.push(vystrel);                 // pushuje nove meteority do const arrayu meteoritov
            zvuk_vystrel.play();
            break;
        }
    }
});
document.addEventListener('click',(e)=>{
    console.log(e);
    poziciax = e.clientX;
    poziciay = e.clientY;
    if(poziciax >= 910 && poziciax <= 970 && poziciay >= 440 && poziciay <= 465 && gameState === "intro"){
        gameState = "playing";
        cas_zaciatok = new Date();
        degrees = 0;
        zvuk_klik.play();
    }
    if(poziciax >= 865 && poziciax <= 1010 && poziciay >= 470 && poziciay <= 500 && gameState === "intro"){
        gameState = "instructions";
        zvuk_klik.play();
    }
    if(poziciax >= 890 && poziciax <= 980 && poziciay >= 690 && poziciay <= 730 && gameState === "instructions"){
        gameState = "intro";
        zvuk_klik.play();
    }
    if(poziciax >= 890 && poziciax <= 980 && poziciay >= 720 && poziciay <= 760 && gameState === "gameOver"){
        gameState = "intro";
        skore = 0;
        obtiaznost = 0;
        vyhra = 0;
        zvuk_klik.play();
    }
    if(poziciax >= 0 && poziciax <= 70 && poziciay >= 0 && poziciay <= 50){
        kontrola = kontrola + 1;
        zvuk_klik.play();
        if(kontrola % 2 === 0){
            myAudio.play();
        }
        else{
            myAudio.pause();
        }
    }
});