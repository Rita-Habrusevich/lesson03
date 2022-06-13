//1) Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза.
// У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let qty = 3;
let person1 = [];
let person2 = [];

for(let i = 0; i < qty; i++){
    person1.push(getRandomIntInclusive(1, 6));
    person2.push(getRandomIntInclusive(1, 6));
}
let sum1 = 0;
for (let key of person1) {
    sum1 += key;
}
let sum2 = 0;
for(let key of person2) {
    sum2 += key;
}
if(sum1 > sum2){
    console.log('Person1 победил!')
} else if (sum1 < sum2){
    console.log('Person2 победил!')
} else {
    console.log('Ничья')
}

// 2. Подсчитать как много Пятниц 13-го было с 01/01/2000 до сегодня.

let yearArr = [];
let today = new Date;
let todayYear = today.getFullYear();

for (let i = 2000; i <= todayYear; i++) {
    yearArr.push(i);
}
let qtyFridays = 0;

for (let year = 0; year < yearArr.length; year++) {
    for (let month = 0; month < 12; month++) {
        let date = new Date(year, month, 13);
        if (date.getDay() == 5 && date <= today) {
            qtyFridays++;
        }
    }
}
console.log(qtyFridays);

// 3. Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу.
// a)числа изначальное число целое, числа разбивки - целые (4,6,5)

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let number = 15;
let numberQty = 3;
let result = 0;

while (result !== number) {
    let ranNumb =[];
    for (let i = 0; i < numberQty; i++) {
        ranNumb.push(getRandomIntInclusive(1, number));
    }
    result = ranNumb.reduce(function(sum, elem) {
        return sum + elem;
    });
    if (result === number) {
        console.log(ranNumb);
    }
}

// б) числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)

//В теории это должно работать если подожать.
function generateRandomDecimalInRangeFormatted(min, max, places) {
    let value = (Math.random() * (max - min + 1)) + min;
    return Number.parseFloat(value).toFixed(places);
}
let number2 = 15;
let numberQty2 = 3;
let result2 = 0;

while (result2 !== number2) {
    let ranNumb2 =[];
    for (let i = 0; i < numberQty2; i++) {
        ranNumb2.push(generateRandomDecimalInRangeFormatted(1, number2, 2));
    }
    result2 = ranNumb2.reduce(function(sum, elem) {
        return sum + elem;
    });
    if (result2 === number2) {
        console.log(ranNumb2);
    }
}

//Были попытки реализовать другой вариант, но наверное это не совсем то. Его я совсем не успеваю закончить. Тут я получаю рандомное число и вычитаю его от заданного.

// function generateRandomDecimalInRangeFormatted(min, max, places) {
//     let value = (Math.random() * (max - min + 1)) + min;
//     return Number.parseFloat(value).toFixed(places);
// }
//
// let decimalMaxNumber = 15;
// let step = 3;
// let decimalResult = 0;

// while (decimalResult !== decimalNumber) {
// let ranNumb =[];
// let previousNumber = 0;
// for (let i = 0; i < step; i++) {
//     if (previousNumber) {
//         let newPreviousNumber = generateRandomDecimalInRangeFormatted(0, previousNumber, 2);
//         previousNumber = previousNumber - newPreviousNumber;
//         if (i === step - 1) {
//             ranNumb.push(previousNumber);
//         } else {
//             ranNumb.push(newPreviousNumber);
//         }
//     } else {
//         newPreviousNumber = generateRandomDecimalInRangeFormatted(0, decimalMaxNumber, 2);
//         ranNumb.push(newPreviousNumber);
//         previousNumber = decimalMaxNumber - newPreviousNumber;
//     }
//     let previousNumber = firstNumber;
//     let previousNumber = previousNumber - firstNumber;
//     previousNumber = rest;
//     }
//
//    decimalResult = ranNumb.reduce(function(sum, elem) {
//        return sum + elem;
//     });
//     if (decimalResult === decimalNumber) {
//      console.log(ranNumb);
//     }
// }