
// 3rd question 

// create a form with input fields and submit button, use javascript to validate the form and display an error message if the input is invalid?


// jab bhi form ke sath deal kro to yad rakho ki form submit hone pr page ko reload kr dete h, aur humein khayal rakhana h ki pagaes reload na ho , agar page reload hua to js nhi chelga , kyuki js chl paye usse phle hi page reload ho chuka hoga.


// 1. first thing we need to stop the reload system when we submit the form . how to do it ?

// form submit hone pr reload  se rokne ke liye hum preventdefault ka use krte hai 


// 2. checking the input fields are blank or not ?

// ex - 



// code mtd 1 - but not effective



// var in1 = document.querySelector("#in1");

// var in2 = document.querySelector("#in2");


// var h4 = document.querySelector("h4");





// var form = document.querySelector("form");

// form.addEventListener("submit", function(ev){
//   // revent reload
//   ev.preventDefault();
  
//   // check input

//   if(in1 === "" || in2.value === ""){
//     // show error
//     h4.textContent = "error, some fields are blank";
//     h4.style.color = "red";
//   }
//   else{
//     h4.textContent = " ";
//   }
// })


// another an effective and proper way to solve this question -- 

var form = document.querySelector("form");


var inps = document.querySelectorAll('input[type="text"]');

var h4 = document.querySelector("h4");


form.addEventListener("submit", function(ev){
  ev.preventDefault(); // stop reload 

  // using for loop to know input fields are empty or  not
  
  for(var i = 0; i<inps.length; i++){
    if(inps[i].value.trim() === ''){
      h4.textContent = "error, some fields are blank";
      h4.style.color = "red";
      break;
    }
  }
})






