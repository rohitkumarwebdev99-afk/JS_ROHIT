let a=[10,12,11,3,5,1,1,1,2,2,3,43,2,15,17,-1,-5,0,0,0];
let ecount=0;
let ocount=0;
let largestnumber=-Infinity;
let secondlargest=-Infinity;
let secondsmallest=Infinity;
let smallestnumber=Infinity;
let countPostive=0;
let countNegative=0;
let countZero=0;
let sum=0;
let noDuplicate=[];

let prime=[];

for(let i of a){
       if(i%2==0){
        console.log(`number is even= ${i}`)
        ecount+=1;

       }
       else{
        console.log(`number is odd= ${i}`)
        ocount+=1;
       }
}
console.log(`number of even number= ${ecount}`);
console.log(`number of odd number= ${ocount}`);
for(let i of a){
    let isPrime=true;
    let found=false;
    if(i>largestnumber){
        secondlargest=largestnumber;
        largestnumber=i;
    }else if(secondlargest<i&&i!==largestnumber){
        secondlargest=i;
    }
    
    if(smallestnumber>i){
        secondsmallest=smallestnumber;
        smallestnumber=i;
    }
    else if(secondsmallest>i&&i!==smallestnumber){
        secondsmallest=i;
    }
    for(let j=2;j<i;j++){
    if(i%j===0){
       isPrime=false;
       break;
    }

   } 
    if(isPrime && i>1){
        prime.push(i)
    }
    if(i>0){
     countPostive+=1;
    }
    else if(i<0){
        countNegative+=1;
    }
    else{
        countZero+=1;
    }
    sum+=i;
    if(noDuplicate.length===0){
        noDuplicate.push(i);
    }
    else{
        for(let j of noDuplicate)
            {
           
            if(j ===i){
                found=true;
                break;}
            }
        if(!found){
            noDuplicate.push(i);
        }
    }
}

console.log(largestnumber,secondlargest);

console.log(smallestnumber,secondsmallest);
console.log(prime);
console.log(`Number postive number= ${countPostive}`);
console.log(`Number negative number= ${countNegative}`);
console.log(`Number zero number= ${countZero}`);
console.log(`sum= ${sum}`)
console.log(noDuplicate);
console.log(a)
console.log( 7 % 2)
console.log(0 % 2)
console.log(-5 % 2)
console.log(2.2%2)

let negativelag=0;
let b=[-1,-2,-3,-4,-2,-4]
for(let i of b){
    if(negativelag<i){
        negativelag=i;
    }

}
console.log(negativelag)


let numb=-121716;
// let splt=numb.toString().split("");
let digsum=0;
// for(let i of splt)
for(let i=numb;i>0;i=Math.floor(i/10)){
   digsum+=(i%10);
}
console.log(digsum);

//->we need to use the entries() funtion for index eg for(let [i,values] of a.entries())
// for(let i of a.entries()){
//     console.log(i);
// }//-> entries create arry that consist of index number and the value of main arry