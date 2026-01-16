//Function Declaration VS Expression

//function declaration
                        // function sayHii(){
                        //     console.log('Hii');
                        // };

                        // sayHii(); //Hii

//Function Expression 

                        // let sayHello = function(){
                        //     console.log('Hello');
                        // };

                        // sayHello();//Hello


                        // let greeting = function sayOk(){
                        //     console.log('Ok');
                        // };   

                        // greeting(); //Ok

//Hoisting 

//Function declaration 
                    
                    // add(2,3); //5 

                    // function add(num1, num2){
                    //   console.log(num1 + num2);
                    // };


//function expression 
        //This is wrong way to use function expression:

                                // add1(2,4);//cant access before initialization.

                                // let add1 = function(num1, num2){
                                //     console.log(num1 + num2);
                                // };

        //correct way to use function expression:   
                                //   let add = function(num1, num2){
                                //     console.log(num1 + num2);
                                // };    
                                
                                // add(2,3);//5


//Arguments : 

                                    // function multiply(num1, num2){
                                    //     return num1*num2;

                                    // }

                                    // console.log(multiply(2,2));//4

//Here we doesn't pass the value to num2, so js will automatically assign a value undefined.
                                    // function multiply(num1, num2){
                                    //     return num1*num2;

                                    // }
                                    // console.log(multiply(2)); //NaN
//
                                    // function multiply(num1, num2){
                                       
                                    //     return num1*num2;

                                    // }

                                    // console.log(multiply(2,2,4)); //4


                                    //  function multiply(num1, num2){
                                    //    console.log(arguments);     //        [Arguments] { '0': 2, '1': 2, '2': 4 }
                                    //     return num1*num2;
                                    // }
                                    // console.log(multiply(2,2,4));


                                    // function multiply(num1, num2){
                                    //     let product = 1;
                                    //     for(const num of arguments)
                                    //         product *= num;
                                    //         return product;
                                        
                                    // }
                                    // console.log(multiply(2,2,4)); //16

//REST Operator: 

                                    // let cource = {
                                    //     name: 'Javascript for beginers',
                                    //     duration: '3 hours'
                                    // };

                                    // let newCource = {
                                    //     ...cource,
                                    //     name: 'Javascript pro'
                                    // };

                                    // console.log(newCource); //{ name: 'Javascript pro', duration: '3 hours' }


                                    // function multiply (...args){

                                    //     return args.reduce((accumulator, currentValue ) =>  accumulator * currentValue,1);
                                    // }

                                    // console.log(multiply(1,2,3,4));//24

                                    // function multiply(multiplier, ...numbers){
                                    //     return numbers.map(number => number * multiplier);  
                                    // }

                                    // console.log(multiply(2,1,2,3,4));  //[ 2, 4, 6, 8 ]
                                    /*
                                    1 * 2 = 2

                                    2 * 2 = 4

                                    3 * 2 = 6

                                    4 * 2 = 8 */

//Default Parameters 

                                    //Example: 
                                    //here we provided default value to parameter
                                    //  function writeCode(language = 'Java'){

                                    //     console.log(`Write code in ${language}`);

                                    //  };

                                    //  writeCode('Javascript'); //Write code in Javascript 
                                    //  writeCode('c#'); //Write code in c#
                                    //  writeCode(); //Write code in Java 

                                    //Example: 
                                    // function codeDetails(language='Javascript', tool='VS code'){
                                    //     console.log(`Writing code in ${language} using ${tool}`);
                                    // }

                                    // codeDetails(); //Writing code in Javascript using VS code
                                    // codeDetails('python'); //Writing code in python using VS code
                                    // codeDetails('c#', 'Visual Studio'); //Writing code in c# using Visual Studio

                                    //Example: 
                                    // function createUser(name, role='guest', status='active'){
                                    //     console.log(`User: ${name}, Role:${role}, status:${status}`);
                                    // };

                                    // createUser('Abhishek'); //User: Abhishek, Role:guest, status:active
                                    // createUser('Harsh','Admin','active'); //User: Harsh, Role:Admin, status:active

//Getters and setters :

// const course = {
//     name: 'Javascript for beginners',
//     duration: '3 hours'
// };

// console.log(`${course.name} is ${course.duration}`); //Javascript for beginners is 3 hours

//   const course ={                                  
//     name: 'Javascript for beginners',
//     duration: '3 hours',
//     details(){
//         return `${this.name} is ${this.duration}`;
//     }
// };

// console.log(course.details()); //Javascript for beginners is 3 hours

// const course = {
//     name: 'Javascripts for beginners',
//     duration: '3 hours',
//     get details(){
//         return `${this.name} is ${this.duration}`;
//     },

//     set details(value){
//         let parts = value.split(' is ');
//         this.name = parts[0];
//         this.duration = parts[1];
//     }
// };
    
// console.log(`${course.name} is ${course.duration}`);//Javascripts for beginners is 3 hours

// console.log(course.details);//Javascripts for beginners is 3 hours

//setters 
// course.details = 'Javascript pro is 10 hours';
// console.log(course.details); //Javascript pro is 10 hours

//Ex:
                                                            // const course = {
                                                            //     name: 'Javascripts for beginners',
                                                            //     duration: '3 hours',
                                                            //     get details(){
                                                            //         return `${this.name} is ${this.duration}`;
                                                            //     },

                                                            //     set details(value){

                                                            //         if(typeof value !== 'string'){
                                                            //             throw new Error(`value, ${value} is not a string`);
                                                            //         }

                                                            //         let parts = value.split(' is ');
                                                            //         this.name = parts[0];
                                                            //         this.duration = parts[1];
                                                            //     }
                                                            // };

                                                            // course.details = 23; //Error: value, 23 is not a string

//Ex:
                                                                // const course = {
                                                                //     name: 'Javascripts for beginners',
                                                                //     duration: '3 hours',
                                                                //     get details(){
                                                                //         return `${this.name} is ${this.duration}`;
                                                                //     },

                                                                //     set details(value){

                                                                //         if(typeof value !== 'string'){
                                                                //             throw new Error(`value, ${value} is not a string`);
                                                                //         }

                                                                //         let parts = value.split(' is ');
                                                                //         this.name = parts[0];
                                                                //         this.duration = parts[1];
                                                                //     }
                                                                // };

                                                                // try{
                                                                //     course.details = 42;
                                                                // }catch(e){
                                                                //     console.log(`Caught an error: ${e.message}`);  //Caught an error: value, 42 is not a string
                                                                // }


                                                                // Ex: 

                                                                // function checkAge(age) {
                                                                //   if (age < 18) {
                                                                //     throw new Error("Not eligible");
                                                                //   }
                                                                //   return "Eligible";
                                                                // }

                                                                // try {
                                                                //   checkAge(15);
                                                                // } catch (e) {
                                                                //   console.log(e.message);
                                                                // }


                                                                //o/p : Not eligible

//Local scope and global scope
        //local scope: 

                                        // {
                                        //     const name = 'Abhi';
                                        //     console.log("calling from local scope : ",name); //calling from local scope :  Abhi
                                        // }

                                        // console.log("calling from global scope: ",name); //ReferenceError: name is not defined

 //global scope: 

                                        //  const studentName = 'Abhishek';

                                        //  function details(){
                                        //     console.log('name is ',studentName); //name is  Abhishek
                                        //  }

                                        //  details();
                                        //  console.log(studentName); //Abhishek


//block scope 

//let and const is block scope, means variables declared using let and const into a function block is not accessible outside the function block.
//but if we declare a variable using the var inside the function block then we access can access that variable outside the block, thats why var is not block scope.

// if(true){
//     let a = 30;
//     const z = 10;
//     var b = 20;
// }

// console.log(b); //20
// console.log(a); //ReferenceError: a is not defined
// console.log(z);

//let vs var keyword: 

//var is function scope
//variable declared using the var keyword into function block is accessible outside the function block.

// function display(){
//         for(var i=0; i < 5; i++){
//             console.log(i);
//         }
//         console.log('Outside the function block',i);
// }

// display();


/*
0
1
2
3
4
Outside the function block 5  
*/

// function display2(){
//     for(let i=0; i<5; i++){
//         console.log(i);
//     }

//     console.log('outside the block: ',i);//ReferenceError: i is not defined
// }

// display2(); 
/*
0
1
2
3
4 */

//This keyword 

// const course ={
//     name: 'Javascript for beginners',
//     start(){
//         console.log(this.name);
//     }
// };

// course.start(); //Javascript for beginners

//Ex: 

//using this keyword into the arrow function it can access it from global scope, and in global scope there is no any variable declared using variable name, 
// so it will give the output as undefined

// const course ={
//     name: 'Javascript for beginners',
//     start: ()  => {
//         console.log(this.name);
//     }
// };

// course.start(); //undefined

//.bind()

function introduce (language){
    console.log(this.name + ' teaches' +language);  //abhishek teaches JavaScript

}

const instructor = {name: 'abhishek'};
const introduction  = introduce.bind(instructor);
introduction(' JavaScript'); 