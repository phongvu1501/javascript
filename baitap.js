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

//Bài 4
function countOccurrences(arr, value) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }
    }
    return count;
}
console.log(countOccurrences([1, 2, 3, 2, 1, 2], 2)); // 3


//Bài 5

function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]

//Bài 6
function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

//Bài 7
function sortArrayAscending(arr) {
    return arr.sort((a, b) => a - b);

}
console.log(sortArrayAscending([5, 2, 9, 1, 7, 3])); // [1, 2, 5, 9]

//Bài 8

function findMostFrequent(arr) {
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]] = (counts[arr[i]] || 0) + 1;
    }
    let maxCount = 0;
    let mostFrequent = null;
    for (let key in counts) {
        if (counts[key] > maxCount) {
            maxCount = counts[key];
            mostFrequent = key;
        }
    }
    return mostFrequent;
  }
  console.log(findMostFrequent([1, 2, 3, 2, 1, 2])); // 2
  
  //Bài 9
  
function mergeAndRemoveDuplicates(arr1, arr2) {
    let merged = arr1.concat(arr2);
    let unique = [];
    for (let i = 0; i < merged.length; i++) {
      if (!unique.includes(merged[i])) {
        unique.push(merged[i]);
      }
    }
    return unique;
  }
  console.log(mergeAndRemoveDuplicates([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]

  //Bài 10
  function isSymmetricArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
      if (arr[i] !== arr[arr.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  console.log(isSymmetricArray([1, 2, 3, 2, 1])); // true
  console.log(isSymmetricArray([1, 2, 3, 4, 5])); // false
  

  




