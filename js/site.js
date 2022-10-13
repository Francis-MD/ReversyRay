//Get the string from the page
//controller function
function getValue(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);

}

//Reverse the string
//logic function
function reverseString(userString){

    let revString = [];

    /* let name = Bobby
    name[0] = "B";
    name[4] = "y"; */
    // last position in an array name.length - 1

    //reverse a string using a for loop

    for(let i = userString.length - 1 ; i >= 0; i--) {
        revString += userString[i];
    }

    return revString;

}


//Display the reverse string to the user
//view function
function displayString(revString){

    //write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    //show the alert box
    document.getElementById("alert").classList.remove("invisible");

}