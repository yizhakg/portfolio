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
function startMenuApear(){
  var x= document.getElementById("startClick");
  x.style.display="grid";
  }

function galleryFolderDisplay(){
  var x = document.getElementById("galleryFolder");
if (x.style.display === "unset") {
x.style.display = "none";
} else {
x.style.display = "unset";
}
}

function galleryFolderBarOpen(){
  var x = document.getElementById("galleryFolderBar");
  x.style.display = "flex";
}
function galleryFolderBarClose(){
  var x = document.getElementById("galleryFolderBar");
  x.style.display = "none";
}
// -------------
function resumeDisplay(){
  var x = document.getElementById("resume");
if (x.style.display === "unset") {
x.style.display = "none";
} else {
x.style.display = "unset";
}
}

function resumeBarOpen(){
  var x = document.getElementById("resumeBar");
  x.style.display = "unset";
}

function resumeBarClose(){
  var x = document.getElementById("resumeBar");
  x.style.display = "none";
}
// ------------------------------------

let images="";
let z= document.getElementById("squreImg");
for(let i=1;i<=7;i++){
  images+=`<div><img src="img/squreimg/`+i+`.jpg" alt=""></div>`;
}
z.insertAdjacentHTML("beforeend", images);
// ------------------------------------

function linkMe(link){
  window.open(link);
}