var randomnumber1 =Math.floor((Math.random()*6)+1);
var randomImageSource ="images/dice" + randomnumber1 +".png";
 document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);


 var randomnumber2 =Math.floor((Math.random()*6)+1);
 var randomImageSource1 ="images/dice" + randomnumber2 +".png";

  document.querySelectorAll("img")[1].setAttribute("src",randomImageSource1);


if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").innerHTML="Player 1 is the winner!!"
}
else if(randomnumber1===randomnumber2){
  document.querySelector("h1").innerHTML="DRAW!!"
}
else{
  document.querySelector("h1").innerHTML="Player 2 is the winner!!"
}
