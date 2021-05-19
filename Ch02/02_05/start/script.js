// JavaScript Document

// Create variable outside of a function
// created a var which is 5
var outsideValue = 5;

// Output variables to the console
//console.log("From outside: outsideValue = " + outsideValue);
// outisdevalue is the vaule we just created
//console.log("From outside: functionValue = " + functionValue);
//fucntionvaule that is created in the fucation later on the code
// we get error in the conole cuase functionvaule isnt created yet cuase myfuction isnt scoped correctly
// we comment out the log staments to atler the statments

myFunction();
// uncomment the myfunction statment now a varible is created function varible inside my fucntoin
// replicated lines 7 and 8 inside 28 and 29


// functionvale is not define was defined  my fucton varible is any varibke that is one fucntion and u leabe it and start another one u cant access it
// adding comment before code so it doesnt run trick

function myFunction()
{
    // Create variable insode of a function
    var functionValue = 10;

    // Output variables to the console
    console.log("From inside: outsideValue = " + outsideValue);
    console.log("From inside: functionValue = " + functionValue);
    myOtherFunction();
    // we moved it from up top
}

function myOtherFunction()
{
    // Output variables to the console
    console.log("From inside: outsideValue = " + outsideValue);
    console.log("From inside: functionValue = " + functionValue);
}