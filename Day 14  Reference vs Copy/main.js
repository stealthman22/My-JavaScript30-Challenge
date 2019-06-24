// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);


// Result is because the value of age goes into the variable at the same time.
/* let name = 'Wes';
let name2 = name;
console.log(name, name2);
name = 'Wesley';
console.log(name, name2);
 */
//  Values of strings numbers and booleans go into it Hence if you change the original one, it will not update the other one. 

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];


// and we want to make a copy of it.
const team = players;
console.log(players, team);
// You might think we can just do something like this:
//team[3] = 'Lux';
//console.log(players);
// If you update an array it will always reference back 

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice(); // By slice

const team3 = [].concat(players); // By concat

const team4 = [...players]; // By spread
team4[3] = 'heeee hawwwww';
console.log(team4);

const team5 = Array.from(players); // By from;

// one way

// or create a new array and concat the old one in

// or use the new ES6 Spread

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
//const captain = person;
//captain.number = 99;

// how do we take a copy instead?
const cap2 = Object.assign({}, person, {
    number: 99,
    age: 15
}); // By assign. This method takes 3 arguments.
console.log(cap2);

// We will hopefully soon see the object ...spread

const cap3 = {
    ...person
};
console.table(cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
    name: 'Wes',
    age: '100',
    social: {
        facebook: 'wesbos.developer',
        twitter: '@wesbos',
    }
}
console.table(wes);

const dev = Object.assign({}, wes);

// For cloning cheat 
const dev2 = JSON.parse(JSON.stringify(wes));