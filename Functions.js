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

add(2,4);

let add = function(num1, num2){
    console.log(num1 + num2);
};