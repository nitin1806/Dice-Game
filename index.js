if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}

function rollDice(){
  var randomNumber1 = Math.random();
  randomNumber1 = randomNumber1*6;
  randomNumber1 = Math.floor(randomNumber1)+1;

  var randomImage1 = "images/dice"+randomNumber1+".png";
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src" , randomImage1);

  var randomNumber2 = Math.random();
  randomNumber2 = randomNumber2*6;
  randomNumber2 = Math.floor(randomNumber2)+1;

  var randomImage2 = "images/dice"+randomNumber2+".png";
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src" , randomImage2);
  //$(".dice").fadeOut().fadeIn();
  if(randomNumber1>randomNumber2){
  //  $("h1").fadeOut().slideUp().slideDown();
  $("h1").animate({margin: 20}).animate({opacity: 0.5});
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
  //  $("h1").fadeIn();
  }else if (randomNumber1 === randomNumber2) {
  //  $("h1").fadeOut().slideUp().slideDown();
  $("h1").animate({margin: 20}).animate({opacity: 0.5});
    document.querySelector("h1").innerHTML = "It's a draw 🤞";
  //  $("h1").fadeIn();
  }
  else{
  //  $("h1").fadeOut().slideUp().slideDown();
  $("h1").animate({margin: 20}).animate({opacity: 0.5});
    document.querySelector("h1").innerHTML = "player 2 wins 🚩";
  //  $("h1").fadeIn();
  }

}
