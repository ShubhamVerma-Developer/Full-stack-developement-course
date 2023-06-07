var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gamePattern = [];
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    // console.log(randomNumber);
    randomChosenColour = buttonColours[randomNumber];
    // console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern);
}
nextSequence();
