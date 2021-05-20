// JavaScript Document
var myVariable = 5;
// create a varaible nummber named myvaribale whihc is 5
var msg = "myVariable is equal to " + myVariable + " and is a " + typeof myVariable;
// created a string the contains the vaule of the varible and use tyoeof statement to tell us it is string or number
console.log(msg);
// send that to the console 

myVariable = myVariable.toString();
// changed into a string with the .toString 
var msg = "myVariable is equal to " + myVariable + " and is a " + typeof myVariable;
// created a string the contains the vaule of the varible and use tyoeof statement to tell us it is string or number
console.log(msg);
// send that to the console 

myVariable += 1;
// added 1
var msg = "myVariable is equal to " + myVariable + " and is a " + typeof myVariable;
// created a string the contains the vaule of the varible and use tyoeof statement to tell us it is string or number
console.log(msg);
// send that to the console 


myVariable = Number(myVariable) + 1;
// added one 
var msg = "myVariable is equal to " + myVariable + " and is a " + typeof myVariable;
// created a string the contains the vaule of the varible and use tyoeof statement to tell us it is string or number
console.log(msg);
// send that to the console 


myVariable = Number("1,234.56");
// give it a vaule console doesn't know what to do with it becuase of the comma
var msg = "myVariable is equal to " + myVariable + " and is a " + typeof myVariable;
// created a string the contains the vaule of the varible and use tyoeof statement to tell us it is string or number
console.log(msg);
// send that to the console 