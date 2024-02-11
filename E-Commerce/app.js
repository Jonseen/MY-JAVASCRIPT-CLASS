const form = document.querySelector("form");
let btn = document.querySelector("button");
let checkout = document.querySelector("a");

checkout.style.border = "1px solid black";
checkout.style.padding = "3px 10px";
checkout.style.borderRadius = "3px";
checkout.style.display = "none";
checkout.style.cursor = "pointer";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let purchases = [];
  let prices = [200, 100, 50];
  let total_cost = 0;



  document.querySelectorAll('[type = "checkbox"]').forEach((item, index) => {

    if (item.checked === true) {
      purchases.push(item.value);
      let msg = document.querySelector("p");
      msg.innerHTML = `You have added ${purchases.length} items to cart 🥵`;
     
      if (purchases.length >= 1) {
        checkout.style.display = "block";
      } else {
        false;
      }
    } else {
        false;
    }
    total_cost = prices[index];
  });
  checkout.addEventListener("click", () => {
    alert(`Your total cost is ${total_cost}`);
  });
  console.log(purchases);
});
