/*task: Consider the following code:
What do you think, will it work? What will be shown? */

let str = "Hello";

str.test = 5;

alert(str.test); // error, cuz its a primitive not an object, it cant store extra data