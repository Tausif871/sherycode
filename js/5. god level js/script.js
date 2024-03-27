

// God level js start -- 


// this call apply bind --


// this keyword -- 

// keyword means a word that hold a meaning in programming language.

// this -- it is the most suspenseful keyword in js, this can be change accoring to different coditions, to understand this keyword we have to understand the all situations , after understanding all situations we can easily use this keyword.




// global scope mein this ki value -- window


//  global scope means kisi bhi scope ke andar code ka na hona mean code kisi bhi braces or func ke andar code  na hona. 

console.log(this);


// function mein this ki value --- window

function abcd(){
  console.log(this);
}

abcd();


// method mein this ki value --- object , aisa function jo obj ke andr ho wo method hota h.

var obj = {
  name: function(){
    console.log(this)
  }
}

obj.name();


// function inside mthod es5 mein this ki value --- window

var obj2 ={
  sayname : function(){
    console.log(this); // that this value is object

    function childfnc(){
      console.log(this); // it refers to window

    }
    childfnc()
  }
}

obj2.sayname();


// fun inside methos es6 mein this ki value --- object 


var obj3 = {
  SayMyName : function(){
    const child = () => {
      console.log(this);
    }

    child();
  }
}

obj3.SayMyName()


// constructor function mein this ki value -- new blank object 


function add(){
  console.log(this);
}

const ans = new add();


// event listner mein this ki value ---  that element jis pr event listner laga ho 

document.querySelector("button").addEventListener("click" , function(){
  console.log(this);
})






// call apply bind ---- ye 3 tarike h function ko call karne ke liye kisi object ko this maan kar.


// call - 

// ex - 

const obj4 = {name1 : "harsh"};

function abc(){
  console.log(this);
}

abc.call(obj4);


// apply -- apply ke andar pahli value this hota hai aur dusari value array hota h .

const obj5 = {name : "harssshhh"};

function ab(a,b,c){
  console.log(this,a,b,c);
}

ab.apply(obj5, [1,2,3]);


// bind - it look a like call but bind did not call the function it give a return function so that we can run when we need it .

// ex -

const obj6 = {name4 : "tausif"};

function abcd1(){
  console.log(this);
}

const baadMeinChalaneKeliyeFunc = abcd1.bind(obj6);

baadMeinChalaneKeliyeFunc();




// prototypal inheritance --- hum objects create karte hai and kisi ek parent constructor function ke prototype mein kuch add kr dete hai and jb bhi add hota hai to wo parent se banane walae sabhi children instances ko wo properties jo parent ko prototype mein di gayi thi wo milti hai saugaat mein.

// ex -- 


function makeHuman(name,age) {
  this.name = name;
  this.age = age;
}

const human1 = new makeHuman("harsh", 25);

console.log(human1);

// aisa koi bhi function jisme app this ka upyog kar rhe ho aur us function ko call karte wqt app new ka upyog kre to new la matalab wha pr ek blnk object ho jata h.


// ek function jo ki this ka use kr rha ho aur new ke dwaara nay naye  objects bana kar deta ho aise function ko constructor function kahte hai.

function abd1(){

}                              // this is the constructor function

new abd1();   



// prototypal inheritance --


function makeHuman1(name,age) {
  this.name = name;
  this.age = age;
}

// prototypeal inheritance use 

makeHuman1.prototype.printmyname = function(){
  console.log(this.name);
}


const human2 = new makeHuman("harsh", 25);

// console.log(human2);



// clousers --- aisa koi bhi function jo ek aur function ko return karte hai  use clouser kehte hai.

// clouser is a function that return another function and use parent's function variable is known as clouser.

// ex - 


function counter(){
  var count = 0;  // parent variavle
  return function(){
    count++;
    console.log(count) // use parent variable
  };
}

var countt = counter();

countt();


// ex -2 


function timer(){
  var a = 12;
  return setTimeout(function(){
    console.log(a)
  }, 2000);
};

var b = timer();

console.log(b)


// event delegation -- jb aap ek event listner se kyi sare different elements ke event ko handle kr sake. 

// event bubling means jis pe event hua h , agar play pr listner nhi hua to unske parent ko check kro agr us pr bhi nhi hua to uske parent ko check kro.

// event listner ko parent pr lagao aur unko id, class ya fir tag ke basis pr differentiate kr different task karaao. parent hona jaruri h.


// ex -- 


// var parent = document.querySelector("#parent");

// parent.addEventListener("click", function(){
//   console.log("works")
// })



// here we see the details of the parent and go to target we see which btn is clicked.


// var parent = document.querySelector("#parent");

// parent.addEventListener("click", function(details){
//   console.log(details)
// })


// also we can check id of buttons usig if else


var parent = document.querySelector("#parent");

parent.addEventListener("click", function(details){
  if(details.target.id === "play"){
    console.log("play song");

  }
  else if(details.target.id === "pause"){
    console.log("pause song");
  }
})



// high order functions -- aisa koi bhi function jo ki ek func ko ek parameter mein accept kr le and/or ek function ko return kr de .


// function boy(param){

// }

// boy(function(){})

// both up and down is higher order function


function boy(param){
  return function(){}
}




// try and catch - error handling 

// it is use to handle the erros. 

// 

function divide(a,b){
  try{
    if(b == 0);

    throw Error("koi error hui")
  }
  catch(err){
    console.error(err);
  }
}

divide(12,0);



// events - click, dblclick, mouseover, input

// custom events --- it is use to create our own evevnts. we can make event any new name event by using Event constructor.

// how - 

const evt = new Event("chacha");  

document.querySelector("button").addEventListener("chacha", function(){
  alert("chahcha event hua")
})

document.querySelector("button").dispatchEvent(evt); // we havr to dispacht event to use it ande mention variable name inside eventdispatch.


// make event
// attach event to some dom element
// dispatch that event from that dom element in which you attached the event.
















