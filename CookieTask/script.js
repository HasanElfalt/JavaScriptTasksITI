

function homeScript(){
    
    console.log("home Script loaded ");

    element = document.getElementById("genderImg");
    
    if(getCookie("gender") == "Male"){
        
        element.src = "img/1.jpg";
    }else{
        element.src = "img/2.jpg";

    }
    
    var element = document.getElementById("emp_id");
    element.innerText = getCookie("empName");
    element.style.color = getCookie("color");
    
    element = document.getElementById("no_times");
    setCookie("visits", parseInt(getCookie("visits"))+1);
    element.innerText = getCookie("visits");
    element.style.color = getCookie("color");

    console.log("home Script End");
}


function MoveToProfile(){
    
    var emp_name = document.getElementById("emp_name").value;
    var color = document.getElementById("color").options[document.getElementById("color").selectedIndex].value;
    var gender= (document.getElementById("male").checked)? "Male":"Female";  

    console.log("empName: "+emp_name);
    console.log("color: " + color);

    setCookie("empName", emp_name);
    setCookie("color", color);
    setCookie("gender",gender);
    setCookie("visits",0);

    location.assign("home.html");
}