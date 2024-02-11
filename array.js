// const letters = ['a', 'b', 'c', 'a'];

// console.log(letters);

// const letters2 = new Set(['a', 'b', 'c', 'a']);
// letters2.add('d');

// console.log(letters2);

const score = 65;
let grade;

switch (score) {
    case score < 40:
        grade = 'E';
        break;
    case score < 50:
        grade = 'D';
        break;

    case score < 60:
        grade = 'C';
        break;

    case score >= 60 && score < 70:
        grade = 'B';
        break;

    case score <= 100:
        grade = 'A';
        break;

}

console.log(grade);