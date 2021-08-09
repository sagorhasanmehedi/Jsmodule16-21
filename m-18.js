// function bringTheBird(taka) {
//     let mybird = [0];
//     if (taka > mybird) {
//         mybird = taka;
//     }
//     return mybird;
// }

// console.log(bringTheBird(5000));

const sagor = 10;
const mehedi = 30;
const hasan = 50;
function maltiplecation(num1, num2, num3) {
    let total = (num1 * num2 * num3) + 1000;
    return total;
}
// console.log(maltiplecation(sagor, mehedi, hasan));

let ibrahim = {
    name: "ibrahim",
    age: 28,
    hight: "6ft",
    home: "natshal",
    collage: "natshal"
}
// ibrahim.name = 'ibrahim sarkar'
// let ibrahimage = "age";
// ibrahim[ibrahimage] = 40;


// console.log(ibrahim);


const price = 50;
switch (200) {
    case 100:
        console.log('prince');
        break;
    case 200:
        console.log("bajricar");
        break;
    case 1000:
        console.log('java');

    case 4500:
        console.log('lovebird');
        break;
    default:
        console.log('yore bajut is varry small')
}

// console.log(switch (price))

for (let g = 1; g <= 10; g++) {


    if (g % 2 != 0) {
        continue;

    }
    console.log(g);
}