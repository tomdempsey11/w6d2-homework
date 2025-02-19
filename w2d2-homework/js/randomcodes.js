/* ------ RANDOM CODES ------ */

//Function to generate combination of characters
function generateCode() {
    //create variables to store generated codes and the type of characters we want to show as codes
    var code = ' '; //initialize to null value
    var getCode = ' ';
    var btnValue; //for button boolean variable
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'

    //generate character multiple times using a loop
    for (i = 1; i <= 8; i++) {
        var char = Math.random()* str.length; //random select a character from the variable
        code += str.charAt(char) //accumulate the generated character into a string of 8

    }
    return code; //return the final accumulated string when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//disable button
function disableButton(btnValue) {
    document.getElementById("submit").disabled = btnValue; //able/disable button
    if (btnValue == true) { //test if button is disabled or enabled
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(225, 225, 225, 0.5)";
        

    } else {
        //set button and label color with no transparency
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(225, 225, 225, 1)";
    }
}

// Generate the code and store it globally
var generatedCode = generateCode();
document.getElementById("codes").innerHTML = generatedCode;

// Listen to user input
var codebox = document.getElementById("codeentered"); // Ensure your HTML input has id="codeentered"
codebox.addEventListener("input", evaluateCode);

// Function to evaluate the user-entered code against the generated code
function evaluateCode() {
    var userInput = document.getElementById("codeentered").value; // get user input
    var charset1 = userInput.trim(); // remove extra whitespace from input
    var charset2 = generatedCode.trim(); // remove extra whitespace from generated code
    
    // Check if the user input matches the generated code
    if (charset1.length === charset2.length && charset1 === charset2) {
        disableButton(false); // Enable the button if there's a match
    }
}


