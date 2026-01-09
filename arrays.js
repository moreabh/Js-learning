// Arrays Introduction;

// const numbers = [5,4,3,2,1];

                                //adding element to the end of an array 

                                // numbers.push(7,8,9);

                                // console.log(numbers);
                                /*
                                [
                                5, 4, 3, 2,
                                1, 7, 8, 9
                                ]*/


                                //adding element to the front of an array

                                // numbers.unshift(25,24);
                                // console.log(numbers);
                                /*
                                [
                                25, 24, 5, 4, 3,
                                2,  1, 7, 8, 9
                                ] */

                                //adding element middle of an array

                                // numbers.splice(1,0,25,24);
                                // console.log(numbers);
                                /*
                                [
                                25, 25, 24, 24, 5,
                                4,  3,  2,  1, 7,
                                8,  9
                                ] */

//Finding Elements(Primitives) :

// const numbers = [5,4,3,2,1,3];

                                                // let idxOfThree = numbers.indexOf(3);
                                                // console.log(idxOfThree); //2

                                                // let lastIdxOfThree = numbers.lastIndexOf(3);
                                                // console.log(lastIdxOfThree);//5

                                                // let lastIndexOfTen = numbers.lastIndexOf(10);
                                                // console.log(lastIndexOfTen); //-1

                                                // let includesTen = numbers.includes(10);
                                                // console.log(includesTen);//false

//Finding elements (references): 
 
                                                    // const employees = [
                                                    //     {
                                                    //     id: 1,
                                                    //     name : 'Abhi'
                                                    //     },
                                                    //      {
                                                    //     id: 2,
                                                    //     name : 'siddhu'
                                                    //     },
                                                    //      {
                                                    //     id: 3,
                                                    //     name : 'soma'
                                                    //     }
                                                    // ];

                                                    // const employee =  employees.find(function(e){

                                                    //     return e.name === 'siddhu';
                                                    // });


                                                    // console.log(employee); //{ id: 2, name: 'siddhu' }

//Arrow function 
                                        //New Way To declare a function  using arrow function

                                                //Older version
                                                                // function add(num1, num2){
                                                                //     return num1+num2;
                                                                // }

                                                // New Way : 
                                                //  const add = (num1, num2) => num1 + num2;     

                                                //  console.log(add(2,2)); //4

//Removing Elements: 
//    const numbers = [1,2,3,4,5,6];

                                                //    const lastElement = numbers.pop();
                                                //    console.log(`lastElement: ${lastElement}\n`);//lastElement: 6

                                                //    const firstElement = numbers.shift();
                                                //    console.log(`FirstElement: ${firstElement}\n`);//FirstElement: 1

                                                //    const middleElement = numbers.splice(1,1);
                                                //    console.log(`middleElement: ${middleElement}`);//middleElement: 3

//Emptying an array: 
 
// let numbers = [1,2,3,4,5];   
// let anotherArray = numbers;
// console.log(anotherArray);//[ 1, 2, 3, 4, 5 ]


                                                //using loops 
                                                //   while(numbers.length>0)
                                                //   {
                                                //     numbers.pop();
                                                //   }

                                                //   console.log(numbers);// [] 

                                                //making the array length 0
                                                //   numbers.length = 0;
                                                //   console.log(numbers);//[]

                                                //using splice method 

                                                //   const deletedNumbers = numbers.splice(0,numbers.length);
                                                //   console.log(`NumbersDeleted: ${deletedNumbers}`);//NumbersDeleted: 1,2,3,4,5

                                                // re-assigning array empty 
                                                // numbers = [];
                                                // console.log(numbers);//[]
                                                
//Combining and slicing array

                                                // const exampleNumberA = [1,2,3];
                                                // const exampleNumberB =[4,5,6];

                                                // const combinedArray =  exampleNumberA.concat(exampleNumberB);
                                                // console.log(combinedArray);//[ 1, 2, 3, 4, 5, 6 ]

                                                // const fisrtSlice = combinedArray.slice(0,3);
                                                // console.log(fisrtSlice);//[ 1, 2, 3, 4 ]

//spread operator
                                                //  const exampleNumberA = [1,2,3];
                                                //  const exampleNumberB = [4,5,6];

                                                // let combined =[...exampleNumberA, ...exampleNumberB];
                                                // console.log(combined);//[ 1, 2, 3, 4, 5, 6 ]

                                                // let combined2 = [...exampleNumberA, 1,2,...exampleNumberB,10];
                                                // console.log(combined2);
                                                /*
                                                [
                                                1, 2, 3,  1, 2,
                                                4, 5, 6, 10
                                                ] */ 


                                                // let a = [1,2];
                                                // let b = a;
                                                // b.values
                                                // console.log(b);//[ 1, 2 ]

                                                // let c = [1,2];
                                                // let d = [...c];
                                                // d[2] = 3;
                                                // console.log(d);//[ 1, 2, 3 ]

//Iterating an array 


                            // const numbers = [1,2,3,4,5,6]
                            //using for of loop

                            // for (let number of numbers)
                                // console.log(number);
                            /*
                            1
                            2
                            3
                            4
                            5
                            6 */

                            //using for each loop 

                            // numbers.forEach((number) => console.log(number));
                            /*
                            1
                            2
                            3
                            4
                            5
                            6 */

                            // numbers.forEach(number => console.log(number)); //if there is onlyy one paranthesis then we can also remove the paranthesis.

                            //we can also add second parameter to the for each loop 
                            // numbers.forEach((number,index) => console.log(`At index ${index}:  ${number}`));
                            /*
                            At index 0:  1
                            At index 1:  2
                            At index 2:  3
                            At index 3:  4
                            At index 4:  5
                            At index 5:  6 */

//Joining Arrays 
                                                    // const numbers = [1,2,3,4,5,6];       
                                                    // const joinedNumbers = numbers.join('-');
                                                    // console.log(joinedNumbers);        //1-2-3-4-5-6x   
                                                    
                                                    // const courceName = 'Javascript for beginners';

                                                    // const lowerCaseCourceName = courceName.toLowerCase();
                                                    // console.log(lowerCaseCourceName);//javascript for beginners

                                                    // const parts = courceName.split(' ');
                                                    // console.log(parts);//[ 'Javascript', 'for', 'beginners' ]

                                        //method chaning : 
                                        // const methodChaining = courceName.toLowerCase().split(' ');
                                        //  console.log(methodChaining);//[ 'javascript', 'for', 'beginners' ]

                                        //join : 
                                        // const join = parts.join('-');
                                        //  console.log(join);//Javascript-for-beginners

//sorting an array 
                                    //  const character = ['d','c','b','a'];
                                    
                                    //  const elementSort = character.sort();
                                    //  console.log(elementSort); //[ 'a', 'b', 'c', 'd' ] 
                                    
                                    //  const elementReverce = character.reverse();
                                    //  console.log(elementReverce);//[ 'a', 'b', 'c', 'd' ]

                                    //sorting an object 
                                    //  let employee = [
                                    //     {id: 1, name: 'zen'},
                                    //     {id: 2, name: 'flyn'},
                                    //     {id: 3, name: 'mack'},
                                    //     {id: 4, name: 'ken'},
                                    //  ];

                                    //  employee.sort((a,b) =>{

                                    //     const lowerCaseA = a.name.toLowerCase();
                                    //     const lowerCaseB = b.name.toLowerCase();

                                    //     if(lowerCaseA< lowerCaseB) return -1;
                                    //     if(lowerCaseA> lowerCaseB) return 1;
                                    //     return 0;
                                    //   });

                                    //   console.log(employee);

                                        /*
                                        [
                                    { id: 2, name: 'flyn' },
                                    { id: 4, name: 'ken' },
                                    { id: 3, name: 'mack' },
                                    { id: 1, name: 'zen' }
                                    ] */ 

//Testing the elements of an array 

const numbers = [2,4,6,8,10];

const areAllEven = numbers.every(number => {
    return number % 2 === 0; 
});

console.log(`areAllEven: ${areAllEven}`);//areAllEven: true


const numbers2 = [1,3,5,7,8,9];

const hasOneEvenNumber = numbers.some(number => number % 2 ===0);
console.log(`hasOneEvenNumber: ${hasOneEvenNumber}`);//hasOneEvenNumber: true





