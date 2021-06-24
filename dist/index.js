"use strict";
// // console.log('hello!!');
// // let a: number = 1 + 2
// // let b: number = a + 3
// // let c = {
// //   apple: a,
// //   banana: b
// // }
// // let d = c.apple * 4
// let a: unknown = 30
// let b = a === 123
// let c = a + 10
// if(typeof a === 'number'){
//   let d = a + 10
// }
// const num = 322
// let s = 1234n
// let hoge = {
//   b: 'x'
// }
// hoge.b
// let fuga = {
//   c: {
//     b: 'f'
//   }
// }
// fuga.c.b
// const bb: {b: number} = {
//   b:12
// }
// bb.b
// let z : {b: number}
// z = {b:100}
// let i
// let j = i * 4
// type Person = {
//   age: number,
//   name: string
// }
// let koide: Person = {
//   age: 36,
//   name: 'koide'
// }
// let color = ['red', 22,]
// color.push('blue')
// color.push(21)
let friends = ['hoge', 'hoge', 'hoge'];
console.log(friends);
let as = [1, 2, 3];
let bs = as.concat(4);
let three = bs[2];
// as[4] = 5
console.log(as, bs, three);
function a(x) {
    if (x < 10) {
        return x;
    }
    return null;
}
console.log(a(9));
const users = [
    { name: "Oby", age: 12 },
    { name: "Heera", age: 32 },
];
const loggedInUser = users.find((u) => u.name === "Oby");
console.log(loggedInUser?.age);
// 名前付き関数
function greet(name) {
    return 'hello' + name;
}
// 関数式
let greet2 = function (name) {
    return 'hello' + name;
};
// アロー関数
let greet3 = (name) => {
    return 'hello' + name;
};
//アロー関数の省略記法
let greet4 = (name) => 'hello' + name;
// 関数コンストラクター
let greet5 = new Function('name', `return "hello" + name `);
// let log = (message: string, userId?: string) => {
//   let time = new Date().toLocaleTimeString()
//   console.log(time, message, userId || 'Nothing signed in')
// }
let log = (message, userId = "Nothing signed in") => {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userId);
};
log('hello koide');
function sum(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum([2, 2, 5, 3, 2]));
let sumVariadic = (...numbers) => {
    return numbers.reduce((total, n) => total + n, 0);
};
console.log(sumVariadic(2, 2, 5, 3, 2));
function* createFibonacci() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let f = createFibonacci();
f.next();
f.next();
console.log(f.next());
console.log(f.next());
let loglog = (message, userId = 'nothing') => {
    let time = new Date().toLocaleTimeString;
    console.log(time, message, userId);
};
loglog('koide');
//# sourceMappingURL=index.js.map