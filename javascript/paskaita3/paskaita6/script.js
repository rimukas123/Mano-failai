//Parašykite JavaScript ciklą, kuris atspausdina skaičius nuo 1 iki 5.
//const numbers=(1,2,3,4,5);
//for(let i=1;i<=5;i++)
//console.log (i);

//Sukurkite JavaScript programą, kuri suskaičiuoja sumą nuo 1 iki 5 naudojant while ciklą.
//let i=1;
//let sum=0;
//while (i<=5); {
//    sum+=i;
//    i++;
//    console.log(sum)
//    
//}
//Parašykite JavaScript for ciklą, kuris atspausdina visus lyginius skaičius nuo 2 iki 10.

//for (let i = 2; i <= 10; i += 2) {
//    console.log(i);
//}
//Parašykite JavaScript ciklą, kuris atspausdina skaičius nuo 10 iki 1 atbuline tvarka.
//
//for (let i = 10; i >= 1; i--) {
//    console.log(i);
//  }
//Parašykite JavaScript programą, kuri randa didžiausią skaičių iš masyvo naudojant for ciklą. 

//const numbers= [2,1,9,5,8,3];
//let max = numbers[0];
//for (let i = 1; i < numbers.length; i++) {
//    if (numbers[i] > max) {
//        max = numbers[i];
//    }
//}

//console.log(max);
//Sukurkite JavaScript funkciją, kuri išspausdina visus skaičiaus 15 daliklius.
//function spausdintiDaliklius() {
//    const skaicius = 15;
//    
//    console.log(`Skaičiaus ${skaicius} dalikliai:`);
//    
//    for (let daliklis = 1; daliklis <= skaicius; daliklis++) {
//      if (skaicius % daliklis === 0) {
//        console.log(daliklis);
//      }
//    }
//  }
//  
//  // Iškviečiame funkciją
//  spausdintiDaliklius();
// const num=15;
//for (let i = 1; i <= 15; i++) {
//    if (num % i === 0) {
//        console.log(i);
//    }
//}

//Sukurkite JavaScript programą, kuri naudojant for ciklą išfiltruoja ir atspausdina visus nelyginius skaičius iš masyvo [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Nelyginius skaičius saugokite naujame masyve oddNumbers


//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const oddNumbers = [];
//
//for (let i = 0; i < numbers.length; i++) {
//  if (numbers[i] % 2 !== 0) {
//    oddNumbers.push(numbers[i]);
//  }
//}
//
//console.log("Nelyginiai skaičiai iš masyvo:");
//console.log(oddNumbers);
//==================================================
//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const oldNumbers = [];
//for (let i = 0; i < numbers.length; i++) {
//    if (numbers[i] % 2 !== 0) {
//        oldNumbers.push(numbers[i]);
//    }
//}
//
//console.log(oldNumbers);

//Parašykite JavaScript ciklą, kuris atspausdina visus pirminius skaičius nuo 1 iki 20.

//for (let number = 2; number <= 20; number++) {
//    let isPrime = true;
//  
//    for (let divisor = 2; divisor < number; divisor++) {
//      if (number % divisor === 0) {
//        isPrime = false;
//        break;
//      }
//    }
//  
//    if (isPrime) {
//      console.log(number);
//    }
//  }
//======================================================
//  for (let i = 1; i <= 20; i++) {
//    let isPrime = true;
//    if (i > 1) {
//        for (let j = 2; j < i; j++) {
//            if (i % j === 0) {
//                isPrime = false;
//                break;
//            }
//        }
//        if (isPrime) {
//            console.log(i);
//        }
//    }
//}

//Parašykite JavaScript programą, kuri naudojant for ciklą atspausdina pirmus dešimt Fibonačio sekos skaičius.
//
//function fibonacciSequence(n) {
//    let a = 0, b = 1, temp;
//  
//    console.log("Pirmi " + n + " Fibonačio sekos skaičiai:");
//  
//    for (let i = 0; i < n; i++) {
//      console.log(a);
//      temp = a;
//      a = b;
//      b = temp + b;
//    }
//  }
//  
//  fibonacciSequence(10);
 //======================================================
 let n1 = 0, n2 = 1, nextTerm;
for (let i = 1; i <= 10; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    console.log(nextTerm);
}