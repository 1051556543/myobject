

$(function(){
    $(".btn").click(function(){
        $(".min-div-bottom").toggleClass("xianshi").end().find("li").toggleClass("active").end().find("a").toggleClass("active");
    })
    $(".min-dibu >li").click(function(){
        /*console.log($(this).find("ul").toggleClass("act").end().find("li"));*/
        $(this).find("ul").toggleClass("act").end().find("li").toggleClass("actLi").end().find("a").toggleClass("actLi");

    })



})