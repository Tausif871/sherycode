onmessage = function(data){
  const anss = data.data.reduce((acc,item) => item + acc, 0)
  this.postMessage(anss);
}