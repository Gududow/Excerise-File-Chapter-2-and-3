// JavaScript Document
// created a for statment that uses 0 to 24 createed irrtabke varibke which is i
// set i to 0 and set a condital test must be true before it runs ++ to increae it by one to test each loop
for (var i = 0; i < 25; i++)
{
    // display in the cosole our string and see what i to the power of 2 is 
    console.log("The square of " + i + " is " +Math.pow(i,2));
}
// created a muplication table crested 2 rows one is a and one is b
/*
1 2 3 4  5  6  7  8  9 10 11 12
2 4 6 7 10 12 14 16 18 20 22 24
*/
//created a loop one for the row and one for the colubm
for (var a = 0; a < 12; a++)
{// created a conditnal test so it isn higher than 12 and increase by one each time 
    // string that contains our numbers 
    var tableRow = "";

    for (var b = 1; b <=12; b++)
    {// a and b times 
        var product = a^b;
        var productString = product.toString() + "\t";
        tableRow += productString;
    }
// read in the consule the rows 
    console.log(tableRow);
}