
document.getElementsByClassName("center")[0].firstElementChild.style.textAlign="right"; 

document.getElementsByClassName("center")[0].lastElementChild.firstElementChild.type="circle";

let clonedElement = document.getElementById("header").firstElementChild.cloneNode(true);
clonedElement.style.texAlign = "left";
document.body.appendChild(clonedElement);
