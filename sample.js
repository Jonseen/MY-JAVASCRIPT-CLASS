// There are more than 4 ways to retrieve elements from your html

const heading = document.querySelector("#heading1");

heading.innerHTML = "Enter two numbers to add";
heading.style.textAlign = "left";

// document.body.style.backgroundColor = "yellow";

let link_tag = document.createElement("a");
let link_content = document.createTextNode("Go to Facebook");
link_tag.appendChild(link_content);

document.body.insertBefore(link_tag, heading);

link_tag.setAttribute("href", "https://www.facebook.com");
link_tag.setAttribute("id", "facebook");

link_tag.style.textDecoration = "none";
link_tag.style.display = "block";
link_tag.style.textAlign = "left";
link_tag.style.color = "black";

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let addBtn = document.getElementById("add-btn");


addBtn.addEventListener("click", () => {
  let num1_value = parseInt(num1.value);
  let num2_value = Number(num2.value);
  let result = document.getElementById("result");

  let total = num1_value + num2_value;

  result.innerHTML = total;
});
