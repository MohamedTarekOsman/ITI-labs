// function add (...rest){
//     let sum=rest.reduce((prev,current,currentindex,rest)=>
//     {
//         return(prev+current)
//     },0)
//     console.log(sum)
// }
// add(4,4,5);

// ///////////////////////////////////1////////////////////////////////////////

// function two1(n1=0,n2=0){
//     return(n1+n2)
// }
// console.log(two1(1,2))
// two2 = (n1 = 0, n2 = 0) => { return n1+ n2;};
// console.log(two2(2,3));
// let two3 = function (n1 = 0, n2 = 0) {
//     return n1+ n2;
// };
// console.log(two3(3,4));

// ///////////////////////////////////2////////////////////////////////////////

// let num1=2;
// let num2=1;
// console.log(`num1 before=${num1} , num2 before=${num2}`);
// [num1, num2] = [num2,num1];
// console.log(`num1 after=${num1} , num2 after=${num2}`);

///////////////////////////////////3////////////////////////////////////////

// let myObject={name:"Mahmoud",age:27};
// let first={...myObject};
// let second = Object.assign({}, myObject);
// console.log(first);
// console.log(second);

///////////////////////////////////4///////////////////////////////////////

//  let myObject = { name: "Mahmoud", age: 27 };
//  let {name:name1 , age:age1}=myObject;
//  console.log(age1);
//  console.log(name1);

///////////////////////////////////5///////////////////////////////////////

//  class Animals{
//     constructor(name,age)
//     {
//         this.name=name;
//         this.age=age;
//     };
//     sayinfo() {
//         console.log(
//           `I’m an Animal and my name is ${this.name}  and age is ${this.age} years `
//         );
//     }
//  }

///////////////////////////////////6///////////////////////////////////////

// class Cats extends Animals {
// constructor(name, age) {
//     super(name,age);
// }
// sayinfo ()  {
//     console.log(
//     `I’m a Cat and my name is ${this.name}  and age is ${this.age} years `
//     );
// };
// }

///////////////////////////////////7///////////////////////////////////////

// import * as funlib from "./lib.js";
// console.log(funlib.sum(4, 5));
// console.log(funlib.sub(4, 5));
// console.log(funlib.mul(4, 5));
// console.log(funlib.div(4, 5));

///////////////////////////////////8///////////////////////////////////////

// let Fruits = ["Apples", "Strawberry", "Banana", "Orange", "Mango", "Avocado", "Melon"];

// let t1=Fruits.every(el=>typeof (el)=="string");
// console.log(t1);

// let t2 = Fruits.some(el => el[0] == "N");
// console.log(t2);

// let narr = Fruits.filter((el) => el[0] == "M" || el[0] == "A");
// console.log(narr);


// Fruits.forEach(el=>{
//     console.log(`i like ${el}`);
// })
