


$(document).ready(function(){

    /*********************轮播侧图**********************/
    var lbtLi=$('.lbt-cdh > li');
    var lunbocetu=$('.lunbocetu');
    lbtLi.each(function (number, t) {
        $(t).mouseover(function(){
                $(lunbocetu[number]).addClass('active');
            }
        )
        $(t).mouseout(function(){
                $(lunbocetu[number]).removeClass('active');
            }
        )
    });

/*************************header************************/

    function headMove(headerRight,wode,wodeTop){
        headerRight.mouseover(function(){

            wode.show();
            wodeTop.show();
        })
        headerRight.mouseout(function(){

            wode.hide();
            wodeTop.hide();
        })
    }
   /******************我的淘宝********************/
    var headerRight=$('.header-right >li:first-child');
    var wode=$('.wodetaobao');
    var wodeTop=$('.wodetaobao-top');
    var firstA=$('.header-right >li:first-child a');
   headMove(headerRight,wode,wodeTop,firstA);
    /*********************收藏******************/
    var headerRight4=$('.header-right >li:nth-child(4)');
    var wode4=$('.shoucang');
    var wode4Top=$('.shoucangtop');
    var nth4child=$('.header-right >li:nth-child(4) a');
    headMove(headerRight4,wode4,wode4Top,nth4child);
   /* *******************手机版****************/
    var headerRight5=$('.header-right >li:nth-child(5)');
    var headerRight5Img=$('.shoujiban > img')
    var wode5=$('.shoujiban');
    headMove(headerRight5,wode4,headerRight5Img);


    function headMoveNew(headerRight,wode,wodeTop,headerRightImgLi){
        headerRight.mouseover(function(){

            wode.show();
            wodeTop.show();
            headerRightImgLi.show();
        })
        headerRight.mouseout(function(){
            wode.hide();
            wodeTop.hide();
            headerRightImgLi.hide();
        })
    }
    var headerRight6=$('.header-right >li:nth-child(8)');
    var headerRight6Img=$('.shangjia-top');
    var headerRight6ImgLi=$('.mer');
    var wode6=$('.shangjiazhichi');
    headMoveNew(headerRight6,wode6,headerRight6Img,headerRight6ImgLi);

    var headerRight7=$('#header-right-li-last');
    var headerRight7Img=$('.wangzhandaohang > img')
    var wode7=$('.wangzhandaohang');
    var wodeTop7=$('.wangzhandaohang-top');
    headMoveNew(headerRight7,wode7,wodeTop7,headerRight7Img);

   /********************轮播图*************************/
    var lbt=$('.lbt-dt');
    var lbtLi=$('.lbt-dt > li');
    var lbtBeijing=$('.lbt-beijing');
    var ulDian=$('.dian > li > div > div');
    var ulLi=$('.dian > li');
    var opacity=$('.lbt-dt > .xianshi > .zindex');

    var now=0;
    var next=0;
    // 获取
    function move(){
        next=now+1;
        if(next>lbtLi.length-1){
            next=0;
        }
        lbtLi.eq(now).removeClass('opacity');
        lbtLi.eq(next).addClass('opacity');

        ulDian.eq(now).removeClass('diandian-bai-1');
        ulDian.eq(next).addClass('diandian-bai-1');

        lbtLi.eq(now).animate({opacity:0},300);
        lbtLi.eq(next).animate({opacity:1},300);

        lbtLi.eq(next).hover(function(){
            clearInterval(t);
        },function(){
            t=setInterval(move,3000);
        })
        now=next;
    }
    var t=setInterval(move,3000);

    var to;
    ulLi.each(function (index,value) {
        $(value).mouseover(function(){
            clearInterval(t)
            to=setTimeout(function(){
                $(lbtLi[now]).removeClass('opacity');
                $(lbtLi[index]).addClass('opacity');

                $(ulDian[now]).removeClass('diandian-bai-1');
                $(ulDian[index]).addClass('diandian-bai-1');
                $(lbtLi[now]).animate({opacity:0},300);
                $(lbtLi[index]).animate({opacity:1},300);
                now=index;
            },300);
        })
        $(ulLi[index]).mouseout(function() {
            t=setInterval(move,3000)
            clearTimeout(to);
        })
    })


        /**********************跳转页面*******************************/
    var overallLi=$('ul.overall > li');
    var Lcolor=['#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#EA5F8D','#FF0036'];
    var anzuoLi=$('.anzuo > li');
    var anzuo=$('.anzuo');
    var flag=true;

    var flag1=false;
    var reTop=$('.returnTop');
    var goTop=$('#gotop');
//      回到顶部
    reTop.click(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 500)
    })
    //   回到顶部
    goTop.click(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 500)
    })
    //   点击到当前位置
    anzuoLi.each(function (index0,value0) {
        $(value0).click(function(){
            if(flag){
                flag=false;
                $('body,html').animate({
                    scrollTop:overallLi[index0].offsetTop-100
                }, 500,function(){
                    flag=true;
                })
            }
        })
    });

    //滚动时执行里面函数
    var navTop=$('.top-nav-yincang');
    $(window).scroll(function() {
        var scroll = document.body.scrollTop || document.documentElement.scrollTop;
        overallLi.each(function (index1, value1) {
            if (scroll >= overallLi[index1].offsetTop - 400) {
                for (var i = 0; i < anzuoLi.length; i++) {
                    $(anzuoLi[i]).css({background:'rgba(50,50,50,0.6)'});
                }
                $(anzuoLi[index1]).css({background:Lcolor[index1]});
            } else if (scroll < overallLi[index1].offsetTop - 400) {
                $(anzuoLi[index1]).css({background:"rgba(50,50,50,0.6)"});
            }
        });
        if (scroll < overallLi[0].offsetTop - 1100) {
            if (!flag) {
                return;
            }
            flag = false;
            anzuo.animate(
                {width: 0, height: 0, opacity: 0},500,function () {
                    flag1 = true;
                })
            navTop.animate({height: 0},500)
        }
        if (scroll >= overallLi[0].offsetTop - 1100) {
            if (!flag1) {
                return;
            }
            flag1 = false;
            anzuo.animate(

                {width: 36, height: 333, opacity: 1},500,function () {
                    flag = true;
                })
            navTop.animate({height: 50},500)
        }

    })
    /**********************跳转页面*******************************/



       /* **********************左边轮播****************************/
    var ulZhiBoTop=$('.zhibotu-top > li');
    var ulZhiBoBottom=$('.zhibotu-bottom > li');
    var zhibobottom=$('.zhibotu-bottom');
    var logoKan=$('.logo-lan-left-bottom');
    var left=$(".left-nav");
    var right=$(".right-nav");
    console.log(left,right);
    var zhibowidth=zhibobottom.outerWidth(true);
    var bofang=$('.zhibotu-top > li > a .bofang');
    var bofangBottom=$('.zhibotu-bottom > li > a > .bofang-bottom');
    var zhezhao=$('.zhibotu-bottom > li > a >.zhezhao');
    $(ulZhiBoTop).each(function (indexB,valueB) {
        $(valueB).mouseover(function(){
            $(bofang[indexB]).animate({width:84,height:70},200,function(){
               $(bofang[indexB]).animate({width:70,height:58},200);
            });
        })

    });
    $(ulZhiBoBottom).each(function (indexZ,valueZ) {

        $(valueZ).mouseover(function(){
            for(var i=0;i<ulZhiBoBottom.length;i++){
                $(ulZhiBoTop[i]).removeClass('act');
                $(ulZhiBoTop[i]).css("zIndex",0);
                $(bofangBottom[i]).removeClass('active-bottom');
                $(zhezhao[i]).removeClass('active-bottom');
            }
            $(ulZhiBoTop[indexZ]).addClass('act');
            $(ulZhiBoTop[indexZ]).css("zIndex",100);
            $(bofangBottom[indexZ]).addClass('active-bottom');
            $(zhezhao[indexZ]).addClass('active-bottom');

            $(bofangBottom[indexZ]).animate({width:42,height:35},200,function(){
                $(bofangBottom[indexZ]).animate({width:35,height:29},200);
            });
        })
    });
    right.click(function(){
        zhibobottom.animate({left:-zhibowidth/2});
        right.css("display","none");
        $(left).css("display","block");
    });
    left.click(function(){
        zhibobottom.animate({left:0});
        $(right).css("display","block");
        left.css("display","none");
    });
    /* **********************左边轮播****************************/



       /* ***********************侧导航****************************/
    var asideLi=$('aside ul li');
    var zuoce=$('.zuocewenzi');
    var div8=$('.divLi8');
    var er=$('#er');
    var ti;
    asideLi.each(function (indexL,valueL) {
        $(valueL).mouseover(function () {
            console.log($(valueL));
            ti=setTimeout(function(){
                $(zuoce[indexL]).animate({left:0,opacity:1},300);
            },300)
        })
            $(valueL).mouseout(function(){
                clearTimeout(ti);
                $(zuoce[indexL]).animate({left:-30,opacity:0},300);

            })
         div8.mouseover(function(){
            er.css("opacity",1);
        })
        div8.mouseout(function(){
            er.css("opacity",0);
        })
    })

    /* ***********************侧导航****************************/
})




