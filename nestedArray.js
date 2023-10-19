const nestedArray = [
    ['one', 'two', 'three'],
    [1, 2, 3],
    ['A', 'B', 'C']
]

// // entire array
// console.log(nestedArray);
// // first element in the big array - which is also an array
// console.log(nestedArray[0]);
// // but i want to print 'three'
// console.log(nestedArray[0][2]);

// // 'one'
// console.log(nestedArray[0][0]);

// // 2
// console.log(nestedArray[1][1]);

// 'B'
console.log(nestedArray[2]);
console.log(nestedArray[2][1]);

// 'one', 2, 'B'
// console.log(nestedArray[0][0], nestedArray[1][1], nestedArray[2][1]);