//alert("is this working?");
/* Rivera Joseph
Feb. 26, 2022
4.2 Code Exercise 07: Final Project
*/

document.querySelector("#calculateBMI").addEventListener("click", function (e) {
    //when button is clicked
    if (
        document.querySelector("#heightFeet").reportValidity() && //check if input is valid
        document.querySelector("#heightInc").reportValidity() &&
        document.querySelector("#weight").reportValidity()
    ) {
        let feetHt = parseInt(document.querySelector("#heightFeet").value);
        let inchHt = parseInt(document.querySelector("#heightInc").value);
        let lbsWt = parseInt(document.querySelector("#weight").value);
        let height = parseInt(feetHt * 12 + inchHt);

        let calculateBMI = parseInt(703 * (lbsWt / (height * height))).toFixed(
            1
        ); //calculate BMI

        if (calculateBMI < 18.5) {
            document.querySelector(
                "#finalResults"
            ).innerHTML = `Your BMI is ${calculateBMI}, indicating your weight is in the under weight range for adults of your height.`;
            document.querySelector("#imgWeight").src = "IMG/underWeight.jpg";
        }
        if (calculateBMI >= 18.5 && calculateBMI <= 24.9) {
            document.querySelector(
                "#finalResults"
            ).innerHTML = `Your BMI is ${calculateBMI}, indicating your weight is in the Normal or Healthy range for adults of your height.`;
            document.querySelector("#imgWeight").src = "IMG/healthyWeight.jpg";
        }
        if (calculateBMI <= 25.0 && calculateBMI >= 29.9) {
            document.querySelector(
                "#finalResults"
            ).innerHTML = `Your BMI is ${calculateBMI}, indicating your weight is in overweight range for adults of your height.`;
            document.querySelector("#imgWeight").src = "IMG/overWeight.jpg";
        }
        if (calculateBMI >= 30.0 && calculateBMI <= 35) {
            document.querySelector(
                "#finalResults"
            ).innerHTML = `Your BMI is ${calculateBMI}, indicating your weight is in the obese range for adults of your height.`;
            document.querySelector("#imgWeight").src = "IMG/obeseWeight.jpg";
        }
        if (calculateBMI > 35) {
            document.querySelector(
                "#finalResults"
            ).innerHTML = `Your BMI is ${calculateBMI}, indicating your weight is in the extreme obese for adults of your height.`;
            document.querySelector("#imgWeight").src =
                "IMG/extremeObeseWeight.jpg";
        }
    }
});
