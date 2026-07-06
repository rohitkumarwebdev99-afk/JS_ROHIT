//Let Const Var
let age;
age=20;

const birthYear=1999;
// birthYear=1999;//  should be same line with delecaration
console.log(birthYear);
// birthYear=2000;
// console.log(birthYear);inshort value should not be change of const variable
 

let a=null;
console.log(a);
console.log(typeof a);

let s=1n;
console.log(typeof s);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE*10);
console.log(Number.MAX_VALUE/0);
////////////
//wrapper class
let num=10;
let nam="Rohit";
let bol=true;
let num2=10n;

console.log(num.__proto__);
console.log(nam.__proto__);
console.log(bol.__proto__);
console.log(num2.__proto__);
