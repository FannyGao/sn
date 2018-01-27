/**
 * Created by Admin on 2018/1/27.
 */
window.onload=function () {
    //banner
    let div=document.querySelector('.banner_img');
    let img=document.querySelectorAll('.b_img li');
    let left=document.querySelector('.jiantou_left');
    let right=document.querySelector('.jiantou_right');
    let n=0;
    function move() {
        if(n==img.length){
            n=0;
        }
        img.forEach(function (value) {
            value.classList.remove('active');
        })
        img[n].classList.add('active');
        n++;
    }
    let time=setInterval(move,2000);
    div.onmouseover=function () {
        clearInterval(time);
    }
    div.onmouseout=function () {
        time=setInterval(move,2000);
    }
    right.onclick=function () {
        n++;
        if(n==img.length){
            n=0;
        }
        img.forEach(function (value) {
            value.classList.remove('active');
        })
        img[n].classList.add('active');
    }
    left.onclick=function () {
        n--;
        if(n<0){
            n=img.length-1;
        }
        img.forEach(function (value) {
            value.classList.remove('active');
        })
        img[n].classList.add('active');
    }


    //change
    let chose=document.querySelectorAll('.dajuhui_top a.dajuhui_top_center');
    let main=document.querySelectorAll('.dajuhui div.dajuhui_bottom');
    chose.forEach(function (value,index) {
        value.onmouseover=function () {
            chose.forEach(function (val,ind) {
                val.classList.remove('active_');
                main[ind].classList.remove('mainactive_');
            })
            this.classList.add('active_');
            main[index].classList.add('mainactive_');
        }
    })


}