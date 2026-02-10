// task 1: The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
// Will the function work differently if else is removed?
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
// Is there any difference in the behavior of these two variants?


// no there is no difference between the two they will behave the same way because when checking if condition, if the age is over 18
// it will break from the function and return true ignoring the rest of the funciton


/* task 2: The following function returns true if the parameter age is greater than 18.
Otherwise it asks for a confirmation and returns its result.
*/
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
/*Rewrite it, to perform the same, but without if, in a single line.
Make two variants of checkAge:
Using a question mark operator ?
Using OR || */

function checkAge(age){ 
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}


// task 3: Write a function min(a,b) which returns the least of two numbers a and b.

function min(a, b){
    return (a < b) ? a : b;
}

// task 4: Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x, n){
    return x**n;
}

// task 4 continuation in functions.html