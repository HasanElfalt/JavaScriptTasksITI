let rowMax = 3, colMax = 4, selectedRow, selectedCol;
var images = [["2.gif", "6.gif", "3.gif", "5.gif"],
              ["4.gif", "1.gif", "1.gif", "2.gif"],
              ["6.gif", "5.gif", "3.gif", "4.gif"]];

var ids = [["photo11","photo12", "photo13", "photo14"],
           ["photo21","photo22", "photo23", "photo24"],
           ["photo31","photo32", "photo33", "photo34"]];

var covered = [[false, false, false, false],
           [false, false, false, false],
           [false, false, false, false]];

var element, coveredImages=0 ;
let prevSelectedRow, prevSelectedCol;

function moonDiscovered(id){
    
    for(var i=0; i<rowMax; i++){
        for(var j=0; j<colMax; j++){
            if(String(id)==ids[i][j]){
                selectedRow = i;
                selectedCol = j;
                coveredImages++;
                document.getElementById(id).src = images[selectedRow][selectedCol];

                if(coveredImages==2){

                    if(images[selectedRow][selectedCol]==images[prevSelectedRow][prevSelectedCol]){
                        covered[selectedRow][selectedCol] = true;
                        covered[prevSelectedRow][prevSelectedCol] = true;
                    }

                    coveredImages=0;
                    prevSelectedRow = undefined;
                    prevSelectedCol = undefined;
                    setTimeout(allMoon,500);
                }
                break;
            }
        }
    }
    console.log("Prev: ");
    prevSelectedRow = selectedRow;
    prevSelectedCol = selectedCol;

    if(checkWin()){
        alert("Congratualtion you win");
        resetGame();
    }
}

function allMoon(){
    for(var i=0; i<rowMax; i++){
        for(var j=0; j<colMax; j++){
            if(!covered[i][j])
                document.getElementById(ids[i][j]).src = "Moon.gif";
        }
    }
}

function checkWin(){
    for(var i=0; i<rowMax; i++){
        for(var j=0; j<colMax; j++){
            
            if(!covered[i][j])  return false;
    
        }
    }
    return true;
}

function resetGame(){
    resetCovered();
    allMoon();
}

function resetCovered(){
    for(var i=0; i<rowMax; i++){
        for(var j=0; j<colMax; j++){
            
            covered[i][j] = false;
        }
    }
}