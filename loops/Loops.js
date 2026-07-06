// for(let i=1;i<=10;i++){
//     console.log("helloooooooooooooo!!")
// }
// for(let i=1;i<=20;i++){
//     console.log(i)
// }
// let sum=0;
// for(let i=1;i<=50;i++)
// {
//     if(i%2==0){
//         console.log(i);
//         sum=sum+i;
        
//     }
// }
// console.log(sum)

//prime 
let num=1;
let count=0;
for(let i=2;i<=num-1;i++){
    if(num%i==0){
        count=count+1;
    }
}
if (count==0 && num!=1){
    console.log("then number is prim");
}
else 
{
    console.log("then number is not prim");
}