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

// 名前付き関数
function greet(name: string){
  return 'hello' + name
}

// 関数式
let greet2 = function(name: string){
  return 'hello' + name
}

// アロー関数
let greet3 = (name: string) => {
  return 'hello' + name
}

//アロー関数の省略記法
let greet4 = (name: string) => 'hello' + name

// 関数コンストラクター
let greet5 = new Function('name', `return "hello" + name `)


// let log = (message: string, userId?: string) => {
//   let time = new Date().toLocaleTimeString()
//   console.log(time, message, userId || 'Nothing signed in')
// }


let log = (message: string, userId="Nothing signed in") => {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId)
}

log('hello koide')

function sum(numbers: number[]): number{
  return numbers.reduce((total, n) => total + n, 0)
}

console.log(sum([2,2,5,3,2]))

let sumVariadic = (...numbers: number[]):number => {
  return numbers.reduce((total, n) => total + n, 0)
}

console.log(sumVariadic(2,2,5,3,2))


function* createFibonacci() {
  let a = 0
  let b = 1
  while(true){
    yield a;
    [a, b] = [b, a + b]
  }
} 

let f = createFibonacci()
f.next()
f.next()
console.log(f.next())
console.log(f.next())

// 独立した呼び出しシグネスチャ
// function greet(name: string) 
type Greet = (name: string) => void


type Log = (message: string, userId?: string) => void
let loglog:Log = (message, userId = 'nothing') => {
  let time = new Date().toLocaleTimeString;
  console.log(time, message, userId)
} 
loglog('koide')

// 文脈的型付け
function times(
  f: (index: number) => void,
  n: number
) {
  for (let i = 0; i < n; i++){
    f(i)
  }
}

console.log(times(n => console.log(n), 4))


// 呼び出しシグネスチャの省略記法
type Log2 = (message: string, userId?: string) => void

// 完全なシグネスチャ記法
type Log3 = {(message: string, userId?: string):void}


// 関数のオーバーロード
type Reserve = {
  (from: Date, to: Date, destination: string,): void
  (from: Date, destination: string): void
}

let reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
  ) => {
    if(toOrDestination instanceof Date && destination !== undefined){
      //宿泊先を予約する
    } else if(typeof toOrDestination === 'string') {
      // 日帰り旅行を予約する
    }
}

// type CreateElement = {
//   (tag: 'a'): HTMLAnchorElement
//   (tag: 'canvas'): HTMLCanvasElement
//   (tag: 'table'): HTMLTableElement
//   (tag: 'string'): HTMLElement
// }

// let createElement: CreateElement = (tag: string): HTMLElement => {

// }

type Filter<T> = {
  (array: T[], f: (item: T) => boolean): T[]
}

type StringFilter = Filter<string>
let stringFileter: StringFilter = (array, f) => {
  return array
}


// function map(array: unknown[], f: (item: unknown) => unknown): unknown[] {
//   let result = []
//   for (let i = 0; i < array.length; i++) {
//     result[i] = f(array[i])
//   }
//   return result
// } 

// map 関数のジェネリクス化

// type MapFilter<U> = {
//   (array: U[], f: (item: U) => boolean): U[]
// }
function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i])
  }
  return result
}


// チェスのゲームを表す
class Game{}

// チェスの駒

class Piece{
  protected position: Position
  constructor(
    private readonly color: Color,
    x: X,
    rank: Rank
  ){
    this.position = new Position(x, rank)
  }
}

class King extends Piece {}
class Queen extends Piece {}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pawn extends Piece {}

type Color = 'Black' | 'White'
type X = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'

// コマの位置
class Position {
  constructor(
    private x: X,
    private rank: Rank
    ){}
}
  
  




