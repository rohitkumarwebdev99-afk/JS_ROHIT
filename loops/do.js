// let randomNum=Math.round(Math.random()*10);
// let guessedNum;
// do{
//     guessedNum=prompt("Guess the Number");
//     if(guessedNum==randomNum)
//     {
//         console.log("You have guessed the number correctly");

//     }
//     else{
//         console.log("try Again");
//     }
    
// }while(randomNum!=guessedNum)
// let num=4;
// for(let j=2;j<=15;j++)
// {
// for(let i=1;i<=10;i++){
//     console.log(`${j}*${i}=${j*i}`);
// }
// console.log("**********************")
// }

// let sumOfPrime=0;
// let isPrime=true;
// for(let j=1;j<=100;j++){
// for(let i=2;i<=j-1;i++){
//     if(j%i==0){
//         isPrime=false;
//     }
// }
//     if(isPrime&&j!=1){
//         sumOfPrime=sumOfPrime+j;
//         console.log(j);
//     }
//     isPrime=true;
    
// }
// console.log(sumOfPrime);

// let x=0;

// if(x++){
//     console.log("a");
// }
// else if(x==0){
//     console.log("b");
// }
// else{
//     console.log("c");
// }
let num=15;
  let answer = 0;
  for (let i = 1; i <= num; i++){
    if (num % i == 0) {
      answer = answer + i;
    }
  }
  console.log(answer);

  Number