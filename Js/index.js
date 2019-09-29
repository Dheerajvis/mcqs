var nameInput = document.getElementById("input-name");
var passwordInput = document.getElementById("input-password");
var name;
var password;


function showName() {
    name = nameInput.value;
    password = passwordInput.value;
    console.log(name);
    console.log("Hii");
    if (name === "Dheeraj" && password == "12345") {
        console.log("true you can Log-in");
        var logInBox = document.getElementsByClassName("log-in-box");
        logInBox.style.transform = " scale(0,0);"
    } else {
        console.log("You can't Log-in");
    }
};


