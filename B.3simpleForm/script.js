
var t;

var timeout = new Event("waitUserInput");

var obj = document.body;

obj.addEventListener("waitUserInput", function (){
    alert("you should enter any data to the form");
});

function keyUp(){
    clearInterval(t);
    t = setInterval(function (){
        obj.dispatchEvent(timeout);
    }, 30000);
}

keyUp();

function submitForm(){
    return confirm("you are about submiting the form Do you want to continue?")

}