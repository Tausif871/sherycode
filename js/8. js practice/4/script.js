
// 4th question


// create an unordered list , allow users to add and remove list items dynamically using buttons ?


// how to do it  ?


var addbtn = document.querySelector("#addbtn");

var rmbtn = document.querySelector("#rmbtn");

var inp = document.querySelector("input");

var li;



var ul = document.querySelector("ul")


addbtn.addEventListener("click", function(){
  if(inp.value.trim() === ''){

  }
  else{
    li = document.createElement('li');
    li.textContent = inp.value;
    ul.appendChild(li);
    inp.value = "";
  }
})


rmbtn.addEventListener("click", function(){
  ul.removeChild(li);
  
})