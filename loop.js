// let i = 0;
// let num = 5;

//For Loop
// for (i = 1; i <= num; i++) {
//     console.log("This is the number " + i + "count");
// }

//While Loop

//Syntax
// while (condition) {
//     statement;
// }

// i = 0;

// while (i < 10) {
//   console.log(`I am working ${i}`);
//   i++;
//   if (i == 7) {
//     console.log("This is the seventh count");
//     continue;
//   }
// }

//do...while Loop

// i = 0;

// do {
//   console.log(`I am working ${i}`);
//   i++;
//   if (i == 7) {
//     console.log("This is the seventh count");
//     continue;
//   }
// } while (i < 10);


let age = [ 24, 27, 29, 42, 61];

age.forEach(printItems);

function printItems(evalsam, index, age) {
    console.log(`The item here is ${evalsam}`);
    console.log(age);
    console.log(index);
}



// for (evalsam of age) {
//     console.log(`This is the ${evalsam} age`);
// }