// DATA TYPES

// Data types used to hold different type of values like number, string, booleann etc....
// Data types 2 types 1. Premitive data types 2. Non-premitive data types

// PREMITIVE DATA TYPES
// 1. Number 2. Sring 3. Boolean 4. null, 5. undefined

// NON - PRMITIVE DATA TYPES

// 1. Objects 2. Arrays 3. RegExp

// OBJECTS

// Javascript is a object based longuage not class based we can create object here without class
// Object have properties and methods

// There are 3 types to create object
// 1. By object literal
var objName = {key1:val1, key2:val2}
// 2. By New keyword
var objName = new Object();
// Example
var employee = new Object();
employee.id = 101;
employee.name = "Nag";
employee.salary = "60000";

// 3. By creating constructor function
// example

function employee(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary
}
var emp = new employee(101, "Nag", 60000);
console.log(emp.salary) // output is 60000

// Defining a method in Object

// We can define a method in object . But before define method , we need to add property in the function with same name as method

function employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.changeSalary = changeSalary;
    function changeSalary(otherSalary) {
      this.salary = otherSalary;
    }
  }
  var emp = new employee(101, 'Nag', 60000);
  emp.changeSalary(100000);
  console.log(emp.salary);
  
  // Object Methods

  // 1. Object.assign() : Used to own properties from source object to target object
  // Example 1
  var object1 = {a:1, b:2, c:3}
  var object2 = Object.assign(object1); // output is {a:1, b:2, c:3}
  var object3 = Object.assign({d:4,e:5},object1) // output is {d:4,e:5,a:1,b:2,c:3}

  // 2. Object.create() : Used to create new object with specified proto type

  // 3. Object.is() : Used to compare the two values are the same or not

    Object.is(20,20) // true
    Object.is(10,20) // false

  // 4. Object.keys() : Used to get all keys of object in the form of array

  var items = {a:1, b:2, c:3}
  var keys = Object.keys(items);
  console.log(keys) // output is [a,b,c]

  // 5. Object.values() : Used to get the values of object in the form of aray

  var items = {a:1, b:2, c:3}
  var values = Object.values(items);
  console.log(values)  // output is [1,2,3]


// ARRAYS

// Defination : Array is a collection of similar type of values. We can create a arry in 3 ways

// 1. By literal

var arr = [1, 2, 3];

// 2. By new keyword

var arr = new Array();

arr[0]  =   101;
arr[1]  =   "Nag";
arr[2]  =   60000

// 3. By constructor method

var arr = ["Nag", "Prasad", "Rishi"]
for(let item in arr){
  console.log(item)
}

// Array Methods

// 1. array.conatct() : Used to merge two or more arrys and returns new array
// Example 

var arr1 = [1,2,3];
var arr2 = [3,4,5];

var newArr = array1.concat(arr2);
console.log(newArr) // output is [1,2,3,3,4,5]

// 2. array.find() : It will find the first value from given array which is satisfied given function condition

var arr = [20,30,40,50];
var res = array.find(x => x > 30);
console.log(res) // output is 40

// 3. arry.forEach() : It gives the each invidual element of array

var arr = [20,30,40];
arr.forEach((value,key)=>{
  console.log(value)    // output is 20,30,40
})

// 4. array.includes() : It will check the given value is exist in array or not

var items = [20,30,40];
var res = items.includes(10) // output is false
var res1 = items.includes(20) // output is true

// 5. array.indexOf() : It will check the position(index) of element in given array

var items = [20,30,40]
var res = items.indexOf(30);
console.log(res) // output is 1 (this is element position or index)

// 6. array.isArray() : It checks the passed value is an array or not

var items = [10,20];
var res = array.isArray(items);
console.log(res) // output is true

// 7. array.join() : It is used to combine all array elemnts as a string

var arr = ["Iam","Learning","arrays"];
var newArray = arr.join();
console.log(newArray) // output is (Iam,Learning,arrays) as string

// 8. array.keys() : Used to get all keys of an array

var arr = [10,20,30,40];
var res = arr.keys();
console.log(res) // output is [0,1,2,3]

// 9. array.pop() : It removes last element of array and returns remaining array

var arr = [10, 20, 30];
var newArr = arr.pop();
console.log(newArray)  // output is [10,20]

// 10. array.shift() : It removes the first element of an array and returns the remaining array

var arr = [10,20,30];
var newArray = arr.shift();
console.log(newArray);   // output is [20,30]

// 11. array.push() : By using this we can add element to end of array

var arr = [10,20,30];
var newArr =  arr.push(40);
console.log(newArray)  // output is [10,20,30,40];


// 12. array.unshift() : By using this we can add element to the top of an array

var arr = [10,20,30];
var newArr = arr.unshift(40);
console.log(newArray)  // output is [40, 10, 20, 30]

// 13. array.slice() : It is used split the array with specified position
// syntax is array.slice(start, end)
var arr = [10, 20, 30, 40] 
arr.slice(1,2) // output is [20]


// 14. array.slice() : It is used to add elemnt into array with specified position

var arr = [10, 20, 40] 
arr.splice(0,2, 30) // output is [10,20,30,40]

// 15. array.toString() : Used to conver arry to string

var items  = ['hello','array','learner'];
var str = items.toString();
console.log(str)  // output is (hello,array,learner) as astring


// 16. array.values() : Userd get values of an array

// 17. array.reverse() : It will give array in reverse order

var items = [10, 20, 30];
var newArr = items.reverse();
console.log(newArr);  // output is [30, 20, 10]

// STRINGS

// We can create strings in 2 ways

// 1. By string literal

var str = "Hello Nag";

// 2. By using new keyword

var str = new String("Hello Nag");

// STRING METHODS

// 1. charAt() : To find the value of character in a string

var str = "Nagireddy";
console.log(str.charAt(4)); // output is r

// 2. concat() : Userd to concat two are more strings

var str1 = "Hello ";
var str2 = "Nag";

var str = str1.concat(str2) // output is "Hello Nag"

// 3.

