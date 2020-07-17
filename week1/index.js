
//nodemon index.js

console.log("Hello world, Node.js!");


let arr = [1,2,3,0,5]


arr.push(6);
console.log(arr);

arr.unshift(7);
console.log(arr);

arr.splice(3, 0, 'NEW');
console.log(arr);


arr.pop();
console.log(arr);

arr.splice(1,1);
console.log(arr);

arr[4] = 100;
console.log(arr);

arr.sort();
console.log(arr);




let object =
{
    "people":[
        {'firstName':'Roy','lastname':'Moore'},
        {'firstName':'Poop','lastname':'Moore'},
        {'firstName':'Donald','lastname':'Moore'},
    ]
}

console.log(object);


var myJSON = JSON.stringify(object);
console.log(myJSON);

var parseJSON = JSON.parse(myJSON);
console.log(parseJSON);


const arrayAdd = require('array-add-num');
ARRAY=arrayAdd([5, 4, 3, 8]);
console.log("Sum of array is??" + ARRAY);


var json = require('./package.json');

console.log(json.dependencies);



function multiplyNums(x, y, z){
    return “new number is “ + x * y * z;
    }
; 



const multiplyNums = (x, y, z) => {return "new number is " + x * y * z};

