
document.getElementById("textArea").style.resize="none";

var img = ["img/gws.jpg", "img/gws2.jpg", "img/gws3.jpg", "img/gwsf.jpg", "img/gwsf2.jpg", "img/gwsf3.jpg"];
var ids = ["gwsRadio", "gws2Radio", "gws3Radio", "gwsfRadio", "gwsf2Radio", "gwsf3Radio"];

var win;

function borderBox(value){
    
    for(let i=0; i<img.length; i++){
        document.getElementById(img[i].split(".")[0].split("/")[1]).style.border="none";
    }
    document.getElementById(value).style.border="solid";
    document.getElementById(value).style.borderColor="red";
    
}

function generate(){
    let cardMsg = document.getElementById("textArea").value;
    var cardImg;
    for(let i=0; i<ids.length && cardImg==undefined; i++){
        let card = document.getElementById(ids[i]);
        if(card.checked){
            cardImg = img[i];
        }
    }

    win = open("", "", "width=500, height=800");
    
    var div = win.document.createElement("div");
    div.style.textAlign = "center";

    var newwinImg = win.document.createElement("img");
    newwinImg.setAttribute('src',"http://127.0.0.1:5500/"+ cardImg);
    newwinImg.setAttribute('id',"card");
    //newwinImg.src = cardImg;
    newwinImg.setAttribute("width", "300");
    newwinImg.setAttribute("height", "300");

    var head3 = win.document.createElement("h3");
    head3.innerText = cardMsg;

    var btn = win.document.createElement("input");
    btn.type = "submit";
    btn.value = "close Window";
    btn.onclick= function () {win.close()};

    win.document.body.appendChild(div);
    div.appendChild(newwinImg);
    div.appendChild(head3);
    div.appendChild(btn);
}
