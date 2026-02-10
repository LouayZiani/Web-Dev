// lesson notes 

let user = {
    name: 'John'
}; 

let admin = user;
admin.name = 'Pete';

alert(user.name);

// const objects can be modified

// cloning and merging: object.assign
let user1 = {
    name: 'John'
};

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copy properties from permissions1 and permissions2 into user , if copied propierty name exists, it gets overwritten
Object.assign(user, permissions1, permissions2);

user1.canView; // true
user1.canEdit; // true

// we can use Object.assign to clone
let clone = Object.assign({}, user);

// Structured cloning (deep cloning) -- very useful for bested objects
let man = {
    name: 'John',
    age: 30,
    sizes: {
        height: 182,
        width: 50
    }
};

let cloned = structuredClone(man);
