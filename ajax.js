var ajax = new XMLHttpRequest()
ajax.open("get", script.php?first=John&last=Smith, true)
ajax.send();
ajax.onreadystatechange = function() {
    if(ajax.readyState == 4 &ajax.status == 200) {
            success: (ajax.responseText);
               }
    }
}


