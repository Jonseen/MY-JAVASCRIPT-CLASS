document.body.style.backgroundColor = "#ffffff";

const greet = document.getElementById('morning');

// let greet = document.getElementsByClassName("morning1");

greet.innerHTML = "I found you from my Javascript. Wohooo!";
greet.style.backgroundColor = "red";
greet.style.color = "white";
greet.style.display = "none";

// greet.innerHTML = "Good Morning";


let anchor_tag = document.getElementById('anchor-tag');

anchor_tag.setAttribute('target', '_blank');

document.querySelector('h2').setAttribute('id', 'text');