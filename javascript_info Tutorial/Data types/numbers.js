// lesson notes 
// syntactic sugar: the underscore _
let billion = 1000000000;
// same as:
billion = 1_000_000_000;

let million = 1e6 // e specifies the number of zeroes

// task 1: Create a script that prompts the visitor to enter two numbers and then shows their sum.
let num1 = +prompt("Enter first number: ", '');
let num2 = +prompt("Enter second number: ", '');

let sum = num1 + num2;
alert(sum.toFixed(3));

//  task 2: According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.
// For instance:
alert( 1.35.toFixed(1) ); // 1.4

// In the similar example below, why is 6.35 rounded to 6.3, not 6.4?
// answer: because there is precision loss, the fraction 6.35 is an endless binary.

alert( 6.35.toFixed(1) ); // 6.3
// How to round 6.35 the right way?
// answer: we can use the multiply/divide approach, and then use the round function

alert(Math.round(6.35 * 10) / 10);


// task 3: Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
// The resulting value must be returned as a number.
// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

function readNumber() {
    let input;

    do {
        input = prompt("Enter a number: ", '');
    } while ( !isFinite(input) );

    if(input === '' || input === null){
        return null;
    }

    return +input;
}


// task 4: This loop is infinite. It never ends. Why?

let i = 0;
while (i != 10) {
  i += 0.2;
}

// the loops never ends because i will never be exactly 10
// in js, there will always be some precision loss that will prevent the number from being exactly 10 here
// it will be 10 plus some smalll decimal value



// task 5: The built-in function Math.random() creates a random value from 0 to 1 (not including 1).
// Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

function random(min, max) {
    return min + Math.random() * (max - min); 
}
// this is how it works: so Math.random() generates nums btwn 0 and 1(excluded), so if we mul it by max-min it will generate from
// 0 to max-min .. les add min to this now et voila on a l'intervalle min...max

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525



// task 6: Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.
// Any number from the interval min..max must appear with the same probability.
function randomInteger(min, max) {
    let num = min + Math.random() * (max + 1 - min);
    return Math.floor(num);
}

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5