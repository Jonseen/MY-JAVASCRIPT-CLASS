const x = 5;
const y = 7;
const z = 3;

// let result = (x < y) && (y > z); 
let result = !((x < y) || (y > z)); 

console.log(result);