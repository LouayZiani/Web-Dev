// task 1: There is a salaries object with arbitrary number of salaries.
// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
// If salaries is empty, then the result must be 0.

function sumSalaries(salaries) {
    let sum = 0;
    for(let sal of Object.values(salaries)) {
        sum += sal;
    }

    return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650


// task 2: Write a function count(obj) that returns the number of properties in the object:

function count(obj) {
    return Object.keys(obj).length;
}

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
// Try to make the code as short as possible.
// P.S. Ignore symbolic properties, count only “regular” ones.