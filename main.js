"use strict";
// ------------------time+date  ---------------------
function addZero(num){
  if(num<10){return "0"+num}
  else{return num }
}
setInterval(function(){
  let date = new Date();//date 
document.getElementById("date").innerHTML = addZero(date.getDate()) +"/" + addZero((date.getMonth() + 1)) + "/" + date.getFullYear();
document.getElementById("time").innerHTML = addZero(date.getHours()) + ":" + addZero(date.getMinutes());
document.getElementById("bigTime").innerHTML = addZero(date.getHours()) + ":" + addZero(date.getMinutes());
},1000)

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
  document.getElementById("galleryRecent").style.display = "flex";
}
function galleryFolderBarClose(){
  var x = document.getElementById("galleryFolderBar");
  x.style.display = "none";
}

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
  x.style.display = "flex";
  document.getElementById("resumeRecent").style.display = "flex";
}

function resumeBarClose(){
  var x = document.getElementById("resumeBar");
  x.style.display = "none";
}
function spotifyDisplay(){
  var x = document.getElementById("spotify");
if (x.style.display === "unset") {
x.style.display = "none";
} else {
x.style.display = "unset";
}
}

function spotifyBarOpen(){
  var x = document.getElementById("spotifyBar");
  x.style.display = "flex";
  document.getElementById("spotifyRecent").style.display = "flex";
}

function spotifyBarClose(){
  var x = document.getElementById("spotifyBar");
  x.style.display = "none";
}

function facebookDisplay(){
  var x = document.getElementById("facebook");
if (x.style.display === "unset") {
x.style.display = "none";
} else {
x.style.display = "unset";
}
}

function facebookBarOpen(){
  var x = document.getElementById("facebookBar");
  x.style.display = "flex";
  document.getElementById("facebookRecent").style.display = "flex";
}

function facebookBarClose(){
  var x = document.getElementById("facebookBar");
  x.style.display = "none";
}

function linkedinDisplay(){
  var x = document.getElementById("linkedin");
  document.getElementsByClassName("LI-title")[0].innerText="Follow Me :)"
if (x.style.display === "unset") {
x.style.display = "none";
} else {
x.style.display = "unset";
}
}

function linkedinBarOpen(){
  var x = document.getElementById("linkedinBar");
  x.style.display = "flex";
  document.getElementById("linkedinRecent").style.display = "flex";
}

function linkedinBarClose(){
  var x = document.getElementById("linkedinBar");
  x.style.display = "none";
}
//--
function searchWindowDisplay(){
  var x = document.getElementById("searchWindow");
if (x.style.display === "unset") {
x.style.display = "none";
} else {
x.style.display = "unset";
}
}

// -------------
function turnOffDissapear(){
  var x= document.getElementById("turnOff");
  x.style.display="none";
  }
  function turnOffApear(){
    var x= document.getElementById("turnOff");
    x.style.display="grid";
    }
  
    function powerOffApear(){
      var x= document.getElementById("powerOff");
      x.style.display="flex";
      setTimeout("window.close()",5000) 
      }
  
function sleepDissapear(){
  var x= document.getElementById("sleep");
  x.style.display="none";
  }
  function sleepApear(){
    var x= document.getElementById("sleep");
    x.style.display="grid";
    }
  
      
// ------------------------------------

let images="";
let z= document.getElementById("squreImg");
for(let i=1;i<=7;i++){
  images+=`<div><img src="img/squreimg/`+i+`.jpg" alt=""></div>`;
}
z.insertAdjacentHTML("beforeend", images);

//------------------dragWindows---------------------
dragElement(document.getElementById("galleryFolder"));
dragElement(document.getElementById("resume"));
dragElement(document.getElementById("spotify"));
dragElement(document.getElementById("facebook"));
dragElement(document.getElementById("linkedin"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//-----------------search----------------------
