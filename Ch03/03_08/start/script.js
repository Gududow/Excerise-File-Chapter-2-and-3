// JavaScript Document
// use a for loop to preform actions and excess each elemnt indivualy

var myArray = ["Doug", "Mike", "Janet", "Matt"];
// for loop and created the irrible varible = zero which is the strarting point and verfity that is it less the length of the array when reaches 4 it will fail i is less than myarray.lenth 
for (var i = 0; i < myArray.length; i++)
{// displays in the conslue 
    console.log("Hello, " + myArray[i]);
}
//elemnt of the array 
for (varelement of myArray)
{// displats in the conlsue
    console.log("Good bye, " + element);
}