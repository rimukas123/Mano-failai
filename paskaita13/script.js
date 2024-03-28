//Parašykite funkciją addElement, kuri naudoja push() metodą, kad pridėtų naują elementą į masyvą.
const addElement = (arr, element) => {
    arr.push(element);
    return arr;
};
console.log(addElement([1, 2, 3], 4)); // [1, 2, 3, 4]

//Sukurkite funkciją mergeArrays, kuri sujungia du masyvus į vieną.

const  mergeArrays=(arr1,arr2)=>[...arr1,...arr2];

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

//Parašykite funkciją addMultipleElements, kuri naudoja spread operatorių ..., kad pridėtų kelis elementus į masyvą. 
const addMultipleElements=(arr,...number)=>[...arr,...number];


console.log(addMultipleElements([1, 2, 3], 4, 5, 6)); // [1, 2, 3, 4, 5, 6]

//Parašykite funkciją doubleNumbers, kuri naudoja map() metodą, kad padvigubintų kiekvieną masyvo elementą.

const doubleNumbers=(arr)=>arr.map(number=>number*2)
console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]

//Parašykite funkciją findUnique, kuri grąžina unikalius elementus iš masyvo.
const findUnique=(num)=>[...new Set(num)]
console.log(findUnique([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

//Jūsų užduotis - sukurti funkciją planTrip, kuri nustato, ar galima atlikti kelionę neperkraunant transporto priemonės. Transporto priemonė gali pavežti iki 200 kg. Funkcija priima masyvą su daiktų svoriais ir nustato, ar bendras svoris neviršija leistinos ribos.

const planTrip = (items) => items.reduce((total, item) => total + item, 0) <= 200;
console.log(planTrip([30, 70, 90])); // true
console.log(planTrip([100, 85, 60])); // false

//Sukurkite funkciją findMostFrequent, kuri nustato ir grąžina dažniausiai pasitaikantį elementą masyve.


const findMostFrequent = (arr) => {
    const counts = {};
    let maxCount = 0;
    let mostFrequent;

    arr.forEach((item) => {
        counts[item] = (counts[item] || 0) + 1;
        if (counts[item] > maxCount) {
            maxCount = counts[item];
            mostFrequent = item;
        }
    });

    return mostFrequent;
};
console.log(findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3])); 
//Sukurkite funkciją findMissingNumber, kuri randa trūkstamą skaičių iš eilės. Funkcija priima masyvą su skaičiais nuo 1 iki n. Jeigu masyve truksta bent vieno skaičiaus, funckija grąžina pirmą skaičių kurio trūksta eilėje. Jeigu visi skaičiai surašyti iš eilės, grąžina koks turėtų būti sekantis.
const findMissingNumber = (arr) => {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
    return expectedSum - actualSum;
};
console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3
console.log(findMissingNumber([1, 2, 3, 4, 5, 6])); // 7
//Sukurkite funkciją generateChessBoard, kuri generuoja n x n šachmatų lentą kaip dvimatį masyvą, kur kiekvienas elementas yra arba 'B' (juoda), arba 'W' (balta). Pavyzdžiui, 3x3 lenta turėtų atrodyti: 
const generateChessBoard = (size) => {
    const board = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push((i + j) % 2 === 0 ? 'W' : 'B');
        }
        board.push(row);
    }
    return board;
};
console.log(generateChessBoard(3)); // [['W', 'B', 'W'], ['B', 'W', 'B'], ['W', 'B', 'W']]