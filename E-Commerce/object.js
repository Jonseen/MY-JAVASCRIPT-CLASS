//Creating Objects in Javascript

const Person = {
    first_name: 'Joseph',
    last_name: 'Ekpang',
    full_name: function() {
        return ` ${this.first_name}, ${this.last_name}`;
    },
    height: 5.8,
    color: 'melanin',
    origin: 'Cross-river',
    speak: () => {
        console.log(`
        Hi, my name is ${Person.first_name} ${Person.last_name}
        I am ${Person.height} feets tall
        My color is ${Person.color}
        I am from ${Person.origin} state
        
        `);
    }
}

console.log(Person);
// console.log(Person.speak());