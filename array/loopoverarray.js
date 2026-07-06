const students=['riya',
    'muskan',
    'rohit',
    'kunal',
    'pinki',
    'nikki'
];
let a=1;
 for(let i=1;i<=students.length;i++){
        console.log(`Rollno ${i}:${students[i-1]}`);
 }

 /*****forin********/
for(let i in students){
    
    console.log(`Rollno ${Number(i)+1}:${students[i]}`);
}// only differnce is 

/*******forof********/

for(let i of students)
{
    console.log(i);
}


/******Task*******/
const aprilBatch=['Diya','Preeti'];
const mayBatch=['Pinki','Tripti','Saba'];
const juneBatch=['Rajat','Milli'];
const julyBatch=[];

// function addStudent(batch,student){
//     batch.push(student);
//     console.log(batch);
// }



// addStudent(aprilBatch,'rahul');
// addStudent(mayBatch,'milad');
// addStudent(juneBatch,'helloooo');
// addStudent(julyBatch,);

//Above code problem is that only single student name passed at a time this will be complicated if thier 100 of name to pass.
////////////////////////////
/*****Rest(...)operator******/


// function addStudents(batch,...students){
//     batch.push(students);
//     console.log(batch);
// }


// addStudents(aprilBatch,'riya','muskan',["abhi","mohine"]);

// we are adding all value on single index it can cause problem


//below code will push them on differnt index
function addStudents(batch,...students){
    for(let i of students)
    {
    batch.push(i);
}

    console.log(batch);
}


addStudents(aprilBatch,'riya','muskan',["abhi","mohine"]);


/*****spread operator (....)****/
  
const newBatch=aprilBatch;
console.log(newBatch);
aprilBatch.pop();
console.log(aprilBatch);
console.log(newBatch)
// Here problem is that if we make changes to aprilbatch it affect new create arry name with newBatch
//To resolve above here come spread operator.

const newBatch2=[...juneBatch];//Here a shallow copy is created by by expannding  array and copy .
//now we change june batch it will not affect new array
console.log(newBatch2);
juneBatch.push("unknown");
console.log(juneBatch);
console.log(newBatch2)


//Note we can concat using spread in array
const mergeBatch=[...mayBatch,...aprilBatch]
