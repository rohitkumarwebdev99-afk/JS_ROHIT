const inputs=[11,32,12,45,65,94,7,78,10,100,131,67,81,92,53];
let count=0;
// const firstFiveEven=inputs.filter((i)=>{if(i%2==0&& count<5){count++; return true;}return false;});
// console.log(firstFiveEven);

/***without if*/
// const firstFiveEven=inputs.filter((i)=>i%2==0 && count++ < 5);
// console.log(firstFiveEven);

let even=[];
for(let i of inputs){
    if(i%2!==0){
      continue;
    }  
    even.push(i);
    if(even.length===5){
        break;
    }
    
}

console.log(even);

