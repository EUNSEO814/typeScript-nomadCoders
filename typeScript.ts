// typeScript

// abstract class User {
//   constructor (
//     protected firstName :string,
//     protected lastName:string
//   ){}
//   abstract sayHi(name:string):string
//   abstract fullName():string
// }

// class Player extends User{
//   fullName(){
//     return `${this.firstName} ${this.lastName}`
//   }
//   sayHi(name:string){
//     return `hello! ${name}. my name is ${this.fullName()}`
//   }
// }

// interface User {
//   firstName: string,
//   lastName: string,
//   sayHi(name: string): string,
//   fullName(): string
// }

// class Player implements User {
//   constructor(
//     public firstName: string,
//     public lastName: string
//   ) { }
//   fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
//   sayHi(name: string) {
//     return `hello! ${name}. my name is ${this.fullName()}`
//   }
// }

// interface User {
//   firstName: string,
//   lastName: string,
//   sayHi(name: string): string,
//   fullName(): string
// }

// interface Human {
//   health: number
// }

// class Player implements User, Human {
//   constructor(
//     public firstName: string,
//     public lastName: string,
//     public health: number

//   ) { }
//   fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
//   sayHi(name: string) {
//     return `hello! ${name}. my name is ${this.fullName()}`
//   }
// }

// function makeUser(user: User) :User{
//   return {
//   firstName: "emma",
//   lastName: "kim",
//   fullName: () => "xx",
//   sayHi: (name) => "string"
// }
// }

// makeUser({
//   firstName: "emma",
//   lastName: "kim",
//   fullName: () => "xx",
//   sayHi: (name) => "string"
// })

// type PlayerA = {
//   name: string
// }

// type PlayerAA = PlayerA & {
//   lastName: string
// }

// const playerA: PlayerAA = {
//   name: "emma",
//   lastName: "xx"
// }
//////

// interface PlayerB {
//   name: string
// }

// interface PlayerBB extends PlayerB {
//   lastName: string
// }

// const playerB: PlayerBB = {
//   name: "emma",
//   lastName: "xx"
// }

// interface PlayerB {
//   name: string
// }

// interface PlayerB {
//   lastName: string
// }

// interface PlayerB {
//   health: number
// }

// const playerB: PlayerB = {
//   name: "emma",
//   lastName: "xx",
//   health: 10
// }

//이 둘 모두 추상 클래스를 대처할 수 있음 & 이 둘 모두 타입스크립트에게 오브젝트의 모양을 설명한다는 같은 목적을 이루고 있음

// type PlayerA = {
//   firstName: string
// }

// interface PlayerB {
//   firstName: string
// }

// // class User implements PlayerA {
// //   constructor(
// //     public firstName: string
// //   ) { }
// // }

// class User implements PlayerB {
//   constructor(
//     public firstName: string
//   ) { }
// }
