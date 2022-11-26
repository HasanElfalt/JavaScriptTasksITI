let rowMax = 3, colMax = 4, selectedRow, selectedCol;
var images = [["2.gif", "6.gif", "3.gif", "5.gif"],
              ["4.gif", "1.gif", "1.gif", "2.gif"],
              ["6.gif", "5.gif", "3.gif", "4.gif"]];

var ids = [["photo11","photo12", "photo13", "photo14"],
           ["photo21","photo22", "photo23", "photo24"],
           ["photo31","photo32", "photo33", "photo34"]];

var element, imageInterval;

function moonDiscovered(id){
    for(var i=0; i<rowMax; i++){
        for(var j=0; j<colMax; j++){
            if(String(id)==ids[i][j]){
                selectedRow = i;
                selectedCol = j;
                break;
            }
        }
    }
    document.getElementById(id).src = images[selectedRow][selectedCol];

}

function allMoon(){
    for(var i=0; i<rowMax; i++){
        for(var j=0; j<colMax; j++){
            document.getElementById(ids[i][j]).src = "Moon.gif";
        }
    }
}

function stopMarvels(){
    clearInterval(imageInterval);
}