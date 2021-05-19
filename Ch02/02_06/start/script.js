// JavaScript Document

var subtotal = 15.00;
// varible that holds subtotal of 15

console.log("Subtotal: " + subtotal);

// output that to the console log need to add a way to cacule the tax
// create a new function that will create the tax 


var total = subtotal + calculateTax(0.08, subtotal);
// the toal is going to equl the subtoatl which is 15 add the caculte tax number and the sub of 15
console.log("Total: " + total);
// reads in the console string total total 

// made a funtion to do the work
function calculateTax(taxRate, amountToTax)
{
      var tax = amountToTax * taxRate;
     console.log("Tax: " + tax);
     return tax;
// ended my code as a return 
// reads in the conlsoe times the time the tax to the amount
}