var title = document.getElementById("title");
title.style.backgroundColor="cyan";
title.style.color="yellow";



var s = document.getElementsByClassName("bhai");
console.log(s);
s[0].style.backgroundColor="red";
s[0].style.color="black";


// create a div Element

var div = document.createElement("div");
div.className="itme";
div.id="itmes";
// console.log(div);

var h1 =document.createElement("h1");
// console.log(h1);
var text = document.createTextNode("My Name IS Mohammad Azhar");
// console.log(text);
h1.appendChild(text);
console.log(h1);
div.appendChild(h1);
console.log(div);

var body = document.body;
var a1=document.getElementById("title");
body.insertBefore(div,title);
