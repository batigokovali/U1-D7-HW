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
let isMale = gender ? "fale" : "female";
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

let ex6_str1 = "epi";
let ex6_str2 = "code";

if ((parseInt(ex6_str1))>parseInt(ex6_str2))
{
    console.log("str1 is longer than str2");
}
 else {
    console.log("str2 is longer than str1");
 }



/*EX 7image.png
 Write a piece of code for checking if a given value is a integer or not.
*/

let ex7_value = 6;

if (ex7_value % 1 === 0)
{
    console.log("The number is an integer.");
} else {
    console.log("The number is not an integer.");
}



/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let ex8_Number = 100;
let ex8_DesiredPercentage = 50;

let ex8_PercentageCalculator = ex8_Number * (ex8_DesiredPercentage/100);
console.log("%" + ex8_DesiredPercentage + " of " + ex8_Number + " is: " + ex8_PercentageCalculator);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let ex9_number = 4;

if ((ex9_number) % 2 === 0) 
{
    console.log("ex9_number is even an even number.");
} else {
    console.log("ex9_number is an odd number.")
}