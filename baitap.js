//Bài 1
function sumAray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumAray([1, 2, 3, 4, 5]));

//Bài 2
function findMax(arr) {
    let max = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;


}
//let max = -1/0;
console.log(findMax([10, 20, 30, 5])); // 30

//Bài 3

function filterArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));