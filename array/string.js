// let str='JavaScript is an amazing language';
// let freq={};
// for(let i=0;i<str.length;i++){
//          let charat=str.charAt(i);
//          console.log(charat);
//         if(freq[charat]){
//             freq[charat]++;
//         }
//         else{
//             freq[charat]=1;
//         }
    
// }
// console.log(freq);
let str='   JavaScript is an     amazing language';

let count=0;
str=str.trim();
for(let char of str){
    if(char===' ')
    {
        count++
    }
}
let words=str.split(/\s+/);
console.log(words.length);


console.log(str.substring(0,10));
console.log(str.substring(21,28));
//All negative value are coverted to zero.
console.log(str.substring(-2,4));


//where as slice don't convert  negative no
console.log(str.slice(-1,3));
//if thier is greator value or negative in slice start (negative value which give greator value than end value after adding legth of string)


let countvo=0;
let vowels=["a","e","i","o","u"];
for(let char of str){
        for(let i in vowels){
            if(char==vowels[i]){
                countvo++;
            }
        }
}
console.log(`count of vowels ${countvo}`)

let vowcount=0
let vow={
    a:true,
    e:true,
    i:true,
    o:true,
    u:true
}
for(let char of str.toLowerCase()){
    if(vow[char])
        vowcount++;
}
console.log(vowcount);

vowcount=0;
let vowelsa=["a","e","i","o","u"];
let vowlcount=str.toLowerCase().split("").filter(char=>vowelsa.includes(char)).length;
console.log(vowlcount)

let result=[];
let wordss=str.split(" ");
for(let i in wordss)
    result.push(wordss[i].split("").reverse().join(""));
console.log(result.join(" "));


let name="Rohit";
let reverse="";
for(let i=name.length-1;i>=0;i--){
    reverse+=name[i];
}
console.log(reverse);

let pervouswordlength=0;
let logestword;
for(let word of wordss){
    if(word.length>pervouswordlength)
    {
        pervouswordlength=word.length;
        logestword=word;
    }
}
console.log(logestword);

let newarray= str.split(/\s+/).sort((a,b)=>a.length - b.length);
console.log(newarray[newarray.length-1]);



let str1="aaaabaaaa";
str1=str1.toString().toLowerCase();
let revrse="";

for(let i=str1.length-1;i>=0;i--){
    revrse+=str1[i];
       
}
console.log(revrse)
if(revrse===str1){

    console.log("palindrome")
}
else{
    console.log("notpalindrome")
} 


let isPalindrome=true;

for(let i =0;i<str1.length/2;i++){
    if(str1[i]!==str1[str1.length-1-i]){
       isPalindrome=false;
       break;
    }
}

console.log(isPalindrome);

let freq={};
let rest="";
for(let char of str1)
{   
    if(freq[char]){
        freq[char]++;
    }
    else{
        freq[char]=1;
    }
    if(freq[char]==1){
    rest+=char;
}


}

// console.log(rest);
// console.log(freq);
for(let char of str1){
    // if(freq[char]===1){
    //     console.log(char);
    //     break;
    // }
    if(str1.indexOf(char)===str1.lastIndexOf(char)){
        console.log(char);
        break;
    }

}







let freq2={};


let real=str1.split("").reduce((acc,c)=>{acc[c]=(acc[c]||0)+1; acc.includes
     return acc;},{});
console.log(real);


let nondup=str1.split("").reduce((acc,c)=>{
    !acc.includes(c)&&acc.push(c);
    return acc
},[])
console.log(nondup.join(""));



let wordsss=str.trim().split(/\s+/);
let wordarr=[];
let resultw=[]
console.log(wordsss)
for(let word of wordsss){
    // wordarr=word.split("");
    // wordarr[0]=wordarr[0].toUpperCase();
    // word=wordarr.join("");
    // resultw.push(word);
    resultw.push(word[0].toUpperCase()+word.slice(1));
}
console.log(resultw.join(" "));


let str2="abbbccdddddaa";
let newchar="";

// for(let char of str2){
//     let count=0;
//     for(let i=str2.indexOf(char);i<str2.length;i++){
         
//          if(char===str2[i]&&!newchar.includes(char)){
//             count+=1;
//             console.log(char,count);
//          }
//     }
//     if(!newchar.includes(char))
//     newchar+=char+count;
// }

// console.log(newchar);
count = 1;

for(let i = 0; i < str2.length; i++){

    if(str2[i] === str2[i + 1]){
        count++;
    }
    else{
        newchar += str2[i] + count;
        count = 1;
    }
}

console.log(newchar);


let word1="Evil";
let word2="ROhit";

word1 = word1.toLowerCase().split("").sort().join("");
word2 = word2.toLowerCase().split("").sort().join("");

if(word1===word2){
    console.log("it is anagram ");
}
else{
    console.log("it is not anagram ");
}


































