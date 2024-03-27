


// Asynchronous js -- 

// main stack and side stack or callback queue--

// main stack pahle khali hota hai , event loop lagatar check krta rahta h main stack khali hua ki nhi , jo asynchronous task phle complete ho jata h wo phle chalta h main stack mein.




// aisa koi bhi code jisme kuch time lagta h , js mein use by default in most cases mein async code man kr side stack mein dal diya jata h.


// set timeout, set interval, fetch api, axios [ or other HTTP library ], promise - ye sabhi use hi tab kiye jaate hai jb usko kuch aisa karna hai jisme time lagega.



// settimeout - settimeout ka code kuch der baad chalta h. settimeout ek function h jo ek aur functionko chalta h aur dusra time mangata h jb code chale. 


setTimeout(function(){
  console.log("hey")} ,1000);






// setinterval - setinterval ka code kuch der baad chalta h baar baar ek particular interval time mein.


// setInterval(() => {
// console.log("hey1")  
// }, 1000);

// how to stop steinterval --  store it in a variable and give a commns clearinterval to stop the setinterval.

// ex -- 

let stop = setInterval(function(){
  console.log("hey1")
}, 1000);

// clearinterval command use to stop setinterval -- 

clearInterval(stop);


// anotoher method to stop setinterval 

let count = 1;

let stopint = setInterval(() => {
  count++;
  console.log(count);
  if(count <= 3){
    clearInterval(count);
  }
}, 1000);


// fetch API - ye kisi aur URL [API] pr ja kr kuch data layega ya data humare paas se us API pr lekr jayega .

// kyuki ye internet pr jayega phir data ko lekr ayega to isme time lagat hai to by default hi js mein fetch ko async banaya gya hai kyuki fetch ka kaam hai data lana wo bhi kisi url se ab aisa ho sakta hai us url ki website slow ho , lane mein time lge aur agar fetch synchronous hota to uske baad ka code tb tk nhi chalta jb tk uska data nhi aajata , which is a big problem aur pura code atak sakta tha.

// if we want to print aur data when ready so we do with then keyword it come with fetch by default.

// code


// fetch(`https://randomuser.me/api/`).then(raw => raw.json()).then(readable => console.log(readable.results[0].gender));


// fetch(`https://jsonplaceholder.typicode.com/posts`)
// .then(raw => raw.json())
// .then(res => console.log(res));




// AXIOS [ or other HTTP libraries] - ye bhi whi karega jo fetch karta h bs ye thoda ye jayada developer friendly hai. 

// in AXIOS mein hume bs ek baar then lagana padta h jbki feth mein do baar lagana padata hai ek json mein convert karne ke liye aur dusra result ko print krne ke liye.

// in axios we do not get raw dat we get only result.

// code

// axios.get(`https://randomuser.me/api/`)
// .then(result => console.log(result.data.results[0]))






// promise -- ye janab ke andar jo code likhoge wo apna kam krega aur ye khud side stack mein chale jayenge us code ko lekr aur jab andar se code ko resolve kiya jayega tb ye chalenge.


// promises kya hau=i ?

// ye socho promises mein  ek code hai jo async code hai jo side stack mein jayega aur baad mein chalega  main stack mein
//  ab ye socho ki aapne is code ko likha hai to sika answer kabhi aayega aur aisa bhi ho sakta hai kabhu  answer na aaye 


// promises kya hai , aisa samjho ki aap promise ke andar koi bhi async code likhdo jo man mein aaye aur promise ek parchi de deta hai and wo parchi pr by default likha hota hai waiting, parchi pr do events hote hai mainly ek event ka nam hai then and dusra event ka nam h catch, agar aapka data aagya to parchi pe completed likha jayega waiting ki jagah and then chalega aur agar data mein dikkat aayi to catch chalega and waiting ki jagah rejected likh jayega.


// to create promise we use new keyword and promise 

// syntax  -

// new Promise(function(resolve, reject){

// })


const parchi = new Promise(function(resolve, reject){
  // jake ek use lao and agar wo male go green btn nhi to red btn.

  fetch(`https://randomuser.me/api/`)
  .then(raw => raw.json())
  .then(res => {
    if(res.results[0].gender === "male"){resolve();} 
    else {reject();}
  })
})
parchi
.then(()=>{
  console.log("hara btn daba")
})
.catch(() => {
  console.log("lal btn daba")
})




// callbacks -- 

// callback kuch khas nhi blki sirf ek function hota h bs thoda special jo hai wo ye hai ki ise pass kiya jata hai as argument jb particular async code chll jaye .


// callback kuch nhi bs ek function hota hai jisse pass kiya gya ho kisi aur function mein aur jb wo function chale to app us pass kiye gye callback function ko chala payenge.

// ex -- 

function ab(a,b){

  b();

}
ab(1, function(){console.log("callbak chalo")})

// to kaise use krte hai 

// callback pahli chiz to ek function hai , aap is function mein wo sb likh do jo aapko chalana ho jb aapka answer aajaye aur ise tb chaalo jb aapka async code chl chuka ho .




// function doSomeAsyncTask(url , callback){
  //   fetch(url )
  //   .then(raw => raw.json())
  //   .then(res => {
    //     callback()
    
    //   })
    // }
    
    // doSomeAsyncTask("some url", function(){
      
      // })
      
      
      
// task - user se data managao aur jb data aajaye to us data ko name , gender and email ko print karo .

function getData(url , callback){
  fetch(url)
  .then(raw => raw.json())
  .then(res => {
    callback(res)
  })
}

getData("https://randomuser.me/api/", function(res){
  console.log(res.results[0].gender, res.results[0].email, res.results[0].name.first);
})



// async / await -- koi bhi function bana lo aur use andar jo man mei aaye wo async code likh do , ab jab aap async likhte ho to baaad waali line phale chal jaati hai kyuki async side stack pe hota hai aur baad wali line agar async ke basic pr hui to aapka code fail ho jayaga wo is liye kyu ki aapka code depend karta hai async code pe jo ki baad mein chalega sync code chalne ke baad.


// with async await aap async code bhi aise likh skte ho jaise ki aap normal synchronous code likh rahe ho .


async function abcd (){
  let aa = await fetch(`https://randomuser.me/api/`);

  aa = await aa.json();
  console.log(aa)
}

abcd();



// event loop --  event is the loop that continous check the main stack space is empty or not , if the main stack empty then it run the side stack completed code in main stack.



// Asynchronous vs callbacks vs promises vs async-await ---- 


// q - ek url se data lekr aao aur use console pe show kro? by using all of them.

// callback used

function datafetcher(url, callback){
  fetch(url)
  .then(raw => raw.json())
  .then(result => {
    callback(result);
  })
}

datafetcher("https://randomuser.me/api/", function(result){
  console.log(result);
});


// promised used - 

// function datafetch(url){
//   const parchi1 = new Promise(function(resolve,reject){
//     fetch(url).then(raw => raw.json()).then(result => {
//       resolve(result);
//     })
//   })
  
// }

// datafetch("https://randomuser.me/api/")
// .then(function(result){
//   console.log(result);
// })




// generators -- 

// generators , aap execution ko pause kr sakte ho and bol sakte ho ki ab agla step jab bhi chahiye wo step ko start kar sakte ho .

// how to make it -- koi bhi function ke aage star * laga dete h to wo generator bn jata hai aur uske sath yield nam ka keyword aata h jo execution ko stop krne me help krta h.

// ex - 

function* printNum(){
  console.log("started")
  yield 1;                    // yield means stop there 
  console.log("phla chl chuka")
  yield 2;
  console.log("dusra chl chuka")
  yield 3;

}


const ans = printNum()

console.log(ans.next().value);
console.log(ans.next().value);



// q - 1 - 10

function* nums (){
  for(let i = 1; i<11; i++){
    yield 1;
  }
}


const gen = nums();

console.log(gen.next().value);
console.log(gen.next().value);



// web workers -- usually hamara pura code single thread pr chalta h pr kyi baar kuch bade calculations perform krne pad jaate hai jiski wajah se aapka main thread busy ho jata hai , ya fir wo kaafi jayada loaded ho jata hai aur aapke baaki tasks ki performance kam ho jati hai , is situation ko acche se handle krne ke liye we use web workers. 

// aap chaho to apna koi task web worker ko bhej skte ho jo ki doosre thread mein usko perform karega and aapka main thread effeciently cheejo ko handle kr payega. 



// thread aisa samhjo ki ek computational task komperform krne ke liye ek tread allot hota hai.

// how to create it -- first we have to create  a another file name like worker.js and come to code type new Worker('file name')



// ex -- 

// new Worker("./worker.js")


// aap apni main js file se data send kr sakte hai aur aap worker file se data accept karoge and jo perfrom krna hai karoge aur wha se data wapas main file mein bhejoge ya accept karoge.


var numm = Array.from({lenght:1000000}, (_,b) =>b+1);

const worker = new Worker("./worker.js");


worker.postMessage(numm);

worker.onmessage = function(data){
  console.log(data.data)
}














