
let arr = [10,11,2,2,1,10];

let largest = -Infinity;

let secondLargest = -Infinity;

for(let num of arr){

    if(num > largest){

        secondLargest = largest;

        largest = num;
    }// here we are finding largeat num 

    else if(num > secondLargest && num !== largest){

        secondLargest = num;// heresecond  one
    }
}

console.log(secondLargest);

let unique=[];
for(let num of arr){
    if(!unique.includes(num))
    {
        unique.push(num);
    }
}
console.log(unique);



let arr1=[1,2,3,4,5,6,7];
let rotate=[];
let temp=arr1[0];
 rotate=[...arr1];
 rotate.shift();
 rotate.push(temp);
 console.log(rotate);


 let arr2=[1,0,2,0,3,0,4];
 let array=[];
let count=0;
 for(let i=0;i<arr2.length;i++){
    if(arr2[i]!==0){
        array.push(arr2[i])
    }else{
-----------
        count++;
    }
 }
 for(i=1;i<=count;i++){
    array.push(0);
 }
 console.log(array);


 let a1=[1,2,3,4,5]
 let a2=[3,4,5,6,7,8]
 let inter=[];
 for(let num1 of a1){
    for(let num2 of a2)
    {
        if(num1===num2&&!inter.includes(num1)){
            inter.push(num1);
        }
    }
 }
 console.log(inter);