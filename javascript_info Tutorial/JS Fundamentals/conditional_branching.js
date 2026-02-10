// task 1: Will alert be shown?

if ("0") {
  alert( 'Hello' );
} 
// yes, alert will show Hello because "0" is true so the condition will always execute


// task 2: Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

let jsName = prompt("What is the official name of JavaScript? ", "JS");
if(jsName == ECMAScript) {
    alert("Right!");
} else {
    alert("You don't know? ECMAScript!");
}

/* task 3: Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.*/

let number = prompt("Enter your number: ", "num");

if(num > 0){
    alert(1);
} else if(num < 0){
    alert(-1);
} else if(num == 0){
    alert(0);
} else {
    alert("Enter a number!");
}

// task 4: Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
// answer:
result = (a + b < 4) ? 'Below' : 'Over';


// task 5: Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

message = (login == 'Employee') ? 'Hello':
            (login == 'Director') ? 'Greetings':
            (login == '') ? 'No login' : 
            '';