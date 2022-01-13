function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

httpRequest('https://zh.wikipedia.org/', function(ip){
    // console.log(ip)
    document.getElementById('ip_div').innerText = "10.1.46.66";
});