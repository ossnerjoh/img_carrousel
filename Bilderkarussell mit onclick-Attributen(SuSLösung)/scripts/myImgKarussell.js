'use strict';

let pics=["img01.jpg","img02.jpg","img03.jpg"];
let i=0;

function switchright(){
    i++;
    if(i>pics.length-1)
    i=0;
    document.getElementById("imgTag").setAttribute("src","img/"+pics[i]);
}

function switchleft(){
    i--;
    if(i<0)
    i=pics.length-1;
    document.getElementById("imgTag").setAttribute("src","img/"+pics[i]);
}