// task 1: What is the code below going to output?

alert( null || 2 || undefined ); // output: 2

// task 2: What will the code below output?

alert( alert(1) || 2 || alert(3) ); // output: 1, and then 2

// task 3: What is this code going to show?

alert( 1 && null && 2 ); // output: null

// task 4: What will this code show?

alert( alert(1) && alert(2) ); // output: 2, then : undefined

// task 5: What will the result be?

alert( null || 2 && 3 || 4 ); // output: 3

// task 6: Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.

let age = prompt("Enter your age: ", 0);
if(age >= 14 && age <= 90) {
    alert("Valid age");
} else {
    alert("Invalid age");
}

// task 7: Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.

// first variant
if(!(age >= 14 && age <=90));
//second variant
if(age < 14 || age > 90);


// task 8: Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' ); // will be executed
if (-1 && 0) alert( 'second' ); // will NOT be executed
if (null || -1 && 1) alert( 'third' ); // will be executed


/* task 9: Write the code which asks for a login with prompt.
If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, 
if it’s another string – then show “I don’t know you”.
The password is checked as follows:
If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”*/

let login = prompt("Enter your login dets: ", "username");

if(login === "Admin"){
    let pass = prompt("Enter password: ", "password");

    if(pass ==- "TheMaster") {
        alert("Welcome");
    } else if (pass === "" || pass == null){
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
    
} else if (login === "" || login === null){
    alert("Cancelled");
} else {
    alert("I don't know you");
}

