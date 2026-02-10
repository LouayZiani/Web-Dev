// lesson examples
let user1 = {
    name: 'John',
    age: 30
};

user1.sayHi = function(){
    alert('Hello!');
}

user1.sayHi(); // Hello!

// 2 ways to write the sayHi fct:
user1 = {
    sayHi: function(){
        alert('Hello!');
    }
}

//or -- this syntax is preferred
user1 = {
    sayHi() {
        alert('Hello!');
    }
}


// task 1: Here the function makeUser returns an object.
// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // result is error. because we cannot read property of something undefined


// task 2: Create an object calculator with three methods:
// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
    read() {
        this.a = +prompt("Enter a: ", '');
        this.b = +prompt("Enter b: ", '');
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// task 3: There’s a ladder object that allows you to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;    
  }
};
// Now, if we need to make several calls in sequence, we can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
// Modify the code of up, down, and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0