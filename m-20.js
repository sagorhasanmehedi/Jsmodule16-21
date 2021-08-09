let number = 1000.1;
let number2 = 999.99;

// console.log(Math.ceil(number2));
// let random = Math.random() * 100;
// console.log(Math.round(random))

let one = [500];
let two = [300];
let three = [200];

let stor = one;

one = two;
two = three;
three = stor;
// console.log(one, two, three);


// let ans = Math.max[bigest];
// console.log(ans);


function bigestnumber(arry) {
    let stor = arry[0]
    for (let g = 0; g <= arry.length; g++) {
        let total = arry[g]
        if (stor > total) {
            stor = total;
        }

    }
    return stor;
}
let bigest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(bigestnumber(bigest));
let stor5 = 0;
for (let y = 0; y < bigest.length; y++) {

    stor5 = stor5 + bigest[y]
}
// console.log(stor5)

function sum(arry) {
    let stor = 0;
    for (let w = 0; w < arry.length; w++) {
        let total = arry[w]
        stor = stor + total;
    }
    return stor;
}
// console.log(sum(bigest));
[0, 1, 1, 2, 3, 5, 8, 13, 21]
let siris = [0, 1];
for (let f = 2; f <= 10; f++) {
    siris[f] = siris[f - 1] + siris[f - 2]
}
// console.log(siris);
let friends = 300;

function PerfectFriend(arry) {
    if (typeof arry != "object") {
        return 'please input a name'
    }
    let stor = [];
    for (const friend of arry) {
        if (friend.length == 9) {
            stor.push(friend)
        }
    }
    return stor;
}
console.log(PerfectFriend(friends))
console.log(typeof friends)
