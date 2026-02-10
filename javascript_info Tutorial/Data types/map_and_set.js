// lesson notes
// maps: just like objects, keys are not converted to strings
// methods:
// new Map()
//  map.set(key, value)
// Map.get(key)
// map.has(key)
// map.delete(key)
// map.clear()
// map.size

// for looping over a map, there is 3 methods:
// map.keys()
// map.values()
// map.entries()

// create map from object: Object.entries()
// create object from map: Object.fromEntries()


// Set: set of values (w/o keys) where each valu emay occur only ONCE, its methods:
// new Set([iterable]);
// set.add(value);
// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// task 1: Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.


function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O
// P.S. Here strings are used, but can be values of any type.
// P.P.S. Use Set to store unique values.


// task 2: Anagrams are words that have the same number of same letters, but in different order.
/*For instance:
nap - pan
ear - are - era
cheaters - hectares - teachers
Write a function aclean(arr) that returns an array cleaned from anagrams.*/

function aclean(arr) {
    let map = new Map();

    for(let word in arr){

        let sorted = word
                    .toLowerCase()
                    .split('')
                    .sort()
                    .join('');
        
        map.set(sorted, word);
    }
    return Array.from(map.values);
}


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
// From every anagram group should remain only one word, no matter which one.



// task 3: We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
// But that doesn’t work:

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); // i edited this one so that the keys are stored in an array so we van apply array-specific operations

keys.push("more");
// Why? How can we fix the code to make keys.push work?