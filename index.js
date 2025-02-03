/* Create a faulty calculator using JS 
1. It takes two number as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times
*/
sum = 0;
let cal = (num1 ,num2) => {
    if(num1 + num2  ){
        sum =  num1 - num2 
        return sum
    }
} 
console.log(cal(4+2))
