/**let arry = 0;
while (arry <= 100){ 
if (arry % 3 === 0) {
    print(arry, "Fizz")} 
    {
else if (arry % 5 === 0){
    print(arry, "Buzz.")}}
else if (arry % 3 === 0 && arry % 5 === 0)
    print(arry, "Fizz Buzz.")
else if (arry %)
}
*/

let sequence = 0;

while (sequence <=100 -1){
    sequence ++;


    if (sequence % 3 === 0 && sequence % 5 === 0){
        console.log(sequence, "Fizz Buzz.")}
    else if (sequence % 3 === 0){
        console.log(sequence, "Fizz.")
    }
    else if (sequence % 5 === 0){
        console.log(sequence, "Buzz.")
    }
    else {console.log(sequence)} 
};


let n = 0;

while (n <= 60 -1){
    n++;
     if (n <= 3 && n !== 1) {
        console.log(n)
    } 
    else if (n === 5){
        console.log(n)
    }
    else if (n === 7){
        console.log(n)
    }
    else if ( n%2 !== 0 && n%3 !==0 && n%7 !==0 && n%5 !== 0){
        console.log(n)
    }
};
// only divisible by one and itself
// N % n !== 0 


