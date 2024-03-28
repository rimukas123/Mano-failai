

//console.log(names); // ["odie", "arlo", "zeus", "duke"]

//const names = ["odie", "arlo", "zeus"];
//names.unshift("duke", "beep");

//console.log(names); // ["duke", "beep", "odie", "arlo", "zeus"]
//const numbers = [0, 1, 2, 3];
//numbers.pop();

//console.log(numbers); // [0, 1, 2]

//const numbers = [0, 1, 2, 3];
//numbers.shift();

//console.log(numbers); // [1, 2, 3]

//const numbers = [0, 1, 2, 3];
//const removedItem = numbers.shift();

//console.log(numbers) // 1, 2, 3;
//console.log(removedItem); // 0;

//const room = ["bed", "chair", "lamp", "desk", "carpet"];
//const first = room[0];

//console.log(first); // "bed"

//const room = ["bed", "chair", "lamp", "desk", "carpet"];
//room.shift(); // dabar array yra ["chair", "lamp", "desk", "carpet"]

//const first = room[0];

//console.log(first); // "chair"
//const room = ["bed", "chair", "lamp", "desk", "carpet"];

//const arrayLength = room.length;

//console.log(arrayLength); // 

//const room = ["bed", "chair", "lamp", "desk", "carpet"];

//for (let index = 0; index < room.length; index++) {
//  const furniture = room[index];
//
//  console.log(furniture);
//}

//const room = ["bed", "chair", "lamp", "desk", "carpet"];
//room[1] = "sofa";

//console.log(room);  "bed", "sofa", "lamp", "desk", "carpet"

//const room = ["bed", "chair", "lamp", "desk", "carpet"];
//const result = room.indexOf("desk");

//console.log(result);  3


//const room = ["bed", "chair", "lamp", "desk", "carpet"];
//const result = room.indexOf("window");

//console.log(result); // -1

//const numbers=[2,3,4];
//numbers.unshift(1)
//console.log(numbers)

//[1, 2, 2, 3, 3, 3, 4] -> 4 (skirtingi elementai: 1, 2, 3, 4)

//const numbers1=[1, 2, 2, 3, 3, 3, 4];
//const numbersOk=[];
//for (let index = 0; index < numbers1.length; index++) {
//    if (numbers1=1234){
//        numbersOk.push(numbers1[index])
//    }
//    
//    
//}
//[-3, 1, -2, 4, -5, 6] -> [1, 4, 6]

const numbers2 =[-3, 1, -2, 4, -5, 6];
const positivNumbers=[];
for (let index = 0; index < numbers2.length; index++) {
    if(numbers2[index]>=0) {
        positivNumbers.push(numbers2[index]);
    }
    
    
}