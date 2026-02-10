// push() : adds elements to the end of the array
// pop(): removes elements from end of array
// shift(): removes element from beginning of Array
// unshift(): adds elements to beginning of array 

// task 1: What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits? ==> my answr: ["Apples", "Pear", "Orange", "Banana"]
// alert( fruits.length ); // 4


// task 2: Let’s try 5 array operations.
/* Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
The array in the process:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll*/

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

let mid = Math.floor((styles.length - 1)/ 2);
styles[mid] = "Classics";

console.log(styles.shift());

styles.unshift("Rap", "Reggae");
for(let style of styles){
    console.log(style);
}


// task 3: What is the result? Why?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // result will be: a,b,function(), because after all array is an object so "this" will behave same way as in object


// task 4: Write the function sumInput() that:
// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.


function sumInput() {
    let nums = [];

    while(true) {
        let val = +prompt("Enter a value: ", '');

        if(val === '' || val === null || !isFinite(val)) {
            break;
        }

        nums.push(val);
    }

    let sum = 0;
    for(let num in nums){
        sum += num;
    }

    return sum;
}
alert(sumInput);


// task 5: The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
// The task is: find the contiguous subarray of arr with the maximal sum of items.
// Write the function getMaxSubSum(arr) that will return that sum

/*For instance:

getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)
If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:
getMaxSubSum([-1, -2, -3]) = 0*/

function getMaxSubSum(arr) {
    let sum = arr[0];
    let currentSum = 0;
    
    for(let num of arr){
        if(num > 0){
            currentSum += num;
        }

        if(num > currentSum){
            currentSum = num;
        }

        if(currentSum > sum) {
            sum = currentSum;
        }
    }
    return sum;
}

// fast working solution
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0