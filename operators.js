/* -, *, /, %*/
/*
1)Arithmatic Operator:- 
                         Addition
                         subtraction
                         multiplication
                         division
                         increment
                         decrement

2)Assignment Operator(=): Single equal sign stands for assign a value to a variable.

3)Comparison operator :  
                            greater than (>)
                            greater than equal to (>=)
                            less than  (<)
                            less then equal to (<=)
    
4)Equality Operator: 
                      1)loose equality(==)
                            let a = 2;
                            let b = '2';
                            console.log(a==b); //true

                            -loose equality doesn't check if the data types are the same.
                            - it will do the conversion.

                      2)strict equality(===)
                            let a = 2;
                            let b = '4';
                            console.log(a===b);//false
                            
                            -it will compare without doing any conversion.
                            -in javascript for checking the equality we can use the Strict Equality.

5)Ternary Operator: 
                    -It is a conditional Operator.
                    -It will check the conditio first and give the output.
                    
                    let age = 18;
                    const canDrive = age>=18 ? true : false;
                    console.log(canDrive);//true

                    let points = 110;
                    const customerType = points>100? 'gold':'silver';
                    console.log(customerType);//gold

6)Logical Operator: 
                    1)&& (and operator)
                    2)|| (or Operator)
                    3)! (not operator)
                    4)?? (null coalescing)

                    4)?? (null coalescing)
                    let a = null;
                    const result = a ?? false;
                    console.log(result); //false

                    -It is used to supply a default value to null or undefined variable.
                    -and default value is false.

7)Logical operators with non-boolean opearators.
                                                
                                                -it will return the true value.
                                                -it executes left to right.
                                                
                                               
                                        const result = false || 'abhi';
                                        console.log(result);//abhi

                                        const result2 = false || 1 || 2 ;
                                        console.log(result2);//1

                -Falsy Values in javascript:
                    1)Undefined
                    2)null
                    3)0
                    4)false
                    5)'' (empty string)
                    6)NaN (Not a number)
                  
                    let userChosenColor = 'blue';
                    let defaultColor = 'green';
                    const currentWebsiteColor =  userChosenColor || defaultColor;
                    console.log(currentWebsiteColor);//blue

                    let userSelectedColor = '';
                    let byDefaultColor = 'green';
                    const currentWebsiteThemeColor =  userSelectedColor || byDefaultColor;
                    console.log(currentWebsiteThemeColor);//green

 *Operator Precedance 
  */ 
                let n = 5+5*4;
                console.log(n);//25

                let m = ((5+5)*4);
                console.log(m);//40

                    




