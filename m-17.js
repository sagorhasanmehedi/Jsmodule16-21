// arry
let friendName = ["nahid", 'shawon', 'ibrahim', 'rajib'];
let friendAge = [28, 27, 28, 30];
const indexNumberof = friendName.indexOf("nahid");
const indePositionof = friendAge[1];
friendName[1] = "nurallom";

// friendAge.push(900)
// console.log(friendAge.pop());

// comparision & compair
const myLove = 400;
const yourLove = 300;
if (myLove != yourLove) {
    console.log(myLove < yourLove);
}

// if else
const myBagut = 15000;
const loveBird = 4500;
const sunChik = 15000;
const ringNeck = 30000;
// if (myBagut => 10000) {
//     if (myBagut <= loveBird) {
//         console.log("lovebird kinbo");
//     }
//     if (myBagut <= ringNeck) {
//         console.log("ringneck kinbo");
//     }
//     else if (myBagut <= sunChik) {
//         console.log("sunchik kinbo");
//     }


// }

if (myBagut < ringNeck || myBagut < sunChik) {

    if (myBagut <= sunChik) {
        console.log('sunchik');
    }
    else if (myBagut <= ringNeck) {
        console.log('ringneck')
    }
}

