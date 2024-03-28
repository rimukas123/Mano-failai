
const a = 10;
const b = 12;
const sum = a + b;
console.log(sum);
let year=56;
 year-=46;
console.log(year);
const name="Rimas";
const lastname="Skvarnavicius";
const  fullname = name + " " + lastname;
console.log(fullname)
const celsijai = 25;
const farenheitai = (celsijai * 9 / 5) + 32;
// sunkus
const initialBalance =999.99;


const increasedBalance = initialBalance + (0.09 * initialBalance);  


let doubledBalance = increasedBalance * 2;


const finalBalance = doubledBalance - 50;


console.log("Pradinis balansas:", initialBalance.toFixed(2));
console.log("Balansas po papildymo:", increasedBalance.toFixed(2));
console.log("Balansas po daugybos:", doubledBalance.toFixed(2));
console.log("Galutinis balansas:", finalBalance.toFixed(2));

const text1 = "Labanakt";
const text2 = "labanakt";
const result = text1 === text2;
console.log(result);

const number = 10;
const text = "10";
console.log(number != text);
console.log(number == text);
console.log(number === text);

const currentBalance = 50;
const transaction = -50;
const resul = currentBalance + transaction >= 0;
console.log(result);