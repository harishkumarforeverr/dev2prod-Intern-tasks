// // // fetch("https://jsonplaceholder.typicode.com/users")
// // //   .then((res) => res.json())
// // //   .then((data) => console.log(data));

// // // async function name(){
// // //   return  "working"
// // // }

// // // console.log(name())

// // let f1 = async function () {
// //   return "working";
// // };

// // f1().then((data) => console.log(data));

// // let f1 = async function () {
// //   console.log("2");
// //   debugger;
// //   let a = await fetch("https://jsonplaceholder.typicode.com/users")
// //     .then((res) => res.json())
// //     .then((data) => data);
// //   debugger;
// //   console.log("3");
// //   debugger;
// //   return a;
// // };

// // console.log("1");
// // let a = f1();
// // console.log("5");
// // console.log(a);

// const arr = [10, 20, 30];
// let f1 = arr[Symbol.iterator]();
// console.log(f1.next());
// console.log(f1.next());
// console.log(f1.next().value, f1.next().done);
// console.log(f1.next());

function* f1() {
  console.log(1);
  yield "A";
  console.log(2);
  yield "B";
  console.log(3);
  yield "C";
  console.log(4);
  yield "D";
  console.log(5);
}

let g = f1();
console.log(g.next()) 
console.log(g.next().value);
