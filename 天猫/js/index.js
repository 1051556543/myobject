
window.onload=function(){
        var lbtLi=document.querySelectorAll('.lbt-cdh > li');
        var lunbocetu=document.querySelectorAll('.lunbocetu');

        lbtLi.forEach(function (t, number) {
            t.onmouseover=function(){
                lunbocetu[number].classList.add('active');
            };
            t.onmouseout=function(){
                lunbocetu[number].classList.remove('active');
            }
        });

//          我的淘宝
        var headerRight=document.querySelector('.header-right li:first-child');
        var wode=document.querySelector('.wodetaobao');
        var wodeTop=document.querySelector('.wodetaobao-top');
        var firstA=document.querySelector('.header-right li:first-child a');
        headerRight.onmouseover=function(){
            wode.classList.add('wodetaobaoxianshi');
            wodeTop.classList.add('wodetaobaoxianshi');
            firstA.style.color='#ff0036';
        }
        headerRight.onmouseout=function(){
            wode.classList.remove('wodetaobaoxianshi');
            wodeTop.classList.remove('wodetaobaoxianshi');
            firstA.style.color=null;
        }

//              收藏
        var headerRight4=document.querySelector('.header-right li:nth-child(4)');
        var wode4=document.querySelector('.shoucang');
        var wode4Top=document.querySelector('.shoucangtop');
        var nth4child=document.querySelector('.header-right li:nth-child(4) a');
        headerRight4.onmouseover=function(){
            wode4.classList.add('shoucangxianshi');
            wode4Top.classList.add('shoucangxianshi');
            nth4child.style.color='#ff0036';
        }
        headerRight4.onmouseout=function(){
            wode4.classList.remove('shoucangxianshi');
            wode4Top.classList.remove('shoucangxianshi');
            nth4child.style.color=null;
        }

        var headerRight5=document.querySelector('.header-right li:nth-child(5)');
        var headerRight5Img=document.querySelector('.shoujiban > img')
        var wode5=document.querySelector('.shoujiban');

        headerRight5.onmouseover=function(){
            wode5.classList.add('shoujibanxianshi');
            headerRight5Img.classList.add('shoujibanxianshi');
        }
        headerRight5.onmouseout=function(){
            wode5.classList.remove('shoujibanxianshi');
            headerRight5Img.classList.remove('shoujibanxianshi')
        }


        var headerRight6=document.querySelector('.header-right li:nth-child(8)');
        var headerRight6Img=document.querySelector('.shangjia-top');
        var headerRight6ImgLi=document.querySelector('.mer');
        var wode6=document.querySelector('.shangjiazhichi');

        headerRight6.onmouseover=function(){
            wode6.classList.add('shangjiazhichixianshi');
            headerRight6Img.classList.add('shangjiazhichixianshi');
            headerRight6ImgLi.classList.add('shangjiazhichixianshi');
        }
        headerRight6.onmouseout=function(){
            wode6.classList.remove('shangjiazhichixianshi');
            headerRight6Img.classList.remove('shangjiazhichixianshi');
            headerRight6ImgLi.classList.remove('shangjiazhichixianshi');
        }

        var headerRight7=document.querySelector('#header-right-li-last');
        var headerRight7Img=document.querySelector('.wangzhandaohang > img')
        var wode7=document.querySelector('.wangzhandaohang');
        var wodeTop7=document.querySelector('.wangzhandaohang-top');
         console.log(wodeTop7)
        console.log(headerRight7)
        headerRight7.onmouseover=function(){
            wode7.classList.add('wangzhandaohangxianshi');
            headerRight7Img.classList.add('wangzhandaohangxianshi');
            wodeTop7.classList.add('wangzhandaohang-top-active');

        }
        headerRight7.onmouseout=function(){
            wode7.classList.remove('wangzhandaohangxianshi');
            headerRight7Img.classList.remove('wangzhandaohangxianshi');
            wodeTop7.classList.remove('wangzhandaohang-top-active');
        }
//          轮播图


        var lbt=document.querySelector('.lbt-dt');
        var lbtLi=document.querySelectorAll('.lbt-dt > li');
        var lbtBeijing=document.querySelector('.lbt-beijing');
        var ulDian=document.querySelectorAll('.dian > li > div > div');
        var ulLi=document.querySelectorAll('.dian > li');
        var opacity=document.querySelector('.lbt-dt > .xianshi > .zindex');

        var now=0;
        var next=0;
        // 获取
        function move(){
            next=now+1;
        if(next>lbtLi.length-1){
            next=0;
        }
        lbtLi[now].classList.remove('opacity');
        lbtLi[next].classList.add('opacity');
            ulDian[now].classList.remove('diandian-bai-1');
            ulDian[next].classList.add('diandian-bai-1');
        animate(lbtLi[now],{opacity:0});
        animate(lbtLi[next],{opacity:1});


            lbtLi[next].onmouseover=function(){
                clearInterval(t);
            }
            lbtLi[next].onmouseout=function(){
                t=setInterval(move,3000);
            }
        now=next;
        }
        var t=setInterval(move,3000);

        var to;
        ulLi.forEach(function (value,index) {
            value.onmouseover=function(){
                    to=setTimeout(function(){
                lbtLi[now].classList.remove('opacity');
                lbtLi[index].classList.add('opacity');

                animate(lbtLi[now],{opacity:0});
                animate(lbtLi[index],{opacity:1});
                ulDian[now].classList.remove('diandian-bai-1');
                ulDian[index].classList.add('diandian-bai-1');
                now=index;
                    },300);
            }
            ulLi[index].onmouseout=function() {
                clearTimeout(to);
            }
        })

//                  跳转页面
    var overallLi=document.querySelectorAll('ul.overall > li');
    var Lcolor=['#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#EA5F8D','#FF0036'];
    var anzuoLi=document.querySelectorAll('.anzuo > li');
    var anzuo=document.querySelector('.anzuo');
    var flag=true;
    var flag1=false;
    var reTop=document.querySelector('.returnTop');
    var goTop=document.querySelector('#gotop');
//      回到顶部
    reTop.onclick=function(){
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
    }
    //   回到顶部
    goTop.onclick=function(){
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
    }
    //   点击到当前位置
    anzuoLi.forEach(function (value0,index0) {
        value0.onclick=function(){
            if(flag){
                flag=false;
                animate(document.body,{scrollTop:overallLi[index0].offsetTop},function(){
                    flag=true;
                });
                animate(document.documentElement,{scrollTop:overallLi[index0].offsetTop},function(){
                    flag=true;
                });

            }
        }
    });

    //滚动时执行里面函数
    var navTop=document.querySelector('.top-nav-yincang');
    window.onscroll=function(){
        var scroll=document.body.scrollTop||document.documentElement.scrollTop;
        overallLi.forEach(function (value1,index1) {
            if(scroll>=overallLi[index1].offsetTop-400){
                for(var i=0;i<anzuoLi.length;i++){
                    anzuoLi[i].style.background=null;
                }
                anzuoLi[index1].style.background=Lcolor[index1];
            }else if(scroll<overallLi[index1].offsetTop-400){
                anzuoLi[index1].style.background=null;
            }
        });
        if(scroll<overallLi[0].offsetTop-1100){
            if(!flag){
                return;
            }
            flag=false;
            animate(anzuo,{width:0,height:0,opacity:0},function(){
                flag1=true;
            });
            animate(navTop,{height:0});
        }
        if(scroll>=overallLi[0].offsetTop-1100){
            if(!flag1){
                return;
            }
            flag1=false;
            animate(anzuo,{width:36,height:333,opacity:1},function(){
                flag=true;
            });
            animate(navTop,{height:50});
        }


    }
    //logo左边轮播
    var ulZhiBoTop=document.querySelectorAll('.zhibotu-top > li');
    var ulZhiBoBottom=document.querySelectorAll('.zhibotu-bottom > li');
    var zhibobottom=document.querySelector('.zhibotu-bottom');
    var logoKan=document.querySelector('.logo-lan-left-bottom');
    var left=logoKan.firstElementChild;
    var right=logoKan.lastElementChild;
    var zhibowidth=zhibobottom.offsetWidth;
    var bofang=document.querySelectorAll('.zhibotu-top > li > a .bofang');
    var bofangBottom=document.querySelectorAll('.zhibotu-bottom > li > a > .bofang-bottom');
    var zhezhao=document.querySelectorAll('.zhibotu-bottom > li > a >.zhezhao');
    console.log(ulZhiBoTop);
    ulZhiBoTop.forEach(function (valueB,indexB) {
        console.log(indexB);
        valueB.onmouseover=function(){
           animate(bofang[indexB],{width:84,height:70},200,function(){
               animate(bofang[indexB],{width:70,height:58},200);
           });
        }

    });
    ulZhiBoBottom.forEach(function (valueZ,indexZ) {

        valueZ.onmouseover=function(){
            for(var i=0;i<ulZhiBoBottom.length;i++){
                ulZhiBoTop[i].classList.remove('act');
                ulZhiBoTop[i].style.zIndex=0;
                bofangBottom[i].classList.remove('active-bottom');
                zhezhao[i].classList.remove('active-bottom');
            }
            ulZhiBoTop[indexZ].classList.add('act');
            ulZhiBoTop[indexZ].style.zIndex=100;
            bofangBottom[indexZ].classList.add('active-bottom');
            zhezhao[indexZ].classList.add('active-bottom');
            animate(bofangBottom[indexZ],{width:42,height:35},200,function(){
                animate(bofangBottom[indexZ],{width:35,height:29},200);
            });
        }
    });
    right.onclick=function(){
        animate(zhibobottom,{left:-zhibowidth/2});
        right.style.display='none';
        left.style.display='block';
    };
    left.onclick=function(){
        animate(zhibobottom,{left:0});
        left.style.display='none';
        right.style.display='block';
    }


//    侧导航
    var asideLi=document.querySelectorAll('aside ul li');
    var zuoce=document.querySelectorAll('.zuocewenzi');
    var div8=document.querySelector('.divLi8');
    var er=document.querySelector('#er');
    asideLi.forEach(function (valueL,indexL) {
        valueL.onmouseover=function(){
            animate(zuoce[indexL],{left:0,opacity:1},200);

        }
        valueL.onmouseout=function(){
            animate(zuoce[indexL],{left:-30,opacity:0},200);

        }
    });
    div8.onmouseover=function(){
        er.style.opacity=1;
    }
    div8.onmouseout=function(){
        er.style.opacity=0;
    }


}