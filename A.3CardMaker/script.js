
document.getElementById("textArea").style.resize="none";

var img = ["gws.jpg", "gws2.jpg", "gws3.jpg", "gwsf.jpg", "gwsf2.jpg", "gwsf3.jpg"]
var ids = ["gwsRadio", "gws2Radio", "gws3Radio", "gwsfRadio", "gwsf2Radio", "gwsf3Radio"]

var win;

function borderBox(value){
    
    for(let i=0; i<img.length; i++){
        document.getElementById(img[i].split(".")[0]).style.border="none";
    }
    document.getElementById(value).style.border="solid";
    document.getElementById(value).style.borderColor="red";
    
}

function generate(){
    let cardMsg = document.getElementById("textArea").value;
    var cardImg;
    for(let i=0; i<ids.length && cardImg==undefined; i++){
        let card = document.getElementById(ids[i])
        if(card.checked){
            cardImg = img[i];
        }
    }

    setCookie("cardMsg",cardMsg);
    setCookie("cardImg",cardImg);

    win = open("CardFinal.html", "", "width=500, height=800");
}
