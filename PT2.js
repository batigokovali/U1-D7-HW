// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

//function gender(isMale) {
//    return (isMale ? 'male' : 'female')
//}
//console.log(gender(true));
//console.log(gender(false));

let gender = "female"
let isMale = gender ? "Male" : "Female";
console.log(gender);

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let int1 = 4; 
let int2 = 8;
let intSum = int1 + int2;

let intChecker = ((int1 === 8) || (int2 === 8)) || (intSum===8);
console.log(intChecker);

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let ex3_var1 = "epi"
let ex3_var2 = "code"
let ex3_varConcatenation = ex3_var1 + ex3_var2;
console.log(ex3_varConcatenation);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let ex4_var1 = 1;
let ex4_var2 = 2;
let ex4_var3 = 3;

if (ex4_var1 > ex4_var2 && ex4_var1>ex4_var3) 
{
    if (ex4_var2>ex4_var3) 
    {
        console.log(ex4_var1 + " > " + ex4_var2 + " > " + ex4_var3);
    }
    else
    {
        console.log(ex4_var1 + " > " + ex4_var3 + " > " + ex4_var2);
    }
}
else if  (ex4_var2>ex4_var1 && ex4_var2>ex4_var3)
{
    if (ex4_var1>ex4_var3)
    {
        console.log(ex4_var2 + " > " + ex4_var1 + " > " + ex4_var3);
    }
    else
    {
        console.log(ex4_var2 + " > " + ex4_var3 + " > " + ex4_var1);
    }
}
else if (ex4_var3>ex4_var1 && ex4_var3>ex4_var2)
{
    if (ex4_var1>ex4_var2)
    {
        console.log(ex4_var3 + " > " + ex4_var1 + " > " + ex4_var2);
    }
    else
    {
        console.log(ex4_var3 + " > " + ex4_var2 + " > " + ex4_var1);
    }
}

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let ex5_int1 = 5;
let ex5_int2 = 10;
let ex5_AverageFinder = (ex5_int1 + ex5_int2) /2;
console.log("Average of int1 and int2 is:", ex5_AverageFinder);


/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE */
