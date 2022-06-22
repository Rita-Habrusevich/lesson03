//1 Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд.
// Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

function getRandom() {
    return Math.floor(Math.random() * 5 + 1);
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let first = new Promise((resolve, reject) =>{
    let timeout1 = getRandom();
    setTimeout(()=>{
        resolve (1);
    },timeout1 * 1000)
});
let second = new Promise((resolve, reject) =>{
    let timeout2 = getRandom();
    setTimeout(()=>{
        resolve (2);
    },timeout2 * 1000)
});
let third = new Promise((resolve, reject) =>{
    let timeout3 = getRandom();
    setTimeout(()=>{
        resolve (3);
    },timeout3 * 1000)
});
Promise.race([first, second, third])
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    });
//2 Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
// Создайте async функцию, которая с помощью await будетдожидаться результата getNum, затем возводить его в квадрат и выводить на экран.
async function getNum() {
    let result = await new Promise((resolve, reject) => {
        let ran = getRandom();
        setTimeout(() => {
            resolve(ran * ran);
        }, 3000)
    });
    console.log(result)
}
getNum();
//3 Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
// Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10.
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2, а затем найдет сумму полученных чисел и выводит на экран.


async function getNum1() {
    return await new Promise((resolve, reject) => {
        let ran = getRandom();
        setTimeout(() => {
            resolve(ran);
        }, 3000)
    });
}

async function getNum2() {
    return await new Promise((resolve, reject) => {
        let ran = getRandomIntInclusive(6, 10);
        setTimeout(() => {
            resolve(ran);
        }, 5000)
    });
}

async function sum() {
      const num1 = await getNum1();
      const num2 = await getNum2();

    console.log(num1, num2);
    console.log(num1 + num2);
}

sum();
