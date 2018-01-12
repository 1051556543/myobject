window.onload=function(){

    //头部
    var weixin=document.querySelector('.ww');
    var weixinDiv=document.querySelector('.weixin');

    weixin.onmouseover=function(){
        weixinDiv.style.display='block';
    }
    weixin.onmouseout=function(){
        weixinDiv.style.display='none';
    }
    //nav导航

    var daohangLi=document.querySelectorAll('.daohang-wen > li');
    var hide=document.querySelectorAll('.hide');
    daohangLi.forEach(function (value,index) {
        value.onmouseenter=function(){
            var hide1=this.querySelector('.hide');
            var hideUlLi=this.querySelectorAll('.hide-ul li');
            var length=hideUlLi.length;
            var h1=hideUlLi[0].offsetHeight;
            var height=h1*length+30;
            hide[index].style.opacity=1;
            animate(hide[index],{height:height},100);

        }
        value.onmouseleave=function(){
            var hide1=this.querySelector('.hide');
            var height=hide1.offsetHeight;
            console.log(height);

            animate(hide[index],{height:0},100,function(){
                hide[index].style.opacity=0;
            });
        }


    })

    //轮播图
    var lunbotu=document.querySelector('.lunbotu');
    var lunbotuLi=document.querySelectorAll('.lunbotu > li');
    var left=document.querySelector('.tu-left');
    var right=document.querySelector('.tu-right');
    var tuBottom=document.querySelectorAll('.tu-bottom > div');
    var now=0;
    var next=0;
    function move(place='l'){
        if(place=='l'){
            next=now+1;
            if(next>lunbotuLi.length-1){
                next=0;
            }
        }
        if(place=='r'){
            next=now-1;
            if(next<0){
                next=lunbotuLi.length-1;
            }
        }

    lunbotuLi[now].classList.remove('active');
    lunbotuLi[next].classList.add('active');
    tuBottom[now].classList.remove('acolor');
    tuBottom[next].classList.add('acolor');

    now=next;
    }
    var t=setInterval(move,3000);
    lunbotu.onmouseover=function(){
        clearInterval(t);
    }
    lunbotu.onmouseout=function(){
        t=setInterval(move,3000);
    }
    left.onclick=function(){
        move('r');
    }
    right.onclick=function(){
        move();
    }
    tuBottom.forEach(function (value1,index1) {
        value1.onmouseover=function(){
            lunbotuLi[now].classList.remove('active');
            lunbotuLi[index1].classList.add('active');
            tuBottom[now].classList.remove('acolor');
            tuBottom[index1].classList.add('acolor');
            now=index1;
        }
    })

}