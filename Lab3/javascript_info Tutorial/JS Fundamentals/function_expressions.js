let sayHi = function() {
    alert('Hello');
}; // semi-colon is recommended at the end unlike functions

// function is created in middle of expression: function expression
sayHi();

function sayHi(){
    alert("Hi!");
}
let func = sayHi;
func(); // prints Hi!
sayHi(); // prints Hi!

// differences btwn functions expressions and function declarations:
// fct expressions can only be called after declaration, fct declarations can be called before 