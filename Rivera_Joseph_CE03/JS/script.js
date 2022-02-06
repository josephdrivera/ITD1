//alert("is This working?");

/* Rivera Joseph
Feb. 6, 2022
2.2 Code Exercise 03: Let's Go Shopping
*/

//Global Variables
let nameItem = prompt("What is the name of the first item you want to buy?");
let priceItem = parseFloat(
    prompt("What is the price of the " + nameItem + "?")
);
let itemAmount = Number(
    prompt("How many of the " + nameItem + " do you want to buy?")
);

let nameItem2 = prompt("What is the name of the second item you want to buy?");
let priceItem2 = parseFloat(
    prompt("What is the price of the " + nameItem2 + "?")
);
let itemAmount2 = Number(
    prompt("How many of the " + nameItem2 + " do you want to buy?")
);

let salesTax = parseFloat(prompt("What is the sales tax rate?"));

//Calculations variables
let totalPrice = itemAmount * priceItem;
let totalPrice2 = itemAmount2 * priceItem2;

let totalSalestax = totalPrice * totalPrice2 * (1 + salesTax);

//calculate the total cost of the item

console.log(
    "(" +
        itemAmount +
        ")" +
        " " +
        nameItem +
        "(s)" +
        " @ " +
        "$" +
        priceItem +
        " = $" +
        totalPrice
);

console.log(
    "(" +
        itemAmount2 +
        ")" +
        " " +
        nameItem2 +
        "(s)" +
        " @ " +
        "$" +
        priceItem2 +
        " = $" +
        totalPrice2
);

console.log("Subtotal Before Tax: $" + (totalPrice + totalPrice2));

console.log("Sales Tax: $" + totalSalestax);
