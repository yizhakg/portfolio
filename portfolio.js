function bgChange(bg) {// background change 
  document.getElementById("nav").style.background = bg;
}

// ------------------time+date  ---------------------
function addZero(num){
  if(num<10){return "0"+num}
  else{return num }
}
let date = new Date();//date 
document.getElementById("date").innerHTML = addZero(date.getDate()) +"/" + addZero((date.getMonth() + 1)) + "/" + date.getFullYear();
document.getElementById("time").innerHTML = addZero(date.getHours()) + ":" + addZero(date.getMinutes());
// ---------------------------------------
function startMenuDisplay() {
var x = document.getElementById("startClick");
if (x.style.display === "none") {
x.style.display = "grid";
} else {
x.style.display = "none";
}
}
function startMenuDissapear(){
var x= document.getElementById("startClick");
x.style.display="none";
}