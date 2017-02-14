
global NUMCLICKED = 0

function changeColortoWhite() {
  document.getElementById('main_body').background-color="White";
  return;
}

function changeColortoBlack() {
  document.getElementById('main_body').background-color="Black";
  return
}

function main(){
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
