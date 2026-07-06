const l1=[5,10,15];
l1.forEach(x=>{console.log(x)});

const l2=['a','b','c'];
l2.forEach((x,i)=>console.log(i,x));

//imrpoved
l2.forEach((x,i)=>{console.log(`${i}->${x}`)});

let l3=[2, 4, 6, 8];
let sum=0;
l3.forEach(x=>{sum=sum+x});
console.log(sum);

const l4=[1, 2, 3, 4, 6, 7, 8];
let count=0;
l4.forEach(x=>{if(x%2==0){ count+=1}});
console.log(`count of even no.${count}`)
count=0;
//without if
l4.forEach(x=>{count+=(x%2==0);});
console.log(`count of even no.${count}`)

const l5=[
  { name: "Aman", marks: 70 },
  { name: "Riya", marks: 40 }
];
l5.forEach(x=>{ x.passed=true;});
console.log(l5);

l5.forEach(x => {
  x = { name: "Test" };
});

console.log(l5);

const l6=[
  { name: "A", marks: 50 },
  { name: "B", marks: 60 }
];
l6.forEach(x=>{x.marks+=10;});
console.log(l6);

const l7=["apple", "banana", "mango"];
l7.forEach(x=>{console.log(`I Like ${x}`);})


const l8=[
  { item: "pen", price: 10 },
  { item: "book", price: 50 }
];
let totalPrice=0;

l8.forEach(x=>{totalPrice+=x.price;})
console.log(totalPrice);



let result=[1,2,3].forEach(x=>x*2);
console.log(result);//result will be undefined as forEach function no return value


//need to use indexvalue to store in array

const ggg = [1,2,3];

ggg.forEach((x, i) => {
  ggg[i] = x * 2;
});

console.log(ggg);

let result2=[];
[1,2,3].forEach(x=>{result2.push(x*2) ;});
console.log(result2);//this maping


result=[1,2,3].map(x=>x*2);
console.log(result);