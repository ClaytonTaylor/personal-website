console.log("JS is Loading");

var button = document.querySelector("button");
var element = document.querySelector("div");

button.addEventListener("click", function(){
  element.classList.toggle("change");
  // console.log("clicking button")
});
