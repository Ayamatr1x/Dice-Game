function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const RandomNumber1 = randomIntFromInterval(1, 5)
//   console.log(RandomNumber1);

const arr = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"]
var algo = arr[RandomNumber1]


document.querySelector(".img1").setAttribute("src",algo);
// document.querySelector("img").setAttribute("src",algo);
function randomIn(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const RandomNumber2 = randomIn(1, 5)
//   console.log(RandomNumber1);

const arral = ["./images/dice2.png","./images/dice5.png","./images/dice3.png","./images/dice6.png","./images/dice5.png","./images/dice1.png"]
var algo1 = arral[RandomNumber2]
document.querySelector(".img2").setAttribute("src", algo1);

if(RandomNumber1 == RandomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}else if(RandomNumber1 > RandomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins";
}else{
    document.querySelector("h1").innerHTML = "Player2 Wins";
}