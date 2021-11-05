"use stict";
//definiert mein Bilderarray
let picList = ["img01.jpg", "img02.jpg", "img03.jpg"];
let cnt = 0;

//Meine HTML-Elemente
let slider = document.getElementById("slider");
let leftButton = document.getElementById("leftButton");
let rightButton = document.getElementById("rightButton");
let imgTag = document.getElementById("imgTag");

//Füge die EventListener hinzu
leftButton.addEventListener("click", switchLeft);
rightButton.addEventListener("click", switchRight);

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
