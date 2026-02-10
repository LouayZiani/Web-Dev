let value = true;
alert(typeof value); // will show boolean

// convert to string
value = String(value);
alert(typeof value); // now will show string

// strings to numbers
/*implicitly*/
alert("6" / "2"); // will ouput 3 cuz its math operation

/*explicitly*/ 
let str = "123";
alert(typeof str);

let num = Number(str);
// Number(undefined) --> NaN and not 0
alert(typeof num);

// conversion to boolean
alert(Boolean(1)); // true
alert(Boolean(0)); // false

alert(Boolean("Hello")); // true
alert(Boolean("")); // false

