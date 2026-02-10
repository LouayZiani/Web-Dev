// sorting function: arr.sort( (a, b) => a - b) )
// arr.split(delim) == arr.split(", ")
// arr.join(glue) == arr.join(';')
// Array.isArray() -- checks if its array or nah


// task 1: Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.
/*
Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.*/

function camelize(str) {
    let arr = str.split("-");

    let result = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
    str = result.join('');

    return str;
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));


// task 2: Write a function filterRange(arr, a, b) that gets an array arr,
// looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.
/*For instance:
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)*/

// 1st method (long_)
function filterRange(arr, a, b) {
    let filtered = [];

    for(let el of arr) {
        if(el >= a && el <=b) {
            filtered.push(el);
        }
    }

    return filtered;
}

// better method:
function filterRange(arr, a, b) {

    return arr.filter(item => (a <= item && b >= item));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered );
console.log( arr );


// task 3: Write a function filterRangeInPlace(arr, a, b) that gets an array arr 
// and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.
/*For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]*/

function filterRangeInPlace(arr, a, b) {
    for(let i = 0; i < arr.length; i++){
        let value = arr[i];

        if(value < a || value > b) {
            arr.splice(i, 1); // i: starting index, 1: number of elemenets to delete
            i--;
        }
    }
}

let arr44 = [5, 3, 8, 1];

filterRangeInPlace(arr44, 1, 4); // removed the numbers except from 1 to 4

console.log( arr44 ); // [3, 1]


// task 4: Sort in decreasing order
let arr1 = [5, 2, 1, -10, 8];

function compare(a, b){
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}

arr1.sort(compare);

arr1.reverse();

console.log( arr1 ); // 8, 5, 2, 1, -10


// task 5: We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

let arr2 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

function copySorted(arr) {
    return arr.slice().sort();
}


// task 6: Create a constructor function Calculator that creates “extendable” calculator objects.
// The task consists of two parts.
// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited)
// and returns the result. Should understand plus + and minus -.
/*Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it.*/

function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  };

  this.calculate = function(str) {
    let split = str.split(' ');
    
    let a = +split[0];
    let op = split[1];
    let b = +split[2];

    if(!this.methods[op] || isNaN(a) || isNaN(b)){
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  }; 

}


// task 7: You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

// FOR CONVERTING USER OBJECT TO ARRAY OF NAMES WE USE: .MAP()
let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary


// task 8: You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => function() {
  fullName = `${user.name} + ' ' + ${user.surname} `;
  id = user.id;
})

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith


// Task 9: Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

function sortByAge(users) {
  users.sort((a, b) => a.age - b.age);
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete


// task 10: Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements

function shuffle(arr){
  arr.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...

// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] 
// or [3,1,2] etc, with equal probability of each case.


// task 11: Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
// The formula for the average is (age1 + age2 + ... + ageN) / N.

function getAverageAge(users) {
  let reduced =  users.reduce((sum, currentSum) => sum + currentSum, 0);
  return reduced / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// task 12: Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
  let arr1 = [];

  for(let el of arr){
    if(!arr1.includes(el)){
      arr1.push(el);
    }
  }

  return arr1;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

// task 13: Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

function groupById(arr) {
  return arr.reduce((obj, value) => {
    obj[value.id] =  value;
    return obj;
  }, {})
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}*/
// Such function is really handy when working with server data.
// In this task we assume that id is unique. There may be no two array items with the same id.
// Please use array .reduce method in the solution.