"use stict";
//definiert mein Bilderarray
let picList = ["img01.jpg", "img02.jpg", "img03.jpg"];
let cnt = 0;

//Meine HTML-Elemente
let slider = document.getElementById("slider");
let leftButton = document.getElementById("leftButton");
let rightButton = document.getElementById("rightButton");
let imgTag = document.getElementById("imgTag");

//EventListener für die Buttons < und >
leftButton.addEventListener("click", switchLeft);
rightButton.addEventListener("click", switchRight);

//Eventlistener für die Tastatureingaben
window.addEventListener("keydown", function (e) {
  console.log(event.which);

  if (e.which == 37) switchLeft();
  if (e.which == 39) switchRight();
});

//nach links blättern
function switchLeft() {
  cnt--;
  if (cnt < 0) cnt = picList.length - 1;
  imgTag.src = "img/" + picList[cnt];
}
//nach rechts blättern
function switchRight() {
  cnt++;
  if (cnt > picList.length - 1) cnt = 0;
  imgTag.src = "img/" + picList[cnt];
}
