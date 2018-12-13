array = [
    {color: 'black', width: 10, height: 15},
    {color: 'yellow', width: 15, height: 25},
    {color: 'black', width: 15, height: 10},
    {color: 'black', width: 30, height: 10},
    {color: 'yellow', width: 15, height: 25}
];

var hasColor = color => elem => elem.color === color;
var calcArea = element => element.width * element.height;
var add = (a, b) => a + b;

var isBlack = hasColor('black');

var filter = predicate => array => array.filter(predicate);  
var map = func => array => array.map(func);
var reduce = func => array => array.reduce(func);

var selectBlackItems = filter(isBlack);
var calcAreas = map(calcArea);
var sum = reduce(add);

//console.log( array.filter(isBlack).map(calcArea).reduce(add) );

//console.log( funcForAddArrayWithAreas(funcForArrayWithAreas(blackItems(array))) );

// function flow (f1,f2,f3) {
//     return array => f3(f2(f1(array)));
// }

// function flow (...funcs) {
//     switch (funcs.length){
//         case 1:
//             return data => funcs[0](data);
//         case 2:
//             return data => funcs[1](funcs[0](data));
//         case 3:
//             return data => funcs[2](funcs[1](funcs[0](data)));
//         default:
//             return data => {
//                 for(let i = 0; i < funcs.length; i++){
//                     data = funcs[i](data);
//                     if( i+1 === funcs.length) {
//                         return data;
//                     }
//                 }
//             }
//     }
// }

// var abc = flow(
//     filter(isBlack),
//     map(calcArea),
//     reduce(add)
// );

// function flow (...funcs) {
//     return data => {
//         for(let i = 0; i < funcs.length; i++){
//             data = funcs[i](data);
//             if( i+1 === funcs.length) {
//                 return data;
//             }
//         }
//     }
// }

// function flow (...funcs) {
//     return data => {
//         funcs.forEach(function(func){
//             data = func(data);
//         });
//     }
// }

//console.log(abc(array));

//Исходя из последней версии function flow мы написали эту херь:
let flow = (...funcs) => data => funcs.reduce((result, func) => func(result), data);

var abc = flow(
    selectBlackItems,
    calcAreas,
    sum
);

console.log(abc(array));