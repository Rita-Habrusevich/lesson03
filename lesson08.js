// 1 поменять массив в обратном порядке

let a = [1,2,3,4,5];

function getReverseArray(myArray){
    return myArray.reverse()
}
console.log(getReverseArray(a));

//2 найти максимальное значение числа в массиве

function getMaxOfArray(myArray) {
    return Math.max.apply(null, myArray);
}
console.log(getMaxOfArray(a));

//3 записать в массив ряд фибаначи начиная с N члена с длинной массива M

function fibonacci (n, m) {
    let arr = [];
    arr.push(0, 1);
    for(let i = 0; i < m + n - 3; i++){
        arr.push(arr[i]+arr[i+1]);
    }
    arr.splice(0, n - 1);
    return arr;
}
console.log(fibonacci(5,15));

//4 даны 2 4-хзначных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению

function numberTooArr(num) {
    return Number(num);
}
function similarNum (a, b) {
    let arrA = Array.from(String(a), numberTooArr);
    let arrB = Array.from(String(b), numberTooArr);
    let result1 = 0;
    let result2 = 0;
    let arrResult = [];
    for (let i = 0; i < arrA.length; i++)
        if (arrA[i] === arrB[i])
            result1++;
    for(let i = 0; i < arrA.length; i++)
        for (let j = 0; j < arrB.length; j++)
            if (arrA[i] === arrB[j])
                result2++;
    arrResult.push(result1,result2-result1);
    return arrResult;
}
console.log(similarNum(8614, 8361));

//5 сортировка массива по возрастанию/убыванию

let b = [7,8,3,1,2,4,5,6];

function getSortAscend(myArray){
    return myArray.sort((a,b) => a-b)
}
console.log(getSortAscend(b));

function getSortDescend(myArray){
    return myArray.sort((a,b) => b-a)
}
console.log(getSortDescend(b));

//6 удалить из массива все повторяющиеся элементы

let c = [7,8,8,1,2,1,5,6,2];

function deleteDuplicate(myArray) {
    let result = [];
    for (let i = 0; i < myArray.length; i++) {
        if (!result.includes(myArray[i])) {
            result.push(myArray[i]);
        }
    }
    return result;
}
console.log(deleteDuplicate(c));