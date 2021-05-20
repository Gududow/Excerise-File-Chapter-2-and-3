// JavaScript Document
function init()
// created a init function 
{
    document.getElementById("textOutput").innerHTML = "Enter your name and then click the button.";
    // to acces the hmtl  string which shows in the console get the emelment by id that earchies it for u  
}

function clickButton()
// created the click handler new fucntion to do this 
{

var name = document.getElementById("textEntry").value;
// new to create a new var to hold the name we used and excees the tet id
//  

document.getElementById("textOutput").innerHTML = createGreeting(name);
// create the greeeting and output it text elemnt 

}
function createGreeting(newName)
// build a fuction for greeting 
{
    var Greeting = "Hello, " + newName + "!";
    // creating the greeting var and conccented with a string 
    return Greeting;
    // return it to finsh that
}