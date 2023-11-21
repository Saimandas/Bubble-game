
var scr=5;
var num;
var c;

function make_bubble(){
    var a= "";


for(var i=0;i<161;i++){
    var b= Math.floor(Math.random()*10);
    a += `<div class="bubble">${b}</div>`;
}

document.querySelector("#board").innerHTML=a;
}
make_bubble();
function timer(){
     c=60;
   var intrvl= setInterval( function abc(){
        if(c> 0){
            c--;
            document.querySelector(".clck").textContent=c;
        }
        else{
            clearInterval(intrvl);
            document.querySelector("#board").innerHTML="Game Over";
        }
             
    },1000)
}
timer();

function hit(){
    num= Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent=num;
}
hit();

function score(){
    scr+=10;
    document.querySelector(".ht").textContent=scr;
   
       
}
    document.querySelector("#board").addEventListener("click",function(clk){
        var sv=(Number(clk.target.textContent));
        if(sv==num){
            score();
            make_bubble();
            hit();
        }
    })
function r(){
    if(c==0){
        document.querySelector("#board").innerHTML="play again"
    }
}

r();

   
    


