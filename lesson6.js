let str = '246354';
let str1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
let str2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
if (str1 === str2) {
    console.log('Yes');
} else {
    console.log('No');
}
let n = 1000;
let num = 0;
while (n >= 50) {
    num ++;
   n /= 2;
}
console.log(n);
console.log(num);
let arr = [12, 15, 20, 25, 59, 79];
let sum = 0;
for (let i = 0; i < arr.length; i++){
    sum += arr[i]
}
let average = sum / arr.length;
console.log(average);
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(3, 0, 'a', 'b', 'c');
console.log(arr1);
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(1, 0, 'a', 'b');
arr2.splice(6, 0, 'c');
arr2.splice(8, 0, 'e');
console.log(arr2);
let arr3 = [3, 4, 1, 2, 7];
console.log(arr3.sort((a, b)=> a-b));