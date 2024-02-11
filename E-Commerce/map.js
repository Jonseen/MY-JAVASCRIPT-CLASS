//Working with maps

const products = new Map([
    ["cream", 2500],
    ["soap", 1000],
    ["airtime", 2000]
])


let total_purchase = ((products.get("cream") * 2) + products.get("soap") + products.get("airtime"));
console.log(total_purchase);