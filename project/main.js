
var NUMCLICKED = 0;

function changeColortoWhite() {
  var body_1 = document.querySelector('#main_body');
  body_1.style.backgroundColor = "#FFFFFF";
  return;
}

function changeColortoBlack() {
  var body_1 = document.querySelector("#main_body");
  body_1.style.backgroundColor = "#000000";
  return
}

function init() {
  console.log("Hey there")
  var el = document.getElementById("color_button");
  if(el.addEventListener){
    el.addEventListener("click", main, false);
  } else if(el.attachEvent) {
    el.attachEvent('onclick', main)
  }
}

function main(){
  var e1 = document.getElementById('color_button');
  e1.innerHTML="Clicked";
  console.log(NUMCLICKED)
  if (NUMCLICKED % 2 == 1) {
    changeColortoBlack();
    document.getElementById('color_button').innerHTML = "Black";
  } else {
    changeColortoWhite();
    document.getElementById('color_button').innerHTML = "White";
  }
  NUMCLICKED += 1;
  return;
}

window.addEventListener("load", init, false);
/*
if(window.addEventListener){
  window.addEventListener("loaded", init, false);
} else if(window.attachEvent) {
  window.attachEvent('onclick', init);
}
*/
