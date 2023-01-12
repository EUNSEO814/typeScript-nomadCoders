// typeScript

//4강
//classes

// class Player {
//   constructor(
//       private firstName: string,
//       private lastName: string,
//       public nickname: string
//   ) { }
// }

// const kim = new Player("emma", "kim", "엠마")

// 작동안함
// kim.firstName
//문제 없음
// kim.nickname

//추상클래스
//classes

//추상클래스 - 다른 클래스가 상속받을 수 있는 클래스가
//         - 직접 새로운 인스턴스를 만들 수는 없음 ex? new User ~~
// abstract class User {
//   constructor(
//       private firstName: string,
//       private lastName: string,
//       public nickname: string
//   ) { }
// private getFullName(){ -이렇게 하면 kim.getFullName() 사용불가

//추상클래스 안에 들어가 있는 메소드
//   getFullName(){
//       return `${this.firstName} ${this.lastName}`
//   }
// }

// class Player extends User {

// }

// const kim = new Player("emma", "kim", "엠마")

// kim.getFullName()

//protected
// abstract class User {
//   constructor(
//       protected firstName: string,
//       protected lastName: string,
//       protected nickname: string
//   ) { }

//   abstract getNickName(): void

//   getFullName() {
//       return `${this.firstName} ${this.lastName}`
//   }
// }

// class Player extends User {
//   //protected 상속받은 클래스 안에선 접근 가능
//   getNickName(){
//       console.log(this.nickname)
//   }
// }

// const kim = new Player("emma", "kim", "엠마")

// kim.getFullName()
//protected 클래스 밖에서는 접근할 수 없음
// kim.firstName()

// object 의 type을 선언해야할 때 유용함
// type Words = {
//   //property의 이름은 모르지만, 타입만을 알 때 이걸 사용함
//   [key: string]: string;
// };

// let dict :Words ={
//     "potato":"food"
// }

// class Dict {
//   private words: Words;
//   constructor() {
//     this.words = {};
//   }
//   add(word: Word) {
//     if (this.words[word.term] === undefined) {
//       this.words[word.term] = word.def;
//     }
//   }
//   def(term: string) {
//     return this.words[term];
//   }
// }

// class Word {
//   constructor(public term: string, public def: string) {}
// }

// const kimchi = new Word("kimchi", "한국의 음식");

// const dict = new Dict();

// dict.add(kimchi);
// dict.def("kimchi");

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
