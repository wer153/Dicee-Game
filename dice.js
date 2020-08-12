var maxNumber = 6
var numOfPlayer1 = 6;
var numOfPlayer2 = 6;


numOfPlayer1 = generateRandomNumber(maxNumber);
numOfPlayer2 = generateRandomNumber(maxNumber);

if(numOfPlayer1>numOfPlayer2)
{
  document.querySelector("h1").innerHTML = "Player1 Win";
  //change <h1> to Player1 Win
}
else if(numOfPlayer1<numOfPlayer2)
{
  document.querySelector("h1").innerHTML = "Player2 Win";
  //change <h1> to numOfPlayer2 Win
}
else
{
  document.querySelector("h1").innerHTML = "Draw";
  //change <h1> to Draw
}

var selectors = document.querySelectorAll("img")
selectors[0].setAttribute("src","./images/dice"+numOfPlayer1+".png")
selectors[1].setAttribute("src","./images/dice"+numOfPlayer2+".png")
//change images of dices according to the generated numbers

function generateRandomNumber(maxNumber)
{
  var num = Math.floor(Math.random() * maxNumber);
  return num+1;
}
