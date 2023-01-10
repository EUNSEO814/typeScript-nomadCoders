let a = "hello";

a = "bye";

// a = 1
//a 방법 = 타입을 추론하게 하는 방법

// let b : boolean = "x"
//b는 boolean이어야 한다는 것을 명시적으로 지정하는 문법

let b: boolean = false;

//c === number[]
// let c = [1, 2, 3]

// c.push("1")

let c: number[] = [];
c.push(1);

// 간단한것은 타입스크립트가 추론하게 하는 방법이 좋음. 코드가 짧아짐.
const player = {
  name: "kim",
};

// player.name = 1
// player.hello()

// optional parameter (선택적 변수)
// 객체 안에 옵셔널하게 선택해야할 것이 있다면 ?를 붙여주자
// name은 항상 있지만 , age는 있을 수도 없을 수도 있을때.

const player2: {
  name: string;
  age?: number;
} = {
  name: "kim",
};

if (player2.age && player2.age < 10) {
}

//Alias type (별칭 타입)
//타입 재사용

// 첫 글자는 대문자로
type Player = {
  name: string;
  age?: number;
};

const Kim: Player = {
  name: "Kim",
};

const Lee: Player = {
  name: "Lee",
  age: 12,
};

//이런 방법도 있음
//너무 많은 사용은 좋지않음. 코드가 깔끔해질 때 까지만
//   type Name = string
//   type Age = number
//   type Player ={
//     name : Name,
//     age? : Age
//   }

//   const Kim : Player = {
//     name : "Kim"
//   }

//   const Lee :Player = {
//     name :"Lee",
//     age : 12
//   }

//함수가 return하는 타입 지정해주기

type Name = string;
type Age = number;
type Player3 = {
  name: Name;
  age?: Age;
};

//string 타입으로 name을 받고 Player 타입을 return하는 함수
// function playerMaker(name:string) : Player3 {
//   return {
//     // name:name
//     name
//   }
// }

//화살표 함수
const playerMaker = (name: string): Player3 => ({ name });
const kim = playerMaker("kim");
kim.age = 12;

//readonly 속성 추가 - 수정 불가

// type Name = string
// type Age = number
// type Player ={
//   readonly name : Name,
//   age? : Age
// }

// const playerMaker = (name:string) : Player =>({name})
// const kim = playerMaker("kim")
// kim.age = 12
// kim.name ="lee"

// const numbers :readonly number[] = [1, 2, 3, 4]
// numbers.push(1)

// const names : readonly string[] =["1","2"]
// names.push("3")

//map, filter가능 - array를 바꾸지 않음(immutability-불변성)

//Tuple - array를 생성할 수 있게해줌, 최소한의 길이를 가져야하고, 특정 위치에 특정 타입이 있어야함.

// ["kim" , 12 , false]

// const player :readonly[string, number, boolean] = ["kim" , 12 , false]
// player[0] =1
// player[0] = "hi"

//any - TypeScript의 보호장치들로부터 빠져나오고 싶을때 , 모든 타입 비활성화

// const a : any[] =[1, 2, 3, 4]
// const b : any = true

// a + b //정상작동함.

//unknown - 변수의 타입을 미리 알지 못할때 사용

// let a:unknown;

// let b = a + 1

//타입을 먼저 확인해야함

// if(typeof a === 'number'){
//   let b = a + 1
// }

// a.toUpperCase();

// if(typeof a === 'string'){
//   let b = a.toUpperCase();
// }

//void - 아무것도 return하지 않는 함수를 대상으로 사용함. 보통 void를 따로 지정해줄 필요는 없음 -타입스크립트가 자동으로 인식함, void=비어있는것

// function hello(){ //function hello() :void
//     console.log("x")
//   }
//   const a = hello()
//   a.toUpperCase()

//never - 함수가 절.대.로 return하지 않을때. 예를들어 함수에서 exception(예외)이 발생할 때

//return하지 않고 오류를 발생시키는 함수
// function hello():never{
//   throw new Error("xxx")
// }

//또한 never는 타입이 두가지 일 수도 있는 상황에 발생할 수 있음.
function hello(name: string | number) {
  if (typeof name === "string") {
    name; //name:string
  } else if (typeof name === "number") {
    name; //name:number
  } else {
    name; //name:never - 이 코드는 절대 실행되지 않아야 한다는 것.
  }
}

//call signature
// type Add = (a:number, b:number) => number

// const add:Add = (a, b) => a + b

//overloading
//함수가 서로 다른 여러개의 call signatures를 가지고 있을때 발생
//파라미터만 달라지고, 비슷한 로직이 반복되는 경우에 사용할 수 있다.
// 코드의 중복을 줄이고 재사용성을 높이려면 어떻게 해야 할까?
// ⇒ Overloading

// type Add = {
//     (a:number, b:number) : number
//     (a:number, b:string) : number
//   }

//   const add:Add = (a, b) => {
//     if(typeof b === "string") return a
//     return a + b
//   }

// type Config = {
//     path: string,
//     state: object
//   }

//   type Push = {
//     (path:string):void
//     (config:Config):void
//   }

//   const push: Push =(config)=>{
//     if(typeof config === "string"){
//       console.log(config)
//     }else{
//       console.log(config.path)
//     }
//   }

//파라미터의 개수가 다를때
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2);
add(1, 2, 3);

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
