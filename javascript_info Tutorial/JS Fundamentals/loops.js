// task 1: What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  alert( i-- );
} 
// last value alerted is 1, because after executing alert(1--), the output will be one and then the value will become 0 which is 
// false, so there willl be no next iteration

// task 2: For every loop iteration, write down which value it outputs and then compare it with the solution.
// Both loops alert the same values, or not?

let j = 0;
while (++j < 5) alert( j ); 
// 1st iteration: 1
// 2nd iteration: 2
// 3rd iteration: 3
// 4th iteration: 4

let k = 0;
while (k++ < 5) alert( k );
// 1st iteration: 1
// 2nd iteration: 2
// 3rd iteration: 3
// 4th iteration: 4
// 5th iteration: 5


// task 3: For each loop write down which values it is going to show. Then compare with the answer.
// Both loops alert same values or not?

for (let i = 0; i < 5; i++) alert( i ); // 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) alert( i ); // 0, 1, 2, 3, 4

// task 4: Use the for loop to output even numbers from 2 to 10.


for(let i = 2; i<=10; i++){
    if(i % 2 == 0){
        alert(i);
    }
}

// or:
let a = 2;

while(a <= 10){
    if(a % 2 == 0){
        alert(a);
    }
}

// task 5: Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

// in while loop:
let i = 0;
while(i < 3){
    alert(`number ${i}!`);
    i++;
}


/* task 6: Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.*/

let num; 

do {
    num = prompt("Enter a number greater than 100: ", "");
}
while(num <= 100 && num);


/* task 7: prime numbers. An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
Write the code which outputs prime numbers in the interval from 2 to n.
For n = 10 the result will be 2,3,5,7.
P.S. The code should work for any n, not be hard-tuned for any fixed value.*/
let n;

nextprime : // this is a label
for(let i = 2; i<n; i++){
    for(let j = 2; j<i; j++){
        if(i % j == 0){
            continue nextprime;
    
        }
    }
    alert(i);
}

