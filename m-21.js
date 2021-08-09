// let dubbol = ['sagor', 'hasan', 'mehedi', 'sagor', 'hasan', 'mehedi'];

// function dabulcheck(arry) {
//     let stor = [];
//     for (const items of arry) {
//         if (stor.indexOf(items) == -1) {
//             stor.push(items);
//         }
//     }
//     return stor;
// }
// // console.log(dabulcheck(dubbol))
// let name = 'my name is mehedi';
// let stor = '';
// for (let f = 0; f < name.length; f++) {
//     let incoming = name[f];
//     stor = incoming + stor;
// }
// // console.log(stor)
// function bookpage(book1, book2, book3) {
//     if (book1 < 0 || book2 < 0 || book3 < 0) {
//         return 'please give a positiv number'
//     }
//     let firstbook = 100;
//     let secendbook = 200;
//     let thirdbook = 300;
//     let total = (firstbook * book1) + (secendbook * book2) + (thirdbook * book3);
//     return total;

// }

// // console.log(bookpage(0, 0, -1));

// let h = 1;
// while (h <= 30) {
//     if (h % 3 == 0 && h % 5 == 0) {
//         console.log('foobar')
//     }
//     else if (h % 3 == 0) {
//         console.log('foo')
//     }
//     else if (h % 5 == 0) {
//         console.log('bar')
//     }
//     else {
//         console.log(h);
//     }


//     h++;
// }

// let phones = [
//     { name: 'symphoni', model: "m-54", price: 9000 },
//     { name: 'nokia', model: "n-95", price: 60000 },
//     { name: 'motorala', model: "g-12", price: 50000 },
//     { name: 'lg', model: "g-9", price: 80000 },
//     { name: 'itel', model: "intex", price: 4500 },
// ];

// function chipestphone(arry) {
//     let stor7 = arry[0];
//     for (const phone of arry) {
//         if (stor7.price > phone.price) {
//             stor7 = phone;
//         }

//     }
//     return stor7;
// }
// console.log(chipestphone(phones));

let sopingCart = [
    { name: 'yellowcolord', price: 6000, queantaty: 1 },
    { name: 'lutino cokateil', price: 6500, queantaty: 1 },
    { name: 'ringneck luti,albino', price: 30000, queantaty: 1 },
    { name: 'suncunor', price: 40000, queantaty: 1 },
];

// function totalsoping(arry) {
//     let stor = 0;
//     for (const bird of arry) {
//         stor = stor + bird.price * bird.queantaty;
//     }
//     return stor;
// }
// console.log(totalsoping(sopingCart));


function birdcount(mile) {
    let first100 = 50;
    let secend100 = 20;
    let aftar200 = 10;
    if (mile < 0 || mile != "Number")
        return 'please give a right amaount';
    if (mile <= 100) {
        let totalbird = first100 * mile;
        return totalbird;
    }
    else if (mile <= 200) {
        let totalmile = mile - 100;
        let totalbird = (secend100 * totalmile) + (first100 * 100);
        return totalbird;
    }
    else {
        let totalmile = mile - 200;
        let totalbird = (aftar200 * totalmile) + (first100 * 100) + (secend100 * 100);
        return totalbird;
    }
}
console.log(birdcount(-1))
