// transpillers: translates source code to another source code

// before running the transpiler
height = height ?? 100;

// after running the transpiler
height = (height !== undefined && height !== null) ? height : 100;

/* polyfills:
As we’re talking about new functions, not syntax changes, there’s no need to transpile anything here.
We just need to declare the missing function.
A script that updates/adds new functions is called “polyfill”. It “fills in” the gap and adds missing implementations.*/

Math.trunc(n) // in newer js version
// will be polyfilled to:
if (!Math.trunc) { // if no such function
  // implement it
  Math.trunc = function(number) {
    // Math.ceil and Math.floor exist even in ancient JavaScript engines
    // they are covered later in the tutorial
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}