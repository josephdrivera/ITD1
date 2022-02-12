/* Rivera Joseph
Feb. 9, 2022
2.5 Code Exercise 04: Conditionals
*/

alert("Welcome to the 2.5 Code Exercise 04: Conditionals!");
alert("Please Open the console to start.");
alert("Please enter your score.");

//Grade Letter Calculator
// ask the user for a grade
let score = parseInt(prompt("what is your score?"));

/* convert the score to a letter grade
 * if the score is greater than or equal to 90, the letter grade is A
 * if the score is greater than or equal to 80, the letter grade is B
 * if the score is greater than or equal to 70, the letter grade is C
 * if the score is greater than or equal to 60, the letter grade is D
 * if the score is less than 60, the letter grade is F
 * otherwise the letter grade is an error message
 */
if (score >= 90) {
    letterGrade = "an A"; // A
    console.log("You got an A");
} else if (score >= 80) {
    letterGrade = "a B"; // B
    console.log("You got a B");
} else if (score >= 70) {
    letterGrade = "a C"; // C
    console.log("You got a C");
} else if (score >= 60) {
    letterGrade = "a D"; // D
    console.log("You got a D");
} else if (score >= 50) {
    letterGrade = "an F"; // F
    console.log("You got an F");
} else {
    letterGrade = "an error"; // error
    console.log("you enter an invalid number");
}

console.log(
    "Your score is " + score + " and your letter grade is " + letterGrade
);

alert("Your score is " + score + " and your letter grade is " + letterGrade);

alert("Now let Continue to the Pumpkin Patch Pickers");

//Pumpkin Patch Pickers
// ask the user for a weight
//don't know if i did the math right
/*
Pumpkin Weight	Cost Per Pound
Up To Not Including 5.5 lbs.    $0.50 per pound
$1.00 per lbs. 5.5 to 10 lbs.    $0.75 per pound
Up To Not Including 10.75 lbs.   $1.00 per pound
$0.90 per lbs. 10.75 to 15 lbs.   $0.80 per pound
Up To Not Including 25 lbs.  $1.00 per pound
$0.80 per lbs. 25 to 30 lbs.  $0.75 per pound
Up To Not Including 50 lbs. $1.00 per pound
$0.70 per lbs. 50 to 60 lbs. $0.65 per pound
Up to and including 100 lbs. $1.00 per pound
$0.60 per lbs. 100 to 150 lbs. $0.55 per pound
Above 100 lbs. $1.00 per pound
$0.50 per lbs over 100 lbs.

*/

let weight = parseInt(prompt("what is the weight of the pumpkin?")); //weight of the pumpkin

if (weight <= 0) {
    console.log("invalid weight entered by user " + weight); // error
} else if (weight <= 5.5) {
    console.log(
        "Your pumpkin of " + weight + "lb weight will cost $" + weight * 1
    );
} else if (weight <= 10.75 && weight >= 5.5) {
    console.log(
        "Your pumpkin of " + weight + "lb weight will cost $" + weight * 0.9
    ); // $9.00
} else if ((weight) => 10.75 && weight < 25) {
    console.log(
        "Your pumpkin of " + weight + "lb weight will cost $" + weight * 0.8
    ); // $8.00
} else if ((weight) => 25 && weight < 50) {
    console.log(
        "Your pumpkin of " + weight + "lb weight will cost $" + weight * 0.7
    ); // $7.00
} else if ((weight) => 50 && weight < 100) {
    console.log(
        "Your pumpkin of " + weight + "lb weight will cost $" + weight * 0.6
    );
} else if (weight > 100) {
    console.log(
        "Your pumpkin of " + weight + "lb weight will cost $" + weight * 50
    ); // $50.00
} else {
    // error
    console.log("invalid weight entered by user " + weight); // error
}

//Loyalty Card

alert("Welcome to the Loyalty Card Program"); // welcome message

let itemPriceOne = parseFloat(prompt("What is the price of the First Item?")); // price of the first item

console.log("The price of the first item is $" + itemPriceOne); // price of the first item

let itemPricetTwo = parseFloat(
    prompt("What is the price of the  Second Item?")
); // price of the second item

console.log("The price of the second item is $" + itemPricetTwo); // price of the second item

let member = prompt("Are you a member? (yes or no)");
console.log("Are you a member? " + member); // are you a member?

let total = itemPriceOne + itemPricetTwo;
console.log("The total price of the items is $" + total); // total price of the items

let memberLoyaltyDiscount = total * 0.15; // 15% discount for members
let nonMemberLoyaltyDiscount = total - memberLoyaltyDiscount; // 15% discount for non members

if (member === "yes") {
    console.log(
        "You have a member loyalty discount of $" + memberLoyaltyDiscount + "."
    );
    console.log("Your total is $" + nonMemberLoyaltyDiscount);
} else if (member === "no") {
    console.log(
        "You have a non member loyalty discount of $" +
            nonMemberLoyaltyDiscount +
            "."
    );
    console.log("Your total is $" + nonMemberLoyaltyDiscount);
} else {
    console.log("invalid entry");
} // error message
