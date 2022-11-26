let dir=1;
var ic1 = document.getElementById("ic1");
var ic2 = document.getElementById("ic2");
var topImg = document.getElementById("top");

ic1.style.marginTop="150px";
ic2.style.marginTop="150px";
ic2.style.marginLeft="355px";
topImg.style.marginLeft="180px";
topImg.style.marginTop="365px";

//document.getElementById("ic1").style.marginstart=150+"px";

var btn = document.getElementById("btn1")

function go(){
    if(btn.value =="go"){
        btn.value = "stop";
        ic1interval = setInterval(function (){
        
            var actLoc=getComputedStyle(ic1).left;
            var actval=parseInt(actLoc)
            if(actval > 350)    dir=-1;
            else if(actval<=10)  dir=1;
            
            actval+=50*dir;
            ic1.style.left=actval+"px";
        
        },100);

        ic2interval = setInterval(function (){
        
            var actLoc=getComputedStyle(ic2).right;
            var actval=parseInt(actLoc)
            
            
            actval+=50*dir;
            ic2.style.right=actval+"px";
        
        },100);

        topinterval = setInterval(function (){
        
            var actLoc=getComputedStyle(topImg).bottom;
            var actval=parseInt(actLoc)
            
            
            actval+=50*(dir);
            topImg.style.bottom=actval+"px";
        
        },100);
    
    }else{
        btn.value = "go";
        clearInterval(ic1interval);
        clearInterval(ic2interval);
        clearInterval(topinterval);
    }
}

function reset(){
    
    clearInterval(ic1interval);
    clearInterval(ic2interval);
    clearInterval(topinterval);

    btn.value = "go";

    ic1.style.top="5px";
    ic1.style.left="5px";
    ic2.style.top="5px";
    ic2.style.left="5px";
    topImg.style.left="5px";
    topImg.style.top="5px";

//    ic1.style.position = "0px";
    

}