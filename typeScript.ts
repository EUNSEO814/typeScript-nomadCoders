// typeScript

//다형성 (polymorphism)
// polymorphism
// 인자들과 반환값에 대하여 형태(타입)에 따라 그에 상응하는 형태(타입)를 갖을 수 있다.

// any와의 차이점은 해당 타입에 대한 정보를 잃지 않는다.
// any는 any로서 밖에 알 수 없지만 generics는 타입 정보를 알 수 있다.

// 'any'를 사용하는 것은 어떤 타입이든 받을 수 있다는 점에서 'generics'과 같지만 함수를 반환하는데 있어 'any'는 받았던 인수들의 타입을 활용하지 못한다

// 즉, 'generics'은 어떤 타입이든 받을 수 있다는 점에서 'any'와 같지만 해당 정보를 잃지 않고 타입에 대한 정보를 다른 쪽으로 전달할 수 있다는 점이 다르다
//generic
// '제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.'
// 방법 1.
// type SuperPrint = {
//   (arr: number[]): void
//   (arr: boolean[]): void
//   (arr: string[]): void
// }

// const superPrint: SuperPrint = (arr) => {
//   arr.forEach(i => console.log(i))
// }

// superPrint([1, 2, 3])
// superPrint([true, false, true])
// superPrint(["a", "b", "c"])
// superPrint([1, 2, true, false])

// 방법 2.
// type SuperPrint = {
//   (arr: number[]): void
//   (arr: boolean[]): void
//   (arr: string[]): void
//   (arr: (number|boolean)[]): void // 선호하지 않음. 모든 가능성을 다 조합해서 만들어야함.
// }

// const superPrint: SuperPrint = (arr) => {
//   arr.forEach(i => console.log(i))
// }

// superPrint([1, 2, 3])
// superPrint([true, false, true])
// superPrint(["a", "b", "c"])
// superPrint([1, 2, true, false])

// 방법 3-1. -ㅍgeneric 사용하기
// type SuperPrint = {
//   <T>(arr: T[]): void
// }

// const superPrint: SuperPrint = (arr) => {
//   arr.forEach(i => console.log(i))
// }

// superPrint([1, 2, 3])
// superPrint([true, false, true])
// superPrint(["a", "b", "c"])
// superPrint([1, 2, true, false])

// 방법 3-2. -generic 사용하기
// type SuperPrint = {
//     <T>(arr: T[]): T
//   }

//   const superPrint: SuperPrint = (arr) => arr[0]

//   const a = superPrint([1, 2, 3])
//   const b = superPrint([true, false, true])
//   const c = superPrint(["a", "b", "c"])
//   const d = superPrint([1, 2, true, false, "hello"])

// 방법 3-3. -generic 2개 사용하기
// type SuperPrint = {
//     <T, M>(a: T[], b:M): T
//   }

//   const superPrint: SuperPrint = (a) => a[0]

//   const a = superPrint([1, 2, 3],"X")
//   const b = superPrint([true, false, true],1)
//   const c = superPrint(["a", "b", "c"],false)
//   const d = superPrint([1, 2, true, false, "hello"],[])

// 방법 4. -generic
// function superPrint<T>(a:T[]){
//     return a[0]
//   }

//   const a = superPrint([1, 2, 3])
//   const b = superPrint([true, false, true])
//   const c = superPrint(["a", "b", "c"])
//   const d = superPrint([1, 2, true, false, "hello"])

// 방법 5-1. -generic
// type Player<E> = {
//   name: string
//   extraInfo: E
// }

// const kim: Player<{ favFood: string }> = {
//   name: "kim",
//   extraInfo: {
//     favFood: "kimchi"
//   }
// }

// 방법 5-2. -generic
// type Player<E> = {
//   name: string
//   extraInfo: E
// }
// type KimPlayer = Player<{ favFood: string }>

// const kim: KimPlayer = {
//   name: "kim",
//   extraInfo: {
//     favFood: "kimchi"
//   }
// }

// 방법 5-3. -generic
// type Player<E> = {
//     name: string
//     extraInfo: E
//   }

//   type KimExtra = {
//     favFood: string
//   }

//   type KimPlayer = Player<KimExtra>

//   const kim: KimPlayer = {
//     name: "kim",
//     extraInfo: {
//       favFood: "kimchi"
//     }
//   }

//   const lynn: Player<null> = {
//     name: "lynn",
//     extraInfo: null
//   }

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
