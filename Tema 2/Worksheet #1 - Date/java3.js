
var c = 60 ;
var t;
    function timedCount() {

document.write(c);
    document.write("<br/>")
   c = c - 1;
   t = setTimeout(timedCount, 1000);
}



timedCount();
