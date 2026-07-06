/*******Lv 1*********/

const sum=[2,2].reduce((acc,crr)=>{acc+=crr; return acc;},0);
console.log(sum);

const mul=[1, 2, 3, 4].reduce((acc,crr)=>{acc*=crr; return acc;},1);
console.log(mul);


const Max=[10,5,30,2].reduce((acc,crr)=>acc>crr?acc:crr);
console.log(Max);

/******L2********/

const arr1=[1, 2, 2, 3, 2, 3, 4, 4, 1, 4];

for(let ind=0;ind<arr1.length;ind++)
{    let seen = false;

  for (let k = 0; k < ind; k++) {
    if (arr1[ind] === arr1[k]) {
      seen = true;
      break;
    }
  }
    if (!seen) {
    let count=0;
    for(let i=0;i<arr1.length;i++){
        if(arr1[ind]==arr1[i]){
            count+=1;
        }
    }
    console.log(arr1[ind],count);
}
}


let arr = [1, 2, 2, 3, 3, 3];

// let freq = {};

// for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];

//     if (freq[num]) {
//         freq[num]++;
//     } else {
//         freq[num] = 1;
//     }
// }

// console.log(freq);



const cont=arr.reduce((acc,curr)=>{acc[curr]=(acc[curr]||0)+1; return acc},{});
console.log(cont);
console.log(typeof(cont))
/*To make acc an object, we pass {} as the initial value.
Without {}, reduce() uses the first array element as acc, which in your case is a number.*/