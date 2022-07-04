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

let number2 = 15;
let c = [];
        let ranNumb1 = (Math.random() * (number2 - 1)).toFixed(2);
        let ranNumb2 = (Math.random() * (number2 - ranNumb1 - 1)).toFixed(2);
        let ranNumb3 = number2 - ranNumb1 - ranNumb2;
        c.push(ranNumb1, ranNumb2, ranNumb3.toFixed(2));
        console.log(c);