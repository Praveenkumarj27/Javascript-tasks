// var p1=Promise.all([
//   fetch('https://jsonplaceholder.typicode.com/posts'),
//   fetch('https://jsonplaceholder.typicode.com/users'),
//   fetch('https://jsonplaceholder.typicode.com/comments'),
// ])
//   p1.then(function (responses) {
//     return Promise.all(
//       responses.map(function (response) {
//         return response.json();
//       })
//     );
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// Task 2:-

// var a=fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log("error: " + err));

//-----------------------------------------------------------------------------------------------------------
//promise:-

//It is an object,it is used to handle the asynchronous result of an operation.
//syntax: var p1=new Promise(()=>{})

//Inside the promise ,it will take a function as parameter.
//Inside the function ,we have two important parameters : resolve and reject
//Promise states:-
// Pending,
// fullfilled,
// rejected


// var age = parseInt(prompt("enter your age"));
// var p1 = new Promise((resolve, reject) => {
//   if (age > 18) {
//     resolve("your are eligible");
//   } else {
//   reject("you are not eligible");
//   }
// });

// p1.then((res) => console.log(res)).catch((err) => console.log(err));
// console.log(p1);

//-------------------------------------------------------------------------------------------------

// There can be only a single result or an error
// The executor should call only one resolve or one reject. Any state change is final.

// All further calls of resolve and reject are ignored:

// let promise = new Promise(function(resolve, reject) {
//   resolve("done");

//   reject(new Error("…")); // ignored
//   setTimeout(() => resolve("…")); // ignored
// });

//----------------------------------------------------------------------------------------------------------

//Promise Chanining:-

function calculate(n) {
  return new Promise((resolve, reject) => resolve(2 * n), 2000);
}
calculate(5)
  .then((data) => {
    console.log(data);   //10
    return calculate(data);
  })
  .then((data1) => {
    console.log(data1);
    return calculate(data1);   //
  })
  .then((data2) => {
    console.log(data2);
    return calculate(data2);
  });


  //------------------------------------------------------------------------------------------------------------------------------

  // Promise.all
  //   It is going to take the array of promises 
  //   o/p:It is an array of promises

  Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then((data)=>console.log(data));




//-------------------------------------------------------------------------------------------------------------------------------

  //Difference between promise and callback

// A promise is an object which is used to handle the asynchronous result of an operation.
// The promise constructor takes one argument, a callback function with two parameters, resolve and reject.
// We can call .then on a Promise as many times as we want


// A callback is a function that is passed to an another function and also known as a higher-order function. 
// In another words, when any function accepts another function as an argument then this contained function
//  is called callback function.
// There can be only one callback.


