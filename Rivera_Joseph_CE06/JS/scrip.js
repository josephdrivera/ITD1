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

//Movie Start
document.querySelector("#Ranking").addEventListener("click", function (e) {
    //when button is clicked
    if (
        document.querySelector("#numDvds").reportValidity() &&
        document.querySelector("#numBlurays").reportValidity() &&
        document.querySelector("#numVvs").reportValidity()
    ) {
        let numDvds = parseInt(document.querySelector("#numDvds").value);
        let numBlurays = parseInt(document.querySelector("#numBlurays").value);
        let numUvs = parseInt(document.querySelector("#numVvs").value);

        let totalMovies = numDvds + numBlurays + numUvs;
        if (totalMovies < 50) {
            //if less than 50
            document.querySelector(
                "#Results"
            ).innerHTML = `Your collection contains  ${totalMovies} you are a bronze star member!`;
            document.querySelector("#bronze").src = "IMG/bronzeStar.jpg"; //display bronze star
        } else if (totalMovies >= 50 && totalMovies <= 100) {
            //if between 50 and 100
            document.querySelector(
                "#Results"
            ).innerHTML = `Your collection contains  ${totalMovies} you are a silver star member!`;
            document.querySelector("#bronze").src = "IMG/silverStar.jpg"; //display silver star
        } else if (totalMovies > 100) {
            //if more than 100
            document.querySelector(
                "#Results"
            ).innerHTML = `Your collection contains ${totalMovies}  you are a gold star member!`;
            document.querySelector("#bronze").src = "IMG/goldStar.jpg"; //display gold star
        }
    }
});
