// function num(a, b){
//     console.log(a+b);
// }
// num(3,4);
// // anonimus
// let sum=function(c, d){
//     console.log(c+d);
// }
// sum(4,5);

// const add=(e, f) => e*f;
// console.log(add(4,6));

// let text ="";


// for (let i = 0; i < 10; i++) {
//   if (i === 6) { break; }
// //   text += "The number is " + i + "<br>";
//   console.log('The number is' , i);
// }

// for (let i=0; i<99; i++){

// }

var n=[5,6,7,12,39];
var large=n[0];
var small=n[0];
var sum=0;
for (i=0; i<n.length; i++){
    if(small>n[i]){
        small=n[i];
    }
    if (large<n[i]){
        large=n[i];
    }
    sum +=n[i];
}
console.log( "small number: " ,small);
console.log( "large number: " ,large);
console.log( "total number: " ,sum);