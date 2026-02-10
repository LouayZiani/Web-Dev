// examples from the lesson 

// there 8 basic data types in JS: number, bigInt, string, null, undefined, symbol, object, boolean

// variable can be a string then store a number (dynamically typed)
let message = "hello";
message = 123456;


alert(1 / 0); // will output : infinity
alert("not a number" / 2); // will out output : NaN --> computational error
// Nan ** 0 is 1


// bigInt
const bigInt = 1234567890123456789012345678901234567890n;// we add n at the end of the integer

// string 
let str = "Hello";
let str1 = 'Single quotes r okay too';
let phrase = `can embed another ${str}`; // we need to use the backtick `` instead of quotes

// in JS there is no character type : char

// Boolean
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1;
alert(isGreater);

// undefined
let age;
alert(age); // it will show undefined

// null value 
let age1 = null;

// objects and symbols -- later on
// typeof returns type of operand
typeof undefined;
typeof 0;
typeof "foo";


// task 1
let name = "Ilya";

alert( `hello ${1}` ); // output: hello 1

alert( `hello ${"name"}` ); // output: hello name

alert( `hello ${name}` ); // output: hello Ilya