'use stict';
//definiert mein Bilderarray
let picList= [
    'img01.jpg',
    'img02.jpg',
    'img03.jpg'       
];
//Zähler für das aktuelle Bild im Array
let cnt = 0;

let timeOutIndex;
let intervallIndex;

//Meine HTML-Elemente
let slider = document.getElementById('slider');
let leftButton = document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');
let imgTag = document.getElementById('imgTag');

let modal = document.getElementById('myModal'); //Div, das das Modal enthält
let btn = document.getElementById("myBtn"); //Button, der das Modal öffnet
let closeXButton = document.getElementsByClassName("close")[0]; //x-Button, der Modal schließt

//Eventlistener für das Modal (öffnen und schließen)
btn.addEventListener("click", function(){
    modal.style.display = 'block';
});

closeXButton.addEventListener("click", function(){
    modal.style.display = 'none';
});
window.onclick = function(ev){
    if (ev.target == modal) {
        modal.style.display = "none";
    }
}

//EventListener für die Buttons < und >
leftButton.addEventListener('click', function(){
    resetTimer();
    switchLeft();
});
rightButton.addEventListener('click', function(){
    resetTimer();
    switchRight();
});
//Eventlistener für die Pfeiltasten
window.addEventListener('keydown', function(ev){
    resetTimer();
    if(ev.which == 37)
        switchLeft();
    if(ev.which == 39)
        switchRight();
});

//Timer: nach 5s soll die automatische Wiedergabe starten
function setzeTimer(){
    timeOutIndex = setTimeout(function(){
        console.log('Timeout');
        intervallIndex = setInterval(switchRight, 2500);
    },5000);
}
//Wenn nutzer Klickt oder Pfeiltaste drückt beginnen die 5s erneut
function resetTimer(){
    console.log('timer reseted')
    clearInterval(intervallIndex);
    clearTimeout(timeOutIndex);
    setzeTimer();
}

//nach links blättern
function switchLeft(){
    cnt--;
    if(cnt<0)
        cnt = picList.length - 1;
    imgTag.src = "img/" + picList[cnt];
}
//nach rechts blättern
function switchRight(){
    cnt++;
    if(cnt > picList.length - 1)
        cnt = 0;
    imgTag.src = "img/" + picList[cnt];
}

setzeTimer();