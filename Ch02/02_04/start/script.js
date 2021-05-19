// JavaScript Document

// Create the game score
var myScore;

// Setup and change the game score
init(1000);
// passes a varible in the fuction 1000 now in the console it will show 1000
// can control whether we inscrea the score or decrease by how much
changeScore(100);
changeScore(50);
changeScore(-250);
changeScore(125);

// Function to initialize the game score in the game
function init(newScore)
{   // get a nan response in the console cuase we failed to send a vaule to the myscore varibale never gets sent anything to begind with
    console.log("Setting the score to " + newScore);
    // aceess the console  with a string setting the score the new score varibke and close it
    myScore = newScore;
    displayScore();
}

// Function to change the score of the game
function changeScore(scoreDelta)


// the ammount of chaneg 
//function parmetier to see how it works
{
    console.log("Changing the score by " + scoreDelta);
    // ecess the log wiht a string changing the score with catcaning with scoredelta
    myScore = myScore + scoreDelta;
    displayScore();
    // call more than one place allows us to separae code
}


// create a new function that will display the score
function displayScore()
{

// move the consolelog stament  call that more in than one place
    console.log("Player score: " + myScore);


}