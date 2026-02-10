// lesson notes
// JSON methods:
// JSON.stringify(): to convert objects into JSON
//  && JSON.parse(): to convert JSON back into object
// example:
/*let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};

let json = JSON.stringify(student);
console.log(typeof json); // stringg
console.log(json);*/


//example 2:
/*let user = {
  sayHi() { // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};

alert( JSON.stringify(user) ); // {} (empty object)*/

// toJSON --> like toString for strings, this converts to JSON


// task 1: Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
};

let user_json = JSON.stringify(user);
let uno_reverse = JSON.parse(user_json);

// task 2: In simple cases of circular references, we can exclude an offending property from serialization by its name.
// But sometimes we can’t just use the name, as it may be used both in circular references and normal properties.
// So we can check the property by its value.
// Write replacer function to stringify everything, but remove properties that reference meetup:

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == "meetup") ? undefined : value;
}));

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/