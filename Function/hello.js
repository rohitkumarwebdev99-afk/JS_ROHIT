function greetUser(){
    console.log("Hello User!");
}
function bye(){
     console.log("Bye User");
}

let a=4;
let b=5;
greetUser();
console.log("Sum of numbers: "+(a+b));
bye();
console.log(Multiply(a,b));




function Multiply(num1=0,num2=0){
  let answer;
  answer=num1*num2;
  return answer;
}

console.log(lastDigit(24,34));

function lastDigit(num1, num2) {
    let answer;
    if (num1 % 10 == num2 % 10) {
        answer= true;
    }
    else {
        answer= false;
    }
    return answer;
}