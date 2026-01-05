//max number 
                    // function maxNum(num1, num2){
                    //    return max = num1>=num2? num1 : num2;
                    // }
                    // console.log(maxNum(3,4));

//fizzBuzz

                    // function fizzBuzz(num){

                    //     if(num % 3 === 0 && num % 5 === 0){
                    //         return 'FizzBuzz';
                    //     }
                    //     else if(num %3 === 0){
                    //         return 'Fizz';
                    //     }
                    //     else if(num %5 === 0){
                    //         return 'Buzz';
                    //     }
                    //     else{
                    //         return num;
                    //     }
                    // }

                    // console.log(fizzBuzz(9));

//Even number from an array
     function displayEvenNumber(array){

        for(let element of array){
             if(element % 2 === 0){
                console.log(element);
             }
        }
     }   

      displayEvenNumber([1,2,3,4,5,6,7,8,9,10]);
     
//Odd number from an array

   

     function displayOddNumber(array){

        for(let element of array){
             if(element % 2 === 1){
                console.log(element);
             }
        }
     }

      displayOddNumber([1,2,3,4,5,6,7,8,9,10]);