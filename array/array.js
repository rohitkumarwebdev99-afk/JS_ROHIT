const teamsIpl=['csk','rcb','kkr','mi','srh']
teamsIpl.push('gt','rr');
console.log(teamsIpl);
teamsIpl.unshift("DC","RT")
console.log(teamsIpl);

//removal

teamsIpl.pop();
console.log(teamsIpl);
teamsIpl.shift();
console.log(teamsIpl);

let a=teamsIpl.push("kk");
let b=teamsIpl.pop();
let c=teamsIpl.unshift();
let d=teamsIpl.shift();
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(teamsIpl);

//Finding element is present or not

/****** INDEXOf()******/
const rcbIndex=teamsIpl.indexOf('rcb');
console.log(rcbIndex);
const gtIndex=teamsIpl.indexOf('gt');
console.log(gtIndex);

/*******Includes()*******/

const cskincluded= teamsIpl.includes("csk");
console.log(cskincluded);
const DCincluded= teamsIpl.includes("DC");
console.log(DCincluded);

//Slice and splicw function


/*****slice()******/
//not change acctual array

console.log(teamsIpl.slice(2,4));
console.log(teamsIpl.slice(1,-2));


/********splice()********/
console.log(teamsIpl);
teamsIpl.splice(1,1);
console.log(teamsIpl);
  
/***********SORT AND toSort***********/

//sort()
console.log(teamsIpl.sort());


const arr=[10,9,11,3,25,2,1];
arr.sort((a,b)=>a-b);//
/*(a, b) => a - b means that 
function(a, b) {
    return a - b;
}
*/
console.log(arr);

const arr1=["d",'a','f','b','c','e'];
arr1.sort();
console.log(arr1);

//toSorted()
////not change acctual array
const arr3=[9,1,6,30,2,4,4,-2];
const second=arr3.toSorted((a,b)=>a-b)
// console.log(arr3.toSorted((a,b)=>a-b));
console.log(`second largets ${second[second.length-2]}`);


/****Reverse()****/
////not change acctual array
arr.reverse();
console.log(arr);

/****find()****/
////not change acctual array
// return only first matching element  and  if not find it return undefined
console.log(arr.find(x=>x%2==0));
console.log(arr.find(x=>x>10));
console.log(arr3.find(x=>x==4));


/*****filter()*******/
////not change acctual array

console.log(arr.filter(x=>x%2==0));
console.log(arr.filter(x=>x==3));
console.log(arr)

/********map()*********/
////not change acctual array

const maparr=arr.map(x=>x**2);

console.log(maparr);

//////map with object elements in array

const studentProfile=[
    {rollNo:1 ,name:'Aman'},
    {rollNo:2 ,name:'Atul'},
    {rollNo:3 ,name:'bunty'},
    {rollNo:4 ,name:'Muskan'}
]
const studentRol=studentProfile.map(s=>s.rollNo);
console.log(studentRol);
const marksData = {
    1: 80,
    2: 60,
    3: 70,
    4: 90
};

const updated = studentProfile.map(s => ({
    ...s,//It’s called the spread operator it means take all properties from object s and copy them here.
    marks: marksData[s.rollNo]
}));
console.log(updated);


///“find = loop + if + return first match”

const arr5 = [5, 12, 8, 20];

let result1= arr5.find(x => x > 10);
console.log(result1);

//how find work:-
/*for (let x of arr) {
  if (x > 10) {
    return x;   // stops here
  }
}*/