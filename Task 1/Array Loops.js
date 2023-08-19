// let fullName = 'Ulfat Zakirli Rovshen'

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)

// let fullName = "Nurlan Islamov Nizami";
// let lettersArray = fullName.split("");
// console.log(lettersArray);

// 2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin

// let fullName = "Nurlan Islamov Nizami";
// let lettersArray = fullName.split("");
// let fName = lettersArray.slice(7, 14);
// let lastName = lettersArray.slice(0, 7);
// let surName = lettersArray.slice(15);

// let reversedName = fName.concat(lastName, surName);

// console.log(reversedName);

// 3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin(join)

// let fullName = "Nurlan Islamov Nizami";
// let lettersArray = fullName.split("");
// let fName = lettersArray.slice(7, 14);
// let lastName = lettersArray.slice(0, 7);
// let surName = lettersArray.slice(15);
// let reversedName = fName.concat(lastName, surName);
// let newArrayAsString = reversedName.join('');
// console.log(newArrayAsString);
// console.log(lettersArray);

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

// let arr = [
//   4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2,
//   5, 6, 3, 7, 3, 7,
// ];

// //4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

// let findFive = 5;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === findFive) {
//     count++;
//   }
// }
// console.log(count);

// //5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// //6) arrayda tekrar olunan reqemleri artan sira ile duzun

// let repeatedNumbers = [...new Set(arr.filter((num, index) => arr.indexOf(num) !== index))];
// repeatedNumbers.sort((a, b) => a - b);
// console.log(repeatedNumbers);

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)

// let maxNumber = Math.max(...arr);
// console.log(maxNumber)
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === maxNumber) {
//     count++;
//   }
// }
// console.log(count);

// 8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)

// let ad = "Nurlan";
// console.log("Menim Adim Nurlandir");
// let countLet = ad.length
// console.log("Addaki herflerin sayi "  + countLet);
// let ox = arr.includes(countLet);
// console.log("include var?" , ox);
// console.log("Arrayda olan herfler:", allLettersExist);

// //9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 === 2) {
//     a = i;
//     b = arr[i];
//     break;
//   }
// }

// console.log("Qaliqi 2 olan regem:", b);
// console.log("Index:", a);

// 10) arraydaki en boyuk reqemin ilk indexini tapin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let maxNumber = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > maxNumber) {
//     maxNumber = arr[i];
//     maxNumberIndex = i;
//   }
// }

// console.log("En boyuk reqem:", maxNumber);
// console.log("index:", maxNumberIndex);

// 11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let indexFour = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     indexFour.push(i);
//   }
// }

// console.log("4 reqeminin indexleri:", indexFour);

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let maxIndex = -1;
// let minIndex = -1;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 5) {
//     if (maxIndex === -1 || i > maxIndex) {
//       maxIndex = i;
//     }
//     if (minIndex === -1 || i < minIndex) {
//       minIndex = i;
//     }
//   }
// }
// console.log("5 regeminin en maximal indexi:", maxIndex);
// console.log("5 regeminin en minimal indexi:", minIndex);

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let newArray = arr.filter(num => num > 2);
// console.log("Yeni array:", newArray);
// console.log("Kohne array" , arr);
// let difference = arr.length - newArray.length;
// console.log("Uzunluq ferqi:", difference);

//14) 7 reqeminin indexleri cemini tapin.

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let sumOfIndexes = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 7) {
//     sumOfIndexes += i;
//   }
// }

// console.log("7 reqeminin indexlerinin cemi:", sumOfIndexes);

// let arr2 = [
//   {
//     name: "test",
//     key: 1,
//   },
//   {
//     name: "task",
//     key: 2,
//   },
//   {
//     name: "tanqo",
//     key: 3,
//   },
//   {
//     name: "like",
//     key: 4,
//   },
//   {
//     name: "task",
//     key: 5,
//   },
//   {
//     name: "trust",
//     key: 6,
//   },
//   {
//     name: "test",
//     key: 7,
//   },
//   {
//     name: "last",
//     key: 8,
//   },
//   {
//     name: "tanqo",
//     key: 9,
//   },
//   {
//     name: "elephant",
//     key: 10,
//   },
//   {
//     name: "love",
//     key: 11,
//   },
//   {
//     name: "small",
//     key: 12,
//   },
//   {
//     name: "little",
//     key: 13,
//   },
// ];

//Aşağıdakı hər bir taskı function icərisində yazın.

//example task 16 with method///////////////////////////////////
// function findT() {
//     let newArr = []
//     arr2.map((item) => item.name.toLocaleLowerCase().startsWith('t') ? newArr.push(item) : item)
//     return newArr
// }

// console.log(findT());

// example: task 16 with for loop////////////////////////////////
// function findT2() {
//     let newArr = []
//     for (let i = 0; i < arr2.length; i++) {
//         if (arr2[i].toLocaleLowerCase().startsWith('t')) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(findT());

//QEYD Bu tasklarda arr2 istifade edilecekdir

// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

// function startT(arr) {
//   return arr.filter(
//     (item) => item.name.startsWith("t") || item.name.startsWith("T")
//   );
// }
// const newArray = startT(arr2);
// console.log(newArray);

// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

// function tt(arr) {
//     return arr.filter(item => item.name.startsWith('t') && item.name.endsWith('t')).length;
// }

// const totalCount = tt(arr2);
// console.log(totalCount);

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

// function tKey(arr) {
//     return arr
//         .filter(item => item.name.startsWith('t') && item.name.endsWith('t'))
//         .reduce((sum, item) => sum + item.key, 0);
// }
// const totalSum = tKey(arr2);
// console.log(totalSum);

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// function eBiten(arr) {
//   return arr.map((item) => ({
//     ...item,
//     name:
//       item.name.charAt(item.name.length - 1).toLowerCase() === "e"
//         ? "SuperDev"
//         : item.name,
//   }));
// }
// const newArray = eBiten(arr2);

// console.log(newArray);

// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin

// function uzunKeyTap(arr) {
//     return arr.reduce((acc, item) => (item.name.length > acc.name.length ? item : acc)).key;
// }

// const uzunKeyName = uzunKeyTap(arr2);
// console.log(uzunKeyName);

// // 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin

// function indexSquare(arr) {
//     const longestIndex = arr.reduce((acc, item, index) => (item.name.length > arr[acc].name.length ? index : acc), 0);
//     return longestIndex ** 2;
// }
// const squareIndex = indexSquare(arr2);
// console.log(squareIndex);

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.

// function fourLetters(arr) {
//     return arr.filter(item => item.name.length === 4);
// }
// const newArray = fourLetters(arr2);
// console.log(newArray);

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin

// function findNameOfMaxKey(arr) {
//     const maxKeyItem = arr.reduce((acc, item) => (item.key > acc.key ? item : acc));
//     return maxKeyItem.name;
// }
// const nameOfMaxKey = findNameOfMaxKey(arr2);
// console.log(nameOfMaxKey);

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.

// const ikiLİndex = [];
// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i].name.toLowerCase().split('l').length - 1 === 2) {
//     ikiLİndex.push(i);
//   }
// }

// console.log("2 'L' herfi olan indexleri:", ikiLİndex);

// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
// function findKeysWithDoubleT(arr) {
//     return arr
//         .filter(item => (item.name.match(/t/gi) || []).length === 2)
//         .map(item => item.key);}
//         const keysWithDoubleT = findKeysWithDoubleT(arr2);
// console.log(keysWithDoubleT);
