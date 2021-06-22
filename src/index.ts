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

let friends: [string, ...string[]] = ['hoge', 'hoge', 'hoge']
console.log(friends)

let as: readonly number[] = [1, 2, 3]
let bs: readonly number[] = as.concat(4)
let three = bs[2]
// as[4] = 5
console.log(as, bs, three)

type A = readonly string[] //readonly string[]
type B = ReadonlyArray<string>  //readonly string[]
type C = Readonly<string[]>   //readonly string[]

type D = readonly [number, string] // readonly[number, string]
type E = Readonly<[number, string]> // readonly[number, string]

function a (x: number){
  if(x < 10){
    return x
  }
  return null
}
console.log(a(9))

declare const loggedInUsername: string;

const users = [
  { name: "Oby", age: 12 },
  { name: "Heera", age: 32 },
];

const loggedInUser = users.find((u) => u.name === "Oby");
console.log(loggedInUser?.age);
