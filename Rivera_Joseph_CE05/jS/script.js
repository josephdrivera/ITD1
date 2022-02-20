/* Rivera Joseph
february 19, 2022
3.4 Code Exercise 05: QuerySelector
*/

/*
Problem #1 – Discount Double-Check
In this problem, you will be prompting the user for the price of 2 items bought at a store and give them a discount based on their total.


/* prompt the user for prices of two items. Then give them a discount based on their total. */

alert("Discount Double-Check");
alert(
    "I will ask your for the prices of 2 items and then calculate your total,with any discounts that apply!"
);
alert("Let's go shopping!");

//variable for price of items

let item1 = parseFloat(
    prompt(
        "How much did you pay for your first item?(Please enter a number with no dollar sign or commas ex: 12.99)"
    )
); //`parseFloat` is a function that converts a string to a number.
let item2 = parseFloat(
    prompt("How much did you pay for your second item? (ex. 10.99)")
); //`parseFloat` is a function that converts a string to a number.
let totalCost = (item1 += item2); //`+=` is a function that adds the second number to the first number.
let discountOne = parseFloat((totalCost -= totalCost *= 0.1)); //`parseFloat` is a function that converts a string to a number.
let discountTwo = parseFloat((totalCost -= totalCost *= 0.05)); //`parseFloat` is a function that converts a string to a number.

//output
document.querySelector(
    "#firstItem"
).innerHTML = `This is the first item is $ ${item1.toFixed(2)}.`;
document.querySelector(
    "#secondItem"
).innerHTML = `This is the second item is $ ${item2.toFixed(2)}.`;
//`toFixed` is a function that rounds a number to a certain number of decimal places.
if (totalCost >= 100) {
    document.querySelector(
        "#totalCost"
    ).innerHTML = `Your total purchase is $ ${discountOne.toFixed(
        2
    )}, which includes your 10% discount.`;
    if (totalCost >= 100) {
        document.querySelector("#totalCost").style.backgroundColor = "Green";
    }
} else if (totalCost >= 50 && totalCost <= 100) {
    document.querySelector(
        "#totalCost"
    ).innerHTML = `Your total purchase is $ ${discountTwo.toFixed(
        2
    )}, which includes your 5% discount.`;
    if (totalCost >= 50 && totalCost <= 100) {
        document.querySelector("#totalCost").style.backgroundColor = "Green";
    }
} else if (totalCost < 50) {
    document.querySelector(
        "#totalCost"
    ).innerHTML = `Your total purchase is $ ${totalCost.toFixed(2)}.`;

    if (totalCost < 50) {
        document.querySelector("#totalCost").style.backgroundColor = "yellow";
    }
} else {
    alert("Please enter your details again");
}

//Problem #2 – Last Gas Station For Miles

/* alert("Last Gas Station For Miles");
/*prompt the user for the number of miles they have driven and the number of miles they have left to drive. */

let gasAmount = parseFloat(prompt("How much gas can your car hold?"));
let amountLeft = parseFloat(prompt("How much gas do you have left?(ex. 50%)"));
let amountMiles = parseFloat(prompt("How many Miles can your car get?"));

// don't think I'm doing the math right
currentMiles = amountLeft / 100;
let totalMiles = currentMiles * gasAmount;
let milesLeft = gasAmount * totalMiles;

document
    .querySelector("#buttonText") // shows the text
    .addEventListener("click", function (e) {
        if ((milesLeft) => amountLeft) {
            document.querySelector(
                "#showText"
            ).innerHTML = `Yes you can drive ${milesLeft}, miles and you can make it without gating for gas.`;
        } else if (milesLeft <= amountLeft) {
            document.querySelector(
                "#showText"
            ).innerHTML = `You can only drive ${milesLeft}, miles more, better get gas NOW!!!!`;
        }
    });

document
    .querySelector("#showGraphic") // show the graphic
    .addEventListener("click", function (e) {
        if ((milesLeft) => amountLeft) {
            document.querySelector("#enoughGas").src = "IMG/enoughGas.jpg";
        } else if (milesLeft <= amountLeft) {
            document.querySelector("#enoughGas").src = "IMG/notEnoughGas.jpg";
        }
        document.querySelector("#enoughGas").style.visibility = "visible";
    });
