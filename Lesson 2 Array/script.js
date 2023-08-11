// const students = ["Ali", 'Ferid' ,'Nurlan', 'Natiq']
// console.log(students);
// let index =students.indexOf('Nurlan')
// console.log(index)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);
// const number = numbers.map((number) => number * 5);
// console.log(number);

// const students = ["Ali", "Ferid", "Nurlan", "Natiq"];
// students.pop();
// students.pop();
// students.push("Veli")
// students.push("Sefteli")
// console.log(students);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((sum,number)=> sum * number , 1)
// console.log(sum);

// const sum = (a, b, c) => {
//   return a + b + c;
// };
// console.log(sum(2, 4, 5));
// console.log(sum(8, 5, 2));
// console.log(sum(9, 8, 4));
// console.log(sum(7, 4, 3));
// console.log(sum(1, 3, 6));

// const users = [
//   { id: 1, username: "Ferid", gender: 'male', age: 1 },
//   { id: 2, username: "Nurlan", gender: 'male', age: 3 },
//   { id: 3, username: "Ali", gender: 'male', age: 1 },
//   { id: 4, username: "Panah", gender: 'male', age: 3 },
//   { id: 5, username: "Natiq", gender: 'male', age: 1 },
// ];

// function ageOfUsers() {
//   return users.reduce((sum, user) => {
//     if (user.gender.toLowerCase() == "male") {
//       return sum * user.age;
//     } else {
//       return sum;
//     }
//   }, 1);
// }

// console.log(ageOfUsers());

// const mult = function(){
//     return users.map((user,index)=>user.age*3)
// }

// const names = [
//   { id: 1, username: "Ferid", gender: "male", age: 1 },
//   { id: 2, username: "Nurlan", gender: "male", age: 3 },
//   { id: 3, username: "Ali", gender: "male", age: 1 },
//   { id: 4, username: "Panah", gender: "male", age: 3 },
//   { id: 5, username: "Natiq", gender: "male", age: 1 },
// ];

// function su() {
//     let sum = 0
//   for (let i = 0; i < names.lengt; i++) {
//     sum += names[i].age;
//   }
//   return sum;
// }
// console.log(ageSum());



function eBiten(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name[arr[i].name.length - 1].toLowerCase() === "e") {
        arr[i].name = "SuperDev";
      }
    }
    return arr;
  }
  