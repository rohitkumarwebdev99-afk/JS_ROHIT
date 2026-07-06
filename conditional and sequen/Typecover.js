//String Convertion

//String()

console.log(String(100));
console.log(String(true));
console.log(String(10.2));
console.log(String(null));
console.log(String(0));
console.log(String(undefined));



//toString()
console.log((100).toString());
console.log((true).toString());
//null and undefined cannot be converted using toString()
// console.log((null).toString());
// console.log((undefined).toString());



//To Number convertion
console.log(Number("55"));
console.log(Number(true));
console.log(Number(false));

let a="90";
console.log(+a);

console.log(parseFloat("7897.787u9"));
// console.log(parseFloat(false));give nan

console.log(parseInt("788987rt"));
console.log(parseInt(true))

//To Boolean Convertion

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(1090909));
console.log(Boolean(""));
console.log(Boolean("aaaaa"));
