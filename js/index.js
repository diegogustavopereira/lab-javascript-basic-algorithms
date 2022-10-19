// Iteration 1: Names and Input
let hacker1 = "name of driver";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "name of navigator";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

let hacker1 = "name of driver";
let hacker2 = "name of navigator";

let string1 = hacker1.length;
let string2 = hacker2.length;

if (string1 > string2) {
    console.log(`The driver has the longest name, it has ${string1} characters.`);
} else if (string2 > string1) {
    console.log(`It seems that the navigator has the longest name, it has ${string2} characters.`);
} else {
    console.log(`Wow, you both have equally long names, it has ${string1} characters.`);
}


// Iteration 3: Loops
let hacker1 = "name of driver";

let result = "";

for (let i = 0; i < hacker1.length; i++) {
    result += hacker1[i] + " ";
}

console.log(result.toUpperCase());

let hacker2 = "name of navigator";

let result = "";

for (let i = 0; i < hacker2.length; i++) {
    result += hacker2[i] + " ";
}

console.log(result.toUpperCase());


