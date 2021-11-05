'use strict';
let mySlider = {

    picPath: 'img/',
    picList: [
        'img01',
        'img02',
        'img03'       
    ],
    cnt: 0,
    init: function(){
        //get Elements
        let slider = document.getElementById('slider');
        var leftButton = document.getElementById('leftButton');
        let rightButton = document.getElementById('rightButton');
        let canvas = document.getElementById('canvas');

        //addEventlisteners
        leftButton.addEventListener('click', this.switchLeft);        
    },
    switchLeft: function(){
        this.cnt--;
        if(this.cnt < 0)
            this.cnt = this.picList.length-1;
            console.log(picPath);

        //canvas.src = this.picPath+this.picList[this.cnt];
    }
}

mySlider.init();
