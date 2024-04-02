// q - 8 



// create a search bar that display live search results as users type, updating the results without requiring a full page reload 


var data = [{
  name : "harsh", src : "https://images.unsplash.com/photo-1629444291470-b9ad6e7a88e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
  {name : "harshita", src : "https://images.unsplash.com/photo-1607957159143-de3859adca2d?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
  {name : "harshika", src : "https://images.unsplash.com/photo-1607957159870-61bd258a1c92?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
  {name : "harshu", src : "https://images.unsplash.com/photo-1521676259650-675b5bfec1ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
  {name : "shyam", src : "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},

];

var pers = "";

data.forEach(function(elem){
  pers += `<div class="person">
  <div class="img">
    <img
      src="${elem.src}"
      alt=""
    />
  </div>
  <h4>${elem.name}</h4>
</div>`
})


document.querySelector(".people").innerHTML = pers;


var input = document.querySelector("input");

input.addEventListener("input", function(){
  var matching = data.filter(function(e){
    return e.name.startsWith(input.value);
  })

  var newusers = "";
  matching.forEach(function(elem){
    newusers += `<div class="person">
    <div class="img">
      <img
        src="${elem.src}"
        alt=""
      />
    </div>
    <h4>${elem.name}</h4>
  </div>`
  })
  
})

document.querySelector(".people").innerHTML = newusers;