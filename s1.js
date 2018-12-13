// var array = [1,2,3,4,5,6,7,8,9,10,11,12];

// function inBetween(a,b){
//     return function(elem) {
//         return a <= elem && elem <= b;
//     }
// }

// function filter(array,predicate) {
//     result = [];
//     for(let item of array) {
//         if( predicate(item) ) {
//             result.push(item);
//         }
//     }
//     return result;     
// }

// console.log(filter(array, inBetween(1,5)));

//===================================

// var array = [1,2,3,4,5,6,7,8,9,10,11,12];

// function inBetween(a,b){
//     return function(elem) {
//         return a <= elem && elem <= b;
//     }
// }

// var isScore = inBetween(1,5);

// function filter(predicate) {
//     return function(array) {
//         result = [];
//         for(let item of array) {
//             if( predicate(item) ) {
//                 result.push(item);
//             }
//         }
//         return result;   
//     }
// }

// var select = filter(isScore);

// console.log(filter(array, isScore));

// console.log(select(array));

//======================================

var array = [1,2,3,4,5,6,7,8,9,10,11,12];

inBetween = (a,b) => elem => a <= elem && elem <= b;

var isScore = inBetween(1,5);

filter = (predicate) => array => array.filter(predicate);

var select = filter(isScore);

console.log(select(array));