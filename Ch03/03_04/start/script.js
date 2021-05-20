// JavaScript Document

if (true || false)
//if true or false is true 
//Only one value needs to be true in an OR statement for the whole evaluation to be true
{
    console.log("Only one value needs to be true in an OR statement for the whole evaluation to be true.");
    // excess conlone to display messege 
}

if (true && false)
// if true and false 
// going to be false since we know we using else statment 
{
    //
} else {
    console.log("Both values need to be true for an AND statment to be true.");
    //Both values need to be true for an AND statment to be true
    // and requiere both to be true 
}
// setting a max number and a minum number and a value to test this 
var myMaxLimit = 20;
var myMinLimit = 5;

var myValue = 19;
// if 19 is less than our max and our value and greater than our min to test this 
if (myValue < myMaxLimit && myValue > myMinLimit)
{// displayes in the console that the vaule string 19 is between myminlime and max
    console.log("The value " + myValue + " is between " + myMinLimit + "and " + myMaxLimit);
    // if false it isn't between mymin and max
} else{
    console.log("The value " + myValue + " is not between " + myMinLimit + "and " + myMaxLimit);
}
// creating new limits
var myMaxLimit = 5;
var myMinLimit = 1;
var myMaxLimit = 3;
var myMinLimit = 1;
// creates x and y vualses
var myXValue = 6;
var myYValue = 2;
// created the if staments 
if ((myXValue < myMaxLimit && myXValue > myMinLimit) && (myYValue < myMaxLimit && myYValue > myMinLimit))
{// displays are within
    console.log("Both the X and Y values are within the limits");
    // displays if are outside 
}else {
    console.log("One or both the X and Y values are outside of the limits");
}
// not opertoar if false now true if true now false 
var myBoolean = false;;
// var myboolean name is = false
if (!myBoolean)
//not opertoer 
{
    console.log("NOT false is true");
    // displays not false is true
}