/* Rivera Joseph
Feb. 20, 2022
3.6 Code Exercise 06: HTML Forms
*/

// gallon input multiply by radio input and display in the corresponding field.

document.querySelector("#convertGal").addEventListener("click", function (e) {
    //debugging
    if (document.querySelector("#gallonsNumo").reportValidity()); //check if input is valid

    if (document.querySelector("#quarts").checked) {
        let amtQuarts = parseFloat(
            document.querySelector("#gallonsNumo").value
        ); //convert to float
        amtQuarts *= 4; //multiply by 4
        let totalQuarts = document.querySelector("#amtQuarts");
        totalQuarts.value = amtQuarts; //display
    } else if (document.querySelector("#pints").checked) {
        let pintsAmt = parseFloat(document.querySelector("#gallonsNumo").value);
        pintsAmt *= 8; //multiply by 8
        let totalPints = document.querySelector("#pintsAmt");
        totalPints.value = pintsAmt; //display in field
    } else if (document.querySelector("#cups").checked) {
        let cupsAmt = parseFloat(document.querySelector("#gallonsNumo").value);
        cupsAmt *= 16; //multiply by 16
        let totalCups = document.querySelector("#cupsAmt");
        totalCups.value = cupsAmt; //display in field
    }
}); //end of convertGallon function
