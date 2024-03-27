

// Data-types -- thsee are two types ---

// primitive and reference types --

// primitive datatypes ---

/* 

1. strings 
2. number
3. boolean
4. null
5. undefined




*/


// reference datatypes -- () [] {} -- these brackets means reference datatype. 

// if we copy some values of variable in reference dataype, it means it send the reference of that particular datatype which means it actually does not copy that variable value it sends the reference of  values in other variable if we somethinf change in it it automatically changes the original vaule , if we did this same in primitive datatypes it actually creates a copy of variable in other variable and if we change it, it remains same original value before copy and it changed only copied variable value.




// conditionals --- basically means true false .

// we are reading about   -- if , else , else-if , ternary operator , switch case .

// 99% time we are using -- if else esle-if.

// 1% time we are using -- ternary operator.

// switch case almost not use .



// when we have to take decision in program , like how to execute based on different secnarios or choices,  where we use if else.

// in if we can either write true or false. 

// if indicate true and esle indicate false. 



// ex -- 

var age = 18;

if(age>=18){
  console.log("you are applicable");
}
else{
  console.log("you are not applicable");
}



// truth and fasly values -- in that concept, we can make every value true or false but it depend on type of value, if that value is truthy it becomes truth and if that value falsy it becomes falsy.

// how do we know which value is truthy and falsy value ?

// null, undefined, NaN , 0 ,  "" , '' ,  document.all ,  false -- these are all falsy value and after that values are all truthy values. 


// nested if  - we write if inside if.



// if else if -- it is use to make another codition or check multiple condition. 

var a = 15;

if(a<15){

}
else if(a > 15){

}
else if(a > 16){

}
else{

}



// loops ---  run untill meet the desired condition. loops means repetation.

// repetation = loops

// tyeps of loops - for , while , do-while , foreach , forof , forin .

// 70% time for loop use 
// 25% time foreach use
// 5% time while 



// for loop -- A for loop repeats until a specified condition evaluates to false.


/*

syntax of for loop

 for(start; end; change){

 }

 */



//  5 - 10 


 for(var num = 5; num<10; num++){

 }


//  10 - 25 

for(var i = 10; i<25; i++){

}


// 25 - 50 

for( var i = 25; i<50; i++){

}

// 35 - 40 

for(var i = 35; i<40; i++){

}


// 20 - 5

for(var i = 20; i>4; i--){

}

// 5 - 1

for(var i = 5; i>0; i--){

}


// while loop -- a while loop is a control flow statement that repeatedly executes a block of code as long as a specified condition evaluates to true

/*

syntax -- 


start;
while(end){
  change;
}

*/


// ex -- 

// 1 - 10

var i = 1;
while(i<11){
  i++;
}



// 20 -30 

var i = 20;
while(i<31){
  i++;
}


// 32 - 45 

var i = 32;
while(i<46){
  i++;
}


// 45 - 32 

var i = 45;
while(i>31){
  i--;
}


// 12 - 1

var i = 12;
while(i>0){
  i--;
}



// foreach loop -- foreach loop ek normal loop nhi hai for and while ki tarah jo number pe ya start end pe chalta hai.

// foreach loop sirf arrray pr chalta hai.












