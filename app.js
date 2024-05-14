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

let sequence = 1;

while (sequence <=101 -1){
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

let n = 1;

while (n <= 100 -1){
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

let arry = [{id: 42, name: "bruce", occupation: "knight", age: 41},
            {id:57, name: "bob", occupation: "fry cook", age: 19},
            {id:63, name: "blaine", occupation: "quiz master", age: 58},
            {id: 98, name: "bill", occupation: "doctor's assistant", age: 26}];

function loopTill(){
    //need to create function that will loop through the objects inside array ;-; cannot figure out how to do that
};


const string = `ID, Name, Occupation, Age \n 42, Bruce, Knight, 41 \n 57, Bob, Fry Cook, 19 \n 63, Blaine, Quiz Master, 58 \n \
98, Bill, Doctor's Assistant, 26`;

const rows = string.split("\n");
for (let row of rows){
    const cells = row.split(",");
console.log(cells.join (",")) ; 
}
