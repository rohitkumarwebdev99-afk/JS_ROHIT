const class6={
    SecA:{
        student1:{
            name:"Alex",
            Age:12,
        },
        student2:{
            name:"Bob",
            Age:14
        },
    },
    SecB:{
        student1:{
            name:"rAM",
            Age:12,
        },
        student2:{
            name:"SITA",
            Age:90,
        },
    }
} 

console.log(class6.SecB.student2.Age);
// console.log(class6[1].SecB.student2.Age);
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj)
{
    console.log(key);
}

 