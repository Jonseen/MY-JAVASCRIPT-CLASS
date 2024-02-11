//Sample ATM code

let balance = 2000000;

function greeting() {
    let customer = prompt("Enter your name: ");
    alert("Good morning, " + " " + customer);
    alert(authenticate());
}

function authenticate() {
    const pin_limit = 4;
    let pin = 0;
    pin = prompt("Enter your 4 digit pin: ");
    //Javascript Window.prompt returns a string value
    //We now convert that string to number
    let pin_converted = parseInt(pin);

    console.log(typeof(pin_converted));
    if ((pin.length == pin_limit) && (typeof(pin_converted) == 'number')) {
        alert("Pin Correct");
        alert(transaction());
    }
    else {
        console.log('The pin is invalid' + typeof(pin));
        alert(authenticate());

    };
};

function appreciation() {
    alert(`Thank you for Banking with us!`);
    alert(greeting());
}

function check_balance() {
    alert(`Your balance is: ${balance}`);
    alert(confirm_exit());
}

function Withdraw() {
    let withdraw_amt = prompt("Enter amount: ");
    alert(`Please take your cash \n 
    You have withdrawn ${withdraw_amt} \n 
    Your balance is ${balance - withdraw_amt}`);
    // balance = balance - withdraw_amt;
    balance -= withdraw_amt;
    console.log(balance);
    alert(confirm_exit());
}

function deposit() {
    let deposit_amt = prompt("Enter a deposit amount: ");
    alert(`You have successfully deposited ${deposit_amt}`);
    balance += deposit_amt;
    console.log(balance);
    alert(confirm_exit());
}

function confirm_exit() {
    let exit = prompt("Do you want to perform another transaction? \n 1. Yes \n 2. No");
    if (exit == 1) {
        alert(transaction());
    }
    else if (exit == 2) {
        alert(appreciation());
    }
    else {
        alert(confirm_exit());
    }
    
}

function transaction() {
   let transaction_num =  prompt(
    "Choose a transaction type \n  1. Check Balance \n 2. Withdraw \n 3. Deposit"
    );
    if (transaction_num == 1) {
        //Check Balance function
        alert(check_balance());
    }
    else if (transaction_num == 2) {
        //Withdraw function
        alert(Withdraw());
    }
    else if (transaction_num == 3) {
        //Desposit function 
        alert(deposit());
    }
    else {
        alert('The input is not valid');
        alert(transaction());
    }
};


function atm() {
    alert(greeting());
    // close();
    // alert(transaction());

}

// atm()