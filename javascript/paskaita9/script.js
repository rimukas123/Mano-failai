//Parašykite funkciją convertMStoKMH, kuri konvertuoja greitį iš metrų per sekundę į kilometrus per valandą.

//const convertMStoKMH=(speedMS)=>speedMS*3.6;
//console.log(convertMStoKMH(10));

//Parašykite funkciją compareNumber, kuri palygina du skaičius ir grąžina didesnįjį iš jų. Jei skaičiai yra lygūs, funkcija turėtų grąžinti "lygūs". Įsitikinkite, kad abu argumentai yra skaičiai; jei ne, grąžinkite klaidos pranešimą.
//function compareNumber(num1, num2) {
//    
//    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//        return "Error: most arguments must be numbers" ;
//    }
//    
//   
//    if (num1 > num2) {
//        return num1;
//    } else if (num2 > num1) {
//        return num2;
//    } else {
//        return "eqal" ;
//    }
//}
//
//
//console.log(compareNumber(4, 7)); 
//console.log(compareNumber(5 ,5)); 
//
//console.log(compareNumber(5, '5')); 
//Parašykite funkciją isLeapYear, kuri priima year ir pasako ar metai yra keliamieji. Funkcija turi grąžinti true, jei metai keliamieji, ir false priešingu atveju.
//const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
//console.log(isLeapYear(2020)); // true
//console.log(isLeapYear(2021)); // false

//function isLeapYear(year) {
//    // Patikriname ar metai yra keliamieji
//    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//        return true; // Keliamieji metai
//    } else {
//        return false; // Ne keliamieji metai
//    }
//}
//
//// Pavyzdiniai metai
//console.log(isLeapYear(2020)); // Rezultatas: true
//console.log(isLeapYear(2021)); // Rezultatas: false
//console.log(isLeapYear(1900)); // Rezultatas: false
//console.log(isLeapYear(2000)); // Rezultatas: true
//
//Parašykite funkciją findMaxInArray, kuri ras ir grąžins didžiausią elementą masyve. Galime daryti prielaidą, kad visi array elementai yra skaičia
//
//const findMaxInArray = (arr) => {
//    let max = arr[0];
//    for (let i = 1; i < arr.length; i++) {
//        if (arr[i] > max) {
//            max = arr[i];
//        }
//    }
//    return max;
//};
//
//
//
//
//console.log(findMaxInArray([1, 3, 2, 5, 4])); // 5
//console.log(findMaxInArray([-1, -3, -2, -5, -4])); // -1


//function findMaxInArray(array) {
//    if (array.length === 0) {
//        return "Masyvas yra tuščias."; // Grąžinamas pranešimas, jei masyvas yra tuščias
//    }
//
//    let max = array[0]; // Pirmasis elementas laikomas pradiniu didžiausiu
//    for (let i = 1; i < array.length; i++) {
//        if (array[i] > max) {
//            max = array[i]; // Jei einamasis elementas didesnis už esamą didžiausią, jis tampa nauju didžiausiu
//        }
//    }
//    return max; // Grąžinamas didžiausias elementas masyve
//}
//
//// Pavyzdiniai masyvai
//console.log(findMaxInArray([1, 5, 2, 9, 3])); // Rezultatas: 9
//console.log(findMaxInArray([-10, -5, -2, -9, -3])); // Rezultatas: -2
//console.log(findMaxInArray([])); // Rezultatas: "Masyvas yra tuščias."
//

//Parašykite funkciją sumArry, kuri suskaičiuoja ir grąžina visų elementų sumą masyve. Kaip ir užduotyje prieš tai, galime daryti prielaidą, kad visi array elementai yra skaičiai.
//const  sumArray=(arr)=>{let sum=0;
//    for(let i=0; i<arr.length;i++){
//        sum +=arr[i];
//    }
//    return sum;
//}
//
//
//
//console.log(sumArray([1, 2, 3, 4, 5])); // 15
//
////Sukurkite funkciją arMasyvaiLygūs, kuri palygina du masyvus ir grąžina true, jei jie yra identiški, kitu atveju - false.
//const areArraysEqual = (arr1, arr2) => {
//    if (arr1.length !== arr2.length) return false;
//    for (let i = 0; i < arr1.length; i++) {
//        if (arr1[i] !== arr2[i]) {
//            return false;
//        }
//    }
//    return true;
//};
//
//
//console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
//console.log(areArraysEqual([1, 2, 3], [1, 2, 4])); // false
//function arMasyvaiLygūs(masyvas1, masyvas2) {
//    // Patikriname ar masyvai yra vienodo ilgio
//    if (masyvas1.length !== masyvas2.length) {
//        return false;
//    }
//
//    // Palyginame kiekvieną elementą abiejuose masyvuose
//    for (let i = 0; i < masyvas1.length; i++) {
//        if (masyvas1[i] !== masyvas2[i]) {
//            return false; // Jei bent vienas elementas nesutampa, grąžiname false
//        }
//    }
//    
//    return true; // Jei visi elementai sutampa, grąžiname true
//}
//
//// Pavyzdiniai masyvai
//console.log(arMasyvaiLygūs([1, 2, 3], [1, 2, 3])); // Rezultatas: true
//console.log(arMasyvaiLygūs([1, 2, 3], [1, 2, 4])); // Rezultatas: false
//console.log(arMasyvaiLygūs([], [])); // Rezultatas: true
//console.log(arMasyvaiLygūs([1, 2], [1, 2, 3])); // Rezultatas: false
//
////Sukurkite funkciją reverseString, kuri apverčia eilutę be jokių išorinių funkcijų ar metodų.
////const reverseString = (str) => {
//    let reversed = '';
//    for (let i = str.length - 1; i >= 0; i--) {
//        reversed += str[i];
//    }
//    return reversed;
//};
//
//console.log(reverseString("Labas")); // "sabaL"

//function reverseString(inputString) {
//    let reversedString = ''; // Sukuriame tuščią eilutę, į kurią įrašysime apverstą eilutę
//
//    // Einame per kiekvieną simbolį nuo paskutinio iki pirmo
//    for (let i = inputString.length - 1; i >= 0; i--) {
//        reversedString += inputString[i]; // Pridedame kiekvieną simbolį prie apverstos eilutės
//    }
//
//    return reversedString; // Grąžiname apverstą eilutę
//}
//
//// Pavyzdiniai įvesties tekstai
//console.log(reverseString('labas')); // Rezultatas: sabal
//console.log(reverseString('hello world')); // Rezultatas: dlrow olleh
//console.log(reverseString('12345')); // Rezultatas: 54321
//
////Parašykite funkciją arPalindromas, kuri tikrina, ar žodis yra palindromas. Funkcija turi grąžinti true, jei žodis yra palindromas, priešingu ateju  - false.
//const isPalindrome = (word) => {
//    for (let i = 0; i < word.length / 2; i++) {
//        if (word[i] !== word[word.length - 1 - i]) {
//            return false;
//        }
//    }
//    return true;
//};
//
//console.log(isPalindrome("savas")); // true
//console.log(isPalindrome("svetimas")); // false
//
//function arPalindromas(zodis) {
//    // Paverčiame žodį į mažąsias raidės ir pašaliname tarpus
//    const zodisBeTarpu = zodis.toLowerCase().replace(/\s/g, '');
//
//    // Einame per pusę žodžio ir lyginame simbolius
//    for (let i = 0; i < zodisBeTarpu.length / 2; i++) {
//        // Palyginame simbolius i ir (n - 1 - i), kur n yra žodžio ilgis
//        if (zodisBeTarpu[i] !== zodisBeTarpu[zodisBeTarpu.length - 1 - i]) {
//            return false; // Jei bent viena pora nesutampa, tai nėra palindromas
//        }
//    }
//
//    return true; // Jei visos poros sutampa, tai žodis yra palindromas
//}
//
//// Pavyzdiniai žodžiai
//console.log(arPalindromas('level')); // Rezultatas: true
//console.log(arPalindromas('radar')); // Rezultatas: true
//console.log(arPalindromas('hello')); // Rezultatas: false
//console.log(arPalindromas('A man a plan a canal Panama')); // Rezultatas: true (ignoruojami tarpai)
////Sukurkite funkciją printPyramid, kuri spausdina skaičių piramidę iki nurodyto aukščio. Pavyzdžiui, 3 auktštų piramidė atrodo taip:1
//22
333
//const printPyramid = (height) => {
//    for (let i = 1; i <= height; i++) {
//        let line = '';
//        for (let j = 0; j < i; j++) {
//            line += i;
//        }
//        console.log(line);
//    }
//};
function printPyramid(aukstis) {
    for (let i = 1; i <= aukstis; i++) { // Einame per kiekvieną aukštį
        let eilute = ''; // Kiekvienai eilutei sukuriame tuščią string'ą

        // Pildome eilutę skaičiais i, kurie kartojami i kartų
        for (let j = 1; j <= i; j++) {
            eilute += i; // Pridedame skaičių i prie eilutės
        }

        console.log(eilute); // Spausdiname eilutę
    }
}

// Pavyzdinis kvietimas funkcijos
printPyramid(3);
