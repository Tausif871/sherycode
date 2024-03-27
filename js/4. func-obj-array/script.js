


// function -- function is a block of code that performs a specific task and it can be reused through out a program.

// functions are the first class citizens.


// es5 and es6 function  statements are ----

// es5 -- function statement , function expression , anonymous function

// es6 -- fat arrow function - it is three types such as -- 1. basic fat arrow 2. fat arrow with one param 3. fat arrow implicit return 



// in js, function are not be normal programming language means to make function we do not declare type in js and only we have to write function keyword to make function .


/* ex - function abcd(param){

}


*/


// fact of function in js -- in js functions are called first class function means in js we can treat function as value or variable. 


// what is function -- function is a code that we are using multiple times or a code we do not need to start now but later where we are using function.


// why we need -- to reuse code and to wrap the code which we want to run in future at some point of time.


// extras -- parameter and arguments -- 

// parameters -- when we create a function  and we can send values in function we can send any values like - function, string , number etc. 

/*
function abcd(Parameter){

}
abcd(arguments)

if we give value 12 it assign to parameter and the values is argument. 
*/



// interviews -- 

// types of function --

// 1. function statement - when we create function it is a function statement. below function statement.


// function(){}



// 2. function expression -- below function it is a function expression, 

var abcdd = function(){

}

// 3. anonymous function --- when we does not give function a name it is anonymous function.

// below function statemennt is annonmous function

// function () {}



// 4. fat arrow -- below is the fat arrow function 


// () => {};


// var a = () =>{}  also we can save it in a variable .


// there are 3 types of fat arrow func - 

// 1. fat arrow with single parameter -- in below statement f is a function and ab is the parameter and we call fat function we use only in single parameter . we can also add bracket in ab or we not . both are right .

var f = ab =>{}

f(12);



// implict return -   it is the return satement of implicit return. here we write string is the return .

var ab = () => "hrsh";



// return --  it means where we do return if give the values of that function and do what the functions says and we return it and cal it and it show the result if we do not return it does not show the result.


// aisa function ho kuch return nhi karta wo bhi undefined return karta hai. in js every function returns undefined if we give values to the function it does not return undefined. 







// undefined , not defined , and null ---- 


// undefined - is a value, it is given when a variable does not assign any value, it means , it treat like a garbage value and we can say that default value .



// not defined - is a error , is we do console.log(a) , it show an error beacause we do not make a value it shows ana error. 



// null - is a value , it is a value which resolve like not found , means nul recieved when something is not found.



// Array --- array is used when we have to give multiple values like - number , string , boolean , null etc.

// we use sqaure bracket to create array -- []


//  ex - 

var users = ["man1", "man2", "man3"];


// users is an array  that contain multiple values .


// we can access that value through indexing no . index no start from 0 .

console.log(users[0]);


// why we need array -- a lot of times the data is in the shape of multiple values and to contain all data together we save it in an array.



// loop with array -- 

// q - all all members of array - 

// q - count all members 


var arr = [1,2,3,4,5,6,17];

// how to loop an array ?
// how to do someting with each element and loop array?

arr.forEach(function(elem){
  console.log(elem);
})


arr.forEach((elem1) => {
  console.log(elem1 + 2)
});




// objects -- object is a way and used to write multiple identity details in it .

// ex - name:tausif, age:18 etc

// we use curly brackets to make an object {}.

// ex code - 


var data = {
  name:"tausif",
  age: 24,
  city : "Delhi"
}

console.log(data)


// another way to create an object - 

let obj = new Object(); 

console.log(obj)




// synchronous and asynchronous js --- 


// synchronous -- it runs code step by step or line by line  if any line of code takes time it wait for it until complete the task. 






// asynchronous -- in asynchronous code runs all code start and when the any one of code complete first it show the result. means when we run a multiple line code task in asynchronous order and when any one of code execute fast it show the reuslt of the code , it does not matter which line of code run fast. 


// there are two types of memory stack in js -- 1. main stcak , 2. side stack or heap


// ex to understand --


// we write a code that mix with both synchronous and asynchronous, if we run that code , all the synchronous code go to the main stcak memory and asynchronous code go to side stack or heap memory after that when main stack code run completly , it remopves from the main stack so then asynchronous code come in it and executes and completed task add it in to main stcak and then main stack shows result of asynchronous code and remove it when task completed and after that another asynchronous code task add it shows in main stack and again it removes the the code from  main stack.

// main stack would be empty after the code runs successfully if we do asynchronous code it asks to main stcak again and agin to executes the code in main stack, once all code executes sucessfully it closed .























