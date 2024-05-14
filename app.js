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

//part 1: fizz buzz

let sequence = 0;

while (sequence <=0 -1){
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


//part 2: prime time

let n = 0;

while (n <= 3 -1){
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
// n % (n-1) === 0

function checkPrime (start){
    let i = 2;
    while (i < start) {
        if (start% i === 0) return false;
        i++;
    }
    return [true, i];
}

function findNextPrimeNum(startingNum){
    let starting = startingNum + 1;
    while (starting){
        if (checkPrime(starting)){
            break;
        }
        starting++;
    }
    return starting;
}

console.log(findNextPrimeNum(3));


///part 3: feeling loopy

let cell1 = {id: 42, name: "bruce", occupation: "knight", age: 41};
let cell2 = {id:57, name: "bob", occupation: "fry cook", age: 19};
let cell3 = {id:63, name: "blaine", occupation: "quiz master", age: 58};
let cell4 = {id: 98, name: "bill", occupation: "doctor's assistant", age: 26};

let arry = [{cell1}, {cell2}, {cell3}, {cell4}];

function loopTill(){
    
};



