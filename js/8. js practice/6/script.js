

// q - 6

//  create a tabbed interface where clicking on tabs displays different content sections without page reload ? 


// 2 mtds to do it , 1st it make display none and initiial and 2nd id data fill .


// 1 st metod use diaplay none --


// tabs selected


let home = document.querySelector("#home");
let about = document.querySelector("#about");
let contact = document.querySelector("#contact");

// img selected or content selected that shows in tabs when we click.




let him = document.querySelector("#him");
let aim= document.querySelector("#aim");
let cim = document.querySelector("#cim");


home.addEventListener("click",function(){
  imhatao();
  him.style.display = "block";
})
about.addEventListener("click",function(){
  imhatao();
  aim.style.display = "block";
})
contact.addEventListener("click",function(){
  imhatao();
  cim.style.display = "block";
})


// we want to show only clicked content  and it removes previous  clicked content  , how to do it ?

let img = document.querySelectorAll("img")

function imhatao(){
  img.forEach(function(img){
    img.style.display = "none";
  })
}



// 2nd method ask chat gpt to short the code and ask improve it . just copy the code and ask make it more efficient and effective.
