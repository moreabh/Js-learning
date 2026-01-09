// const dog = {
//     name : 'Max',
//     breed : 'Dachshund',
//     age : 5,
//     weightINKG : 20,
//     eat: function(){
//         console.log('Champ!');
//     },
//     bark(){
//         console.log('woof!');

//     }
// }       

//Factory Functions  
                                            // function getDog(name, breed, age, weightINKG){
                                            //     return{
                                            //         name,
                                            //         breed,
                                            //         age ,
                                            //         weightINKG, 
                                            //         eat(){
                                            //             console.log('chomp!');
                                            //         },
                                            //         bark(){
                                            //             console.log('woof!');
                                            //         }
                                            //     }
                                            // }

                                            // const anotherDog = getDog('Max','Labra',10,30);
                                            // console.log(anotherDog);
//constructor function 
                                            
                                            // function Dog(name, breed, age, weightINKG){
                                                //this = {};

                                                //add properties to this 

                                            //     this.name = name;
                                            //     this.breed = breed;
                                            //     this.age = age;
                                            //     this.weightINKG = weightINKG;

                                            //     this.eat = function(){
                                                    
                                            //         console.log(this.name +'Chopm');
                                                    
                                            //     }
                                            //     this.bark = function(){
                                            //         console.log(this.name+ 'woof!');
                                            //     }

                                                //return this;
                                            // }
                                            
                                            // const anotherDog = new Dog('Jersy','jerman', 25,56);
                                            // console.log(anotherDog);

//Objects are dynamic 

                                            //syntax to add proprties to the objects
                                            //1)
                                            // const person={
                                            //     name: 'Abhishek'
                                            // };

                                            // console.log(person);

                                            //2)
                                            // person.favouriteFood = 'Paneer';
                                            // console.log(person);

                                            //3)
                                            // person['favouriteIceScream'] = 'chocolate';

                                            //delete keyword used to delete the particular property.
                                            // delete person.favouriteIceScream;
                                            // console.log(person);


                                            // person.eat = function(){
                                            //     console.log('start eating');
                                            // }

                                            // person.eat();

                                            // person = {};
//constructor Property     
                                            // const person = {
                                            //     name : 'abhishek'
                                            // };

                                            // console.log(person.constructor); //[Function: Object]

                                            // let newObj = {};

                                            // let newObj = new Object();

                                            // new String(); //'abhishek'
                                            // new Boolean(); //true, false
                                            // new Number();//1,2,3,4

                                            //Functions are objects 
                                            //   function add(num1 , num2){
                                            //     return num1 + num2;
                                            //   }                                            

                                            // console.log(add(2,2));//4

                                            // const n = add;  
                                            // console.log(n(2,4));//6

                                            //.length is used to find the parameter length

                                            // console.log(add.length);//2

//constructor function
                                                    // function Programmer(name){

                                                    //     this.name = name;
                                                    //     this.writeCode = function(){
                                                    //         console.log("Code in javascript");
                                                    //     }
                                                    // }

                                                    // console.log(Programmer.length);//1
                                                    // console.log(Programmer.constructor);//[Function: Function]

                                                // const Programmer = new Function('name', `

                                                //     this.name = name;
                                                //     this.writeCode = function(){
                                                //     console.log("code in javascript");
                                                //     }
                                                //     `);
                                                // const newProgrammer = new Programmer('abhishek');
                                                // newProgrammer.writeCode();//code in javascript 

//value vs reference type

        //Primitive values:

                                            // let a = 10;
                                            // let b = a;

                                            // a =20;

                                            // console.log(a);//20
                                            // console.log(b);//10

        //Object values:

                                        // let a = {value: 20}
                                        // let b = a;

                                        // a.value = 100;

                                        // console.log(a);//{ value: 100 }
                                        // console.log(b);//{ value: 100 }


//Properties of an object

                                                                // const dog = {

                                                                //     name : 'max',
                                                                //     age : 10,
                                                                //     eyeColor : 'blue'
                                                                // };

                                                                // for(const key in dog){
                                                                    // console.log(dog[key]);
                                                                // }
                                                                /*
                                                                max
                                                                10
                                                                blue */

                                                                // const keys = Object.keys(dog);
                                                                // console.log(keys);//[ 'name', 'age', 'eyeColor' ]

                                                                // const values = Object.values(dog);
                                                                // console.log(values);//[ 'max', 10, 'blue']

                                                                // const entries = Object.entries(dog);
                                                                // console.log(entries);//[ [ 'name', 'max' ], [ 'age', 10 ], [ 'eyeColor', 'blue' ] ] 

                                                                // for(const key of Object.keys(dog)){
                                                                    // console.log(key);
                                                                // }
                                                                /*
                                                                name
                                                                age
                                                                eyeColor
                                                                */    

                                                                // for(const value of Object.values(dog)){
                                                                    // console.log(value);
                                                                // }
                                                                /*
                                                                max
                                                                10
                                                                blue
                                                                */

                                                                // for (const entrie of Object.entries(dog)){
                                                                //     console.log(entrie);
                                                                // }
                                                                 /*
                                                                 [ 'name', 'max' ]
                                                                 [ 'age', 10 ]
                                                                 [ 'eyeColor', 'blue' ] */ 
                                                                  
//Cloning An object
                    // let a = {value: 10};
                    // let b = a;

                    // b.value = 20;

                    // // console.log(a);//{ value: 20 }
                    // // console.log(b);//{ value: 20 }

                    // let c = {value: 10};
                    // let d = {};

                    //  Object.assign(c,d);  //(target , source) 
                    //  d.value = 20;
                    // //  console.log(c);//{ value: 10 }
                    // //  console.log(d);//{ value: 20 }

                    //  let e = {value: 10};
                    //  let f = {...e};   //cloning the objecte

                    //  f.value = 20;
                    //  console.log(e);//{ value: 10 }
                    //  console.log(f);//{ value: 20 }

//Built in math function 

                                                                /*    
                                                                1)Math.round(3.14) -> 3
                                                                2)Math.floor(4.6) -> 4
                                                                3)Math.ceil(4.2) -> 5
                                                                4)Math.max(1,2) -> 2
                                                                5)Math.min(1,2) -> 1
                                                                6)Math.pow(2,3) -> 8
                                                                7)Math.sqrt(25) -> 5
                                                                8)Math.floor(4.4) -> 4
                                                                9)Math.floor(4.9) -> 4
                                                                10)Math.random() -> any random number
                                                                */
                                                    //Generating random number from 0 to 100 formula :-
                                                            //     let min = 1;
                                                            //     let max = 10;
                                                            //     const randomNum = Math.round(Math.random() *(max-min) + min);
                                                            //    console.log(randomNum);

//String Methods :- 
     
                                // const name = 'Abhi';
                                //  console.log(typeof name);//String 

                                // const anotherName = new String('Abhi');
                                //  console.log(typeof anotherName);//object    
            //String Methods:-

            // const sentence = "A new sentence";
            // const dataIncludeNew = sentence.includes('new');
            // // console.log(dataIncludeNew);//true

            // // console.log(sentence[3]);//e

            // const startsWithA = sentence.startsWith('A');
            // // console.log(startsWithA);//true

            // const endsWithA = sentence.endsWith('A');
            // // console.log(endsWithA);//false

            // let updatedSentence = sentence.replace('new' , 'short');
            // // console.log(updatedSentence); //A short sentence
                                                                                                                                                                                                                         
            // trimmedSentence = sentence.trim();
            // // console.log(trimmedSentence);//A new sentence

            // let wordsInSentence = sentence.split(' ');
            // // console.log(wordsInSentence);//[ 'A', 'new', 'sentence' ]                                                                                                                                  

            // let email = 'TesTEmaIl@gmail.com';

            // let lowerCaseEmail  = email.toLowerCase();
            // console.log(lowerCaseEmail);//testemail@gmail.com
                                                                                                                                                               
            // let upperCaseEmail = email.toUpperCase();
            // console.log(upperCaseEmail);//TESTEMAIL@GMAIL.COM 

//Template literals : -

let firstName = 'Abhishek';
let lastName = 'More';

// let fullName = firstName+' '+ lastName;
// console.log(fullName);//Abhishek More

//Syntax to add the space between the words:
 
let fullName = `${firstName} ${lastName}`;
console.log(fullName);//Abhshek More

            


               

               
                     






