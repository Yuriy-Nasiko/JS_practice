// console.log([] === []);
// console.log({} === {});
// console.log(function () {} === function () {});

// const fnA = function () {};
// const fnB = fnA;

// console.log(fnA === fnB);

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("showTag -> this", this);
//   },
// };

// user.showTag();

// function foo() {
//   console.log(this);
// }
// foo();

//

// const showTag = function () {
//   console.log("showTag -> this", this);
//   console.log("showTag -> this.tag", this.tag);
// };

// // const showThis = function () {
// //   console.log("showThis -> this", this);
// // console.log("showThis -> this.name", this.name);
// // };

// showTag();

// const user = {
//   tag: "Mango",
// };

// // user.showUserThis = showTag;
// user.showContext = showTag;

// console.log(user.showContext);
// user.showUserThis();

///

// const showTag = function () {
//   console.log("showTag -> this", this);
//   console.log("showTag -> this.tag", this.tag);
// };

// // showTag();

// const user = {
//   tag: "Mango",
// };

// user.showUserTag = showTag;
// console.log("user", user);

// user.showUserTag();

//

// const user = {
//   tag: "Mango",
//   showTag: function () {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

//

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// const invokeAction = function (action) {
//   console.log(action);

//   action();
// };

// invokeAction(user.showTag);

//

// const fn = function () {
//   console.log("fn -> this", this);
// };

// fn(); // Какой this ???

//

// const book = {
//   title: "React for beginners",
//   showThis() {
//     console.log("showThis -> this", this);
//   },
//   showTitle() {
//     console.log("showTitle -> this.title", this.title);
//   },
// };

// book.showThis(); // Какой this ???

// const outerShowThis = book.showThis;
// outerShowThis(); // Какой this ???

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // Какой this ???

//

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log("changeColor -> this", this);
//     // this.color = color;
//   };

//   // changeColor(); // Какой this ???

//   const sweater = {
//     color: "teal",
//   };

//   sweater.updateColor = changeColor;

//   // sweater.updateColor("red"); // Какой this ???

//   return sweater.updateColor;
// };

// // makeChangeColor();

// const swapColor = makeChangeColor();

// swapColor("blue"); // Какой this ???

//

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log("changeColor -> this", this);
//   };

//   return changeColor;
// };

// const updateColor = makeChangeColor();
// updateColor("yellow"); // Какой this ???

// const hat = {
//   color: "blue",
//   updateColor: updateColor,
// };

// hat.updateColor("orange"); // Какой this ???

// console.log(hat.updateColor);

//

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("increment -> this", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

// updateCounter(10, counter.increment.bind(counter));
// console.log(counter);

// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter);

// const arr = [1, 2];
// console.log(Array.isArray(arr));

// const str = "Mango";
// console.log(Array.from(str));

// const obj = {
//   a: 1,
//   b: 2,
// };

// console.log(Array.from(obj));

//

// function greetGuest(greeting, quevesion) {
//   console.log(`${greeting}, ${this.userName}${quevesion}`);
// }

// const mango = {
//   userName: "Mango",
// };

// const poly = {
//   userName: "Poly",
// };

// greetGuest.call(mango, "Welcome", "!");
// greetGuest.call(poly, "How are you", "?");

// greetGuest.apply(mango, ["Welcome", "!!!"]);
// greetGuest.apply(poly, ["How are you", "nezia"]);

//

// const customer = {
//   firstName: "Jacob",
//   lastName: "Hendrix",
//   getFullNmae() {
//     console.log(`${this.firstName} ${this.lastName}`);
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   callback();
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullNmae.bind(customer));

//

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog);
// console.log(animal.isPrototypeOf(dog));

// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));

// console.log(dog.legs);

//
