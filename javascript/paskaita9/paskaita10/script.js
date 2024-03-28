// Combine two strings using the concat() method
//const firstName = 'John';
//const lastName = 'Doe';
//const fullName = firstName.concat(' ', lastName); // fullName = 'John Doe'


//Parašykite funkciją convertToUpperCase, kuri pakeičia visus teksto simboli//us į didžiąsias raides (pvz. labas pakeitų į LABAS).
//const convertToUpperCase='labas';
//con//sole.log(convertToUpperCase.toUpperCase("labas"));//
//
////onst convertToUpperCase = (labas) => text.toUpperCase();
//function convertToUpperCase(text) {
//    return text.toUpperCase();
//}
//
//// Pavyzdys naudojant funkciją:
//let originalText = "labas";
//let convertedText = convertToUpperCase(originalText);
//console.log(convertedText); // Rezultatas: LABAS
//const  extractSubstring= (text) => text.substring(2,7)
//console.log(extractSubstring("Sveikas pasauli")); // "eikas"


//const capitalizeFirstLetter = (text) => {
//    const words = text.split(' ');
//    let result = '';
//
//    for (let i = 0; i < words.length; i++) {
//        const word = words[i];
//        if (word) {
//            result += word.charAt(0).toUpperCase() + word.slice(1);
//        }
//        if (i < words.length - 1) {
//            result += ' ';
//        }
//    }
//
//    return result;
//};
//console.log(capitalizeFirstLetter("labas rytas, pasauli!")); // "Labas Rytas, Pasauli!"
//const censorCurseWords = (text, curseWords) => {
//    let censoredText = text;
//    for (let i = 0; i < curseWords.length; i++) {
//        const curseWord = curseWords[i];
//        while (censoredText.includes(curseWord)) {
//            censoredText = censoredText.replace(curseWord, '****');
//        }
//    }
//    return censoredText;
//};
//console.log(censorCurseWords("This is a badword and another badword.", ["badword"])); // "This is a **** and another ****."
