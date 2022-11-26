
function getCookie(cookieName){
    let cookiesArr = document.cookie.split(";");
    //console.log(cookiesArr);
    
    //console.log(cookiesArr);
    let arr =[];
    // make associative array
    for(let i=0; i<cookiesArr.length; i++){
        arr[cookiesArr[i].split("=")[0].trim()] = cookiesArr[i].split("=")[1];
    }
    //console.log(arr);

    return arr[cookieName]
}

function setCookie(cookieName, cookieValue,expireDate){
    if(expireDate==undefined){
        document.cookie = cookieName+"="+cookieValue+";";
    }else{
        document.cookie= cookieName+"="+cookieValue+";expires="+expireDate;
    }
}

function deleteCookie(cookieName){
    let cookieValue = getCookie(cookieName);
    let now = new Date();
    now.setDate(now.getDate()-1); // make the expire date is yesterday
    setCookie(cookieName, cookieValue, now);
}

function allCookieList(){
    return document.cookie.split(";");
}

function hasCookie(cookieName){
    return !!(getCookie(cookieName))
}