/* a ?? b --> if a is defined then a, if a isn't defined then b
- everything is defined if != undefined or null

*/

let result = a ?? b;
// same thing as:
result = (a !== null && a !== undefined) ? a : b;

let user;

alert(user ?? "Anonymous") // mostly used for assigning default value

let firstName = null;
let lastName = null;
let nickName = 'SuperCoder';

alert(firstName ?? lastName ?? nickName); // Supercoder, because it finds fist defined value

// differences:
// || returns first truthy value
// ?? returns first defined value

let height = 0;

alert(height || 100); // returns 100
alert(height ?? 100); // returns 0

