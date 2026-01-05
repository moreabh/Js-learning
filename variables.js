// var firstName = 'Abhishek';
// firstName = 'Abhi';
// console.log(firstName);

// let firstName;
// firstName = 'letAbhishek';
// firstName = 'letAbhi';
// console.log(firstName);

// const FIRST_NAME = 'Abhishek'; //constant should be declare in uppercase and 
                                //Once we declare one const value then we can't change it's value second time.
// let lastName = 'More';
// console.log(FIRST_NAME,lastName);

// Primitive DataTypes:- 

//1) String: 
let variable1 = 'var1';
let variable2 = "var2";
let variable3 = `var3`;

//2) Number 
let number1 = 15;
let pi = 3.14;

//3) BigInt 
let largeNumber = 23443323443442n;

// 4) boolean
let status = true;
let status2 = false;

// 5) Undefined 
let variable4;
//console.log(variable4);  //undefined

//6) null
let variable5 = null;

// 7) symbol 
let uniqueKey = Symbol();

//8) Object  : it has key and value pairs

let course ={
    name:'JavaScript',
    hours: 3    
};

// console.log(course); //  { name: 'JavaScript', hours: 3 }

/*
> typeof undefined
'undefined'
> type of 23
type of 23
     ^^

Uncaught SyntaxError: Unexpected token 'of'
> typeof undefined
'undefined'  
> typeof 15
'number'
> typeof "abhi"
'string'
> typeof null
'object'
> typeof Symbol
'function'
> typeof Symbol()
'symbol'
> typeof 43234234243434255n
'bigint'
>*/


//Dynamic Typing

// let firstName = 'Abhishek';
// console.log(typeof firstName);//string

// firstName = 15;
// console.log(typeof firstName);//number

// firstName = true;
// console.log(typeof firstName);//boolean

 
//Objects 
//  let course1 ={
//     name: 'javascript',
//     hours: 3
//  };

//  console.log(course1);//{ name: 'javascript', hours: 3 }
//  console.log(course1.name);//javascript
//  console.log(course1.hours);//3
//  console.log(course1['name']);//javascript

//  course1['name'] = 'javascript 101';
//  console.log(course1['name']);//javascript 101

//  let property = 'hours';
//  console.log(course1[property]);//3


 //Array 
 //array is a datastructure it is used to store the data.
 //In javascript array can be store diffrent types of data for example it can be string, number etc.
 //here indexing starts from 0.
 //we can find the length of array using the built in property .length.

//  let productColour = ['blue', 'green'];

//  console.log(productColour);//[ 'blue', 'green' ]
//  console.log(productColour[0]);//blue

//  productColour[0] = 42;
//  console.log(productColour[0]);//42

//  console.log(typeof productColour);//object

//  console.log(productColour.length);//2


//Function 
//functions are the built in blocks.
//it executes the group of the statements into the function
//we can pass the parameter variable.

// function sayHii(name){
//     console.log('Hiii '+name);
// }

// sayHii('mit'); //Hiii mit
// sayHii('abhi');//Hiii abhi

//Types Of function

//functions are used to perform some action and declare some value and return that value.

function multiply(num1, num2){
    return num1 * num2;
}
console.log(multiply(2,2));//4

function add(num1, num2){
    const addition = num1 + num2;
    // return addition;
}
console.log(add(2,4));//undefined

