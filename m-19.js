// function inchToFeet(inch) {
//     let total = inch / 12;
//     return total;
// }
// console.log(inchToFeet(36));

// odd number even number

function oddNumber(number) {
    if (number % 2 != 0) {
        return "this number is odd"
    }
    else {
        return 'not a odd number'
    }
}

// console.log(oddnumber(3));

// console.log(oddNumber(8));


// function evenNumber(number) {

//     if (number % 2 == 0) {
//         return number, "yese this is even number";
//     }


// }
// console.log(evenNumber(10))
// function leepyear(year) {
//     if (year % 4 == 0) {
//         return 'yes this is leep year'
//     }
//     return 'no'
// }
// console.log(leepyear(2021))

// function factorial(number) {
//     let stor = 1;
//     for (let t = 1; t <= number; t++) {
//         stor = stor * t;
//     }
//     return stor;
// }

// console.log(factorial(6))

function factorial(number) {
    let stor = 1;
    let f = number;
    while (f >= 1) {
        stor = stor * f;
        f--;
    }
    return stor;
}
// console.log(factorial(10))

function factrial(number) {
    if (num == 1) {
        return 1;
    }
    return number * factorial(number - 1);
}
console.log(factorial(6))
