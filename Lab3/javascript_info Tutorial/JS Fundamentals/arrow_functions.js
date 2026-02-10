// lesson examples
// often better alternative to function expressions
let sum = (a, b) => a + b;

//its the same as
let summ = function(a, b){
    return a + b;
}


let double = n => n * 2;

let sayHi = () => alert('Hello'); // parentheses must be present even if empty
// can be used to dynamicallyu create a function as well
let age = prompt("Enter your age: ", '');

let welcome = (age < 18) ?
            () => alert('hello') :
            () => alert('Greetings!');

welcome();

// task: Replace Function Expressions with arrow functions in the code below:
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

// replacing with arrow functions:

ask(
    "Do you agree?",
    () => alert('You agreed'),
    () => alert('You canceled the execution.')
);