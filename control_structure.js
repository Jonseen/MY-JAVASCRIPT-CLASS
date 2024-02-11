// Syntax for If...else statement

/*

if (condition) {
    statement
}
else if (condition) {
    statement
}
else if (condition) {
    statement
}
else {
    statement
};

*/

//If..else example

// const time_limit = 9;

// let student_arrival = 9.20;

// let shirt_color = 'red';

// if (student_arrival < time_limit) {
//     console.log("Congratulations. You just won a laptop");
// }
// else if ((student_arrival > time_limit) && shirt_color == 'red') {
//     console.log('Congratulations, We go manage give you laptop');
// }
// else {
//     console.log("Bros, na so people dey miss things.");
// }



//Array Example
const time_limit = 9;

let i = 0;

let student_arrival = [9.01, 9.04, 8.36, 8.50, 9.44, 8.01, 9.05, 9.20, 8.00, 8.20];

let shirt_color = ['red', 'blue', 'purple', 'gold', 'brown', 'orange', 'red', 'blue', 'red', 'yellow'];

for (i = 0; i < student_arrival.length; i++) {

    if ((student_arrival[i] < time_limit) || (shirt_color[i] == 'red')) {
        console.log(`Congratulations, student ${i+1} You just won a laptop`);
    }
    else {
        console.log(`Student ${i+1}, na so people dey miss things.`);
    }
}


