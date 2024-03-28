

// js dom --- document object model 

// jo bhi hum apne website ke andar dekhte hai wo sb body tag ke andar banta hai , ab jo body mein banta h whi humein website pr dikhta hai.

// dom actually hota h html tag aur uska pura control js mein. 

// ex - kabhi aap chahte ho ki aap ek btn ko cilck kr ke div gyab kr de , to html mein koi aisa feature nhi h jo click ho handle kr sake , aisi js jo aapke webpage pr chizo ko bdl sake to us js ko hum perform kr sakte hai dom ke sath.

// aisa js ka  koi bhi code jo webpage mein kuch bhi change karega wo js ks dom ka code kahlayega.

// dom = html tags



// dom manipulation --  body mein kuch bhi change karna ya manipulate karna actually dom manipulation kahlata hai.



// how to access element ---

// usse ye kr do ye hone pr , usse = selection, ye kardo = chnage , ye hone pr = event.



// 1. accessing elements ---

// phle ek webpage bano , phir usme kuch elements bano aur use select kro -

// selection kyi tarike se hota hai js dom mein such as -- 

// 1. document.getElementById  - it selects Id only
// 2. document.getElementsByClassName - it selects Class only
// 3. document.getElementsByTagName - it selects Tags only
// 4. document.querySelector - it selects all 

// select and save


var btn = document.querySelector("button");  // selecting button tag


// agar aapke paas bhut saare like h3 tag code ho ye sirf phla wala h3 select karega, if we want to select all we use - querySelectorAll




// 2. modifying elements --- 



// textcontent and innerHTML ---


// textcontent -- 


btn.textContent = "starting..." // change the content of button 

// textcontent is use to change the content of element.


// another ex -- 

let ab = document.querySelector("h1");

// ab.textContent = "changed the content using textcontent"    // code 

// = equal means hota h value ko change kr do , agar humein value ko whi rakhna aur kuch aur add krna h to hum ise use krte h , += means jo h usmein add kr do.

// ex - 

ab.textContent += " , harsh"






// innnerHTML --   it is use to change the html elements not the content .


let p = document.querySelector("p");

p.innerHTML = "<i>hello</i>"




// 3. manipulating css styles and classes ---   .style use to change the css.


// style -- 



let c = document.querySelector("h2");

c.style.color = "red";
c.style.fontFamily = "gilroy"
c.style.fontSize = "30px"




// class list --  class list is use to add a class into our html elemnt that we are selected, we are make class name in css and we just give the name of callname below example, note do not give dot in quotes while writing class name , we are already make it a classs name .

// here we are created a class is only in css and do not give it to our element and we are select the elemnt and give the class name property like below ex . 

let cl = document.querySelector("h3");

cl.classList.add("makered")  // add class name 

cl.classList.remove("makered") // remove class name





// 4. creating and deleting elements -- 


// createElement() -- it is use to create a html element , note that it is just add and created in js not add in html.

let h4 = document.createElement("h4");

h4.textContent = "heyyyyyyy";
h4.classList.add("makered")


// how to add -


// appendChild() -- it is use to add the html element in body 

document.querySelector("body").appendChild(h4);


// removeChild() - it is use to remove elements .


document.querySelector("body").removeChild(h4);




// 5. event handling ---


// addEventListner -- it is use add functionalities 


// jab bhi aap kisi element par kisi bhi prakar ka action krte ho to wha par event by default automatically  raise hota hai , ab agar aapne koi eventlistner nhi banaya hai to wo event ignore kr diya jata hai , par agar aapne listner banaya hai us event pr to wo ignore nhi kiya jayega blki wo listner chalega. 


let btnn = document.querySelector(".btnn");



btnn.addEventListener("click", function(){
  btnn.textContent = "starting...";
  btnn.style.backgroundColor = "yellow";

})

// dblclick event

btnn.addEventListener("dblclick", function(){
  btnn.textContent = "starting...";
  btnn.style.backgroundColor = "green";

})

// mouseover event 

btnn.addEventListener("mouseover", function(){
  btnn.textContent = "starting...";
  btnn.style.backgroundColor = "blue";

})

// mouseleave event 

btnn.addEventListener("mouseleave", function(){
  btnn.textContent = "starting...";
  btnn.style.backgroundColor = "red";

})







// 6. event object --- it is use to know the mouse moving location and details 


// ex -

document.querySelector("body").addEventListener("mousemove", function(){
  console.log("moving...");
})

// details shows 
document.querySelector("body").addEventListener("mousemove", function(dets){
  console.log(dets);
})


// it is use make a circle that moves ariund mouse and we have to only know about client x and y . to make the perfect circle 





