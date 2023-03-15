let age = 18;
let is_subscribed = true;
let user_points = 100;

if (age < 18 && is_subscribed === false) {
    console.log("The user is not 18 and not subscribed");
} else if (age >= 18 && is_subscribed === false) {
    console.log("The user is 18 and not subscribed");
} else if (age < 18 && is_subscribed === true) {
    console.log("The user is not 18 and is subscribed");
} else if (age >= 18 && is_subscribed === true) {
    console.log("The user is 18 and subscribed");
}

if ((age >= 18 && is_subscribed === true) || (user_points >= 100)) {
    console.log("special message");
} 