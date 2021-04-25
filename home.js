// console.log sends a message in the web console; you can acces with F12
console.log("Hello world!");

// alert is a method used to display an alert box in the browser
alert("Hello world!");

// variables (var, let, const) used for storing data values
var number = (1 + 2) / 2 * 3;
// in JS variables can handle priority
console.log(number);

// concatenation with strings
var string = "Mercedes" + " " + "Benz";
console.log(string);

// concatenation with numbers & strings
var concat = "4" + 0 + 3;
console.log(concat); // the result will be 403, if you put a number in quotes the rest will be considered as a string

var concat_ = 4 * 10 + "4";
console.log(concat_); // the result will be 404, because JS start handle the calcultion

//  prompt is a method that display dialog box that prompts the user for input
var name = prompt("What's your name");
document.getElementById('text').innerHTML = name;