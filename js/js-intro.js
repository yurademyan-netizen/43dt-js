
//Змінні в JS
//var message;
//message = 'Hello Jacascript!';
//const message = 'Hello Jacascript!';
//let message = 'Hello Jacascript!';
let messageForUser = 'Hello Jacascript!';
alert (messageForUser);

messageForUser = 'Hello User!'; //Помилка, бо const не можна змінювати
console.log(messageForUser);


//Типи даних
// Текстові дані рядки 
const userName = 'Ivan';



const isUserLoggedIn = true;

let userAdress = null;

let userPhoneNumber;

//Складені типи даних

const userRoles  = ['admin', 'editor', 'subscriber'];

const userProfile = {
    name: 'Ivan',
    age: 25.5,
    isLoggedIn: true
};

//ewweew
/*

console.log(typeof userName); //string
console.log(typeof userAge); //number
console.log(typeof isUserLoggedIn); //boolean
console.log(typeof userAdress); //object
console.log(typeof userPhoneNumber); //undefined
console.log(typeof userRoles); //object
console.log(typeof userProfile); //object   
console.log(userProfile.name); //Ivan




const userAge = Number (prompt('Enter your age:'));
const nextAge = sum(userAge + 1);
console.log('Next year you will be: ' + nextAge);

//operators

if (userAge >= 18) {
    console.log('You are adult');
} else {
    console.log('You are minor');
}


//Functions
function sum (a, b) {
    return a + b;
}


for (let i = 1; i < 5; i++) {
    console.log('Iteration number: ' + i);
}
    /* */
/*
    let count = 1;
while (count <= 5) {
    console.log('Count is: ' + count)
    count++;
}
*/

const fruits = ['apple', 'banana', 'orange'];
console.log( fruits[2]);

console.log( fruits );




for (const fruit of fruits) {
    console.log('Fruit: ' + fruit);
}



//Special keyt wwords break and continue

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    if (i % 2 === 0) {
        continue;
    }
    console.log('non pair Number: ' + i);
}