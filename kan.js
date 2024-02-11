//i want to create a varable
/*
this varable is  
going to ask for 
the username
*/

// i want to create a function that will greet my user 

function greeting() {
    let user_name = prompt("Enter your name pls:");
    let current_time = new Date().getHours();
    console.log(current_time);

    //Deteemining the greeting using conditional statement
    if (current_time >= 0 && current_time < 12 ) {
        alert(`Good morning, ${user_name}`);
    }
    else if (current_time >= 12 && current_time < 16) {
        alert(`Good afternoon, ${user_name}`);
    }
    else if (current_time >= 16 && current_time <= 23) {
        alert(`Good evening, ${user_name}`);
    }
    else {
        alert(`Hi, ${user_name}`);
    }
}

