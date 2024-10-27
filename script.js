var x = Math.floor(Math.random()*6)+1;
console.log(x);

var y = Math.floor(Math.random()*6)+1;
console.log(y);

const resultelement = document.querySelector(".result");





if(x>y){
    resultelement.textContent="Player 1 is Winner!"

}
else{
    resultelement.textContent="Player 2 is Winner!"
}

resultelement.style.fontFamily = "Honk";
resultelement.style.fontSize = "50px";

// for image change

if(x===1){
    document.querySelector(".image1").src ="./assets/dice1.png";
}

if(x===2){
    document.querySelector(".image1").src ="./assets/dice2.png";
}
if(x===3){
    document.querySelector(".image1").src ="./assets/dice3.png";
}
if(x===4){
    document.querySelector(".image1").src ="./assets/dice4.png";
}
if(x===5){
    document.querySelector(".image1").src ="./assets/dice5.png";
    
}
if(x===6){
    document.querySelector(".image1").src ="./assets/dice6.png";
}

if(y===1){
    document.querySelector(".image2").src ="./assets/dice1.png";
}

if(y===2){
    document.querySelector(".image2").src ="./assets/dice2.png";
}
if(y===3){
    document.querySelector(".image2").src ="./assets/dice3.png";
}
if(y===4){
    document.querySelector(".image2").src ="./assets/dice4.png";
}
if(y===5){
    document.querySelector(".image2").src ="./assets/dice5.png";
    
}
if(y===6){
    document.querySelector(".image2").src ="./assets/dice6.png";
y
}