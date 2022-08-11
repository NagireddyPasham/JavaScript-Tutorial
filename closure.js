//ES6 Features

// 1. let 2. const 3. import

// Object looping : map, foreach and for of not work for object looping. Only for in use for object looping

// Example 

var items = {
  a:10, b:20
}

for(let item_val in items){
  console.log(item_val)
}


// CLOSURE
// Defination : We can access a scope of variable of parent function from child or inner function
function closure (){
  
    for(var i=0; i<=3; i++){
      setTimeout(function(){
        console.log(i)
      }, i*1000)
    }
  }
  console.log(closure()); // output is 4, 4, 4, 4 if we use let in the place of variable output is 0, 1, 2, 3 because let is block scope

// Chnage array elements
const arr = [1,2,3,4]; 
const newArr = [];
for(let i in arr){
  let new_val = arr[i]*2;
  newArr.push(new_val);
}
console.log(newArr);
// output is  [2,4,6,8]

// or

var modifyArr = arr.map(function(value, index){
    return value*2;
})
console.log(modifyArr);
// output is  [2,4,6,8]

// end

// Get duplicate values from array
const dupl_arr = [1,2,3,4,2,3]
var modifyArr = dupl_arr.filter((element, index) =>{
  if(arr.indexOf(element) != index){
    return element;
  }
})
console.log(modifyArr)
// output is [2,3]

// Get unique array after remove duplicates

var modifyArr = dupl_arr.filter(function(element, index){
    if(arr.indexOf(element) == index){
      return element;
    }
})
console.log(modifyArr)
// output is [1,2,3,4]

// Currying Example 
// Defination : Currying is a function that accepts multiple arguments. It will transform this function to sequence of multiple functions
  
// Non currying function 
  
function abc(a,b,c){
  return a + b + c;
}
console.log(abc(10,20,30)); // oupt put is 60

// Currying function 

const addCurry = (a) => {
  return (b) => {
    return (c) => {
        return a+b+c;
    }
  }
}
console.log(addCurry(10)(20)(30))

// CLUSTER 
// Defination : Cluister is a process can be used to run multiple instances of Nodejs. It distributes the workloads to multiple threads.
