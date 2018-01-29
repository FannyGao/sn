/**
 * Created by Admin on 2018/1/27.
 */
window.onload=function () {
    //banner
    let div=document.querySelector('.banner_img');
    let img=document.querySelectorAll('.b_img li');
    let left=document.querySelector('.jiantou_left');
    let right=document.querySelector('.jiantou_right');
    let circle=document.querySelectorAll('.lunbodian li')
    let n=0;
    function move() {
        n++;
        if(n==img.length){
            n=0;
        }
        img.forEach(function (value,index) {
            value.classList.remove('active');
            circle[index].classList.remove('act');
        })
        img[n].classList.add('active');
        circle[n].classList.add('act');
    }
    let time=setInterval(move,2000);
    div.onmouseover=function () {
        clearInterval(time);
    }
    div.onmouseout=function () {
        time=setInterval(move,2000);
    }
    right.onclick=function () {
        move()
    }
    left.onclick=function () {
        n--;
        if(n<0){
            n=img.length-1;
        }
        img.forEach(function (value,index) {
            value.classList.remove('active');
            circle[index].classList.remove('act');
        })
        img[n].classList.add('active');
        circle[n].classList.add('act');
    }
    circle.forEach(function (value,index) {
        value.onclick=function () {
            circle.forEach(function (val,ind) {
                val.classList.remove('act');
                img[ind].classList.remove('active');
            })
            this.classList.add('act');
            img[index].classList.add('active');
        }
    })

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
