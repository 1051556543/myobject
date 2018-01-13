
var me =true;
var over=false;

var chessbord=[];
var wins=[];

var myWin=[];
var computerWin=[];

//开始游戏
var btn=document.querySelector("#aler > button");
var div=document.querySelector("#aler");
console.log(btn);
btn.onclick=function(){
    div.style.display='none';
}

//数组储存落子
for(var i=0;i<15;i++){
    chessbord[i]=[];
    for(var j=0;j<15;j++){
        chessbord[i][j]=0;
    }
}
//定义三维数组
for(var i=0;i<15;i++){
    wins[i]=[];
    for(j=0;j<15;j++){
        wins[i][j]=[];
    }
}
//赢法数组
var count=0;
for(var i=0;i<15;i++){
    for(var j=0;j<11;j++){
        for(var k=0;k<5;k++){
            wins[i][j+k][count] =true;
        }
        count++;
    }

}
for(var i=0;i<15;i++){
    for(var j=0;j<11;j++){
        for(var k=0;k<5;k++){
            wins[j+k][i][count] =true;
        }
        count++;
    }

}
//  左上到右下
for(var i=0;i<11;i++){
    for(var j=0;j<11;j++){
        for(var k=0;k<5;k++){
            wins[i+k][j+k][count] =true;
        }
        count++;
    }

}
//  左下到右上
for(var i=0;i<11;i++){
    for(var j=14;j>3;j--){
        for(var k=0;k<5;k++){
            wins[i+k][j-k][count] =true;
        }
        count++;
    }

}
console.log(count);

//赢法统计数组
//初始化
for(var i=0;i<count;i++){
    myWin[i]=0;
    computerWin[i]=0;
}

var chess=document.querySelector("#chess");
var context=chess.getContext("2d");
//背景图
var img= new Image();
img.src='img/beijing.jpg';
img.onload=function(){
    context.drawImage(img,0,0,450,450);
    drawchess();

}
//画棋盘线
function drawchess(){
    for(var i=0;i<15;i++){
        context.moveTo(15,15+i*30);
        context.lineTo(435,15+i*30);
        context.stroke();
        context.moveTo(15+i*30,15);
        context.lineTo(15+i*30,435);
        context.stroke();
    }
}
//
function onestep(i,j,me){
    //画棋子
    context.beginPath();
    context.arc(15+i*30,15+j*30,13,0,2*Math.PI);
    var gradient=context.createRadialGradient(15+i*30+2,15+j*30-2,13,15+i*30,15+j*30,0);
    if(me){
        gradient.addColorStop(0,"#121212");
        gradient.addColorStop(1,"#a4a4a4");
    }else{
        gradient.addColorStop(0,"#d9d9d9");
        gradient.addColorStop(1,"#a1a1a1");
    }
    context.fillStyle=gradient;
    context.fill();
    context.closePath();
}

//添加事件
chess.onclick=function(e){
    if(over){
        return;
    }
    if(!me){
        return;
    }
    var x=e.offsetX;
    var y=e.offsetY;
    //给定点击范围
    var i=Math.floor(x/30);
    var j=Math.floor(y/30);
    if(chessbord[i][j]==0){  //初始值为0  人先下
        onestep(i,j,me);
        chessbord[i][j]=1;    //给定人下chessbord为1
        //判断输赢   人下
        for(var k=0;k<count;k++){
            if(wins[i][j][k]){
                myWin[k]++;
                computerWin[k]=6;
                if(myWin[k]==5){
                    var t0=setTimeout("alert(\"你赢了\")",200);
                    over=true;
                }
            }
        }
        //电脑下棋
        if(!over){
            me=!me;
            computerAI();
        }
    }
}

function computerAI(){
    var myscore=[];
    var computercore=[];
    //max保存最高分数
    var max=0;
    //保存最高分数的坐标
    var u=0,v=0;
    //分数初始化
    for(var i=0;i<15;i++){
        myscore[i]=[];
        computercore[i]=[];
        for(var j=0;j<15;j++){
            myscore[i][j]=0;
            computercore[i][j]=0;
        }
    }
    //定义分数
    for(var i=0;i<15;i++){
        for(var j=0;j<15;j++){
            if(chessbord[i][j]==0){
                for(var k=0;k<count;k++){
                    //如果第k种赢法在这个点是true  ，则有意义
                    if(wins[i][j][k]){
                        //人下棋记录分数
                        if(myWin[k]==1){
                            myscore[i][j]+=200;  //给相应价值
                        }else if(myWin[k]==2){
                            myscore[i][j]+=400;
                        }else if(myWin[k]==3){
                            myscore[i][j]+=10000;
                        }else if(myWin[k]==4){
                            myscore[i][j]+=20000;
                        }
                        //电脑下棋记录分数  要比人的分数高些
                        if(computerWin[k]==1){
                            computercore[i][j]+=220;
                        }else if(computerWin[k]==2){
                            computercore[i][j]+=420;
                        }else if(computerWin[k]==3){
                            computercore[i][j]+=12000;
                        }else if(computerWin[k]==4){
                            computercore[i][j]+=22000;
                        }
                    }
                }
                //找最大值 人的分数大于最大值 赋值给人   将i，j赋值给u，v
                if(myscore[i][j]>max){
                    max=myscore[i][j];
                    u=i;
                    v=j;
                }else if(myscore[i][j]==max){  //如果相等
                    if(computercore[i][j] > computercore[u][v]){ //？
                        u=i;
                        v=j;
                    }
                }
                if(computercore[i][j]>max){
                    max=computercore[i][j];
                    u=i;
                    v=j;
                }else if(computercore[i][j]==max){
                    if(myscore[i][j] > myscore[u][v]){
                        u=i;
                        v=j;
                    }
                }
            }
        }
    }
    onestep(u,v,false);
    chessbord[u][v]=2;
    for(var k=0;k<count;k++){
        if(wins[u][v][k]){
            computerWin[k]++;
            myWin[k]=6;
            if(computerWin[k]==5){
                var t1=setTimeout('alert("你输了")',200);
                over=true;
            }
        }
    }
    if(!over){
        me=!me;
    }
}

