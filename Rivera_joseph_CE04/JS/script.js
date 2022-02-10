/* Rivera Joseph
Feb. 9, 2022
2.5 Code Exercise 04: Conditionals
*/

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
