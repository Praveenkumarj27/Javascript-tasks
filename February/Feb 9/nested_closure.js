// case1
function outer() {
  console.log("i am executing...parent/outer");
  function inner() {
    console.log("i am executing...child/inner");
  }
  console.log(inner);
  return inner;
}
console.log("hi");
var globalref_toInner = outer(); //callee
console.log(globalref_toInner); //==>outer()()
globalref_toInner();

// case2 - problem statement

// function outer() {
//   console.log("i am executing...parent/outer");
//   var outer = 90;
//   function inner() {
//     outer = 678;
//     console.log("i am executing...child/inner ", outer);
//   }
//   console.log("value of outer variable now is :: ", outer);
//   // console.log(inner)
//   return inner;
// }
// console.log('hi');
// var globalref_toInner=outer();//callee
// console.log(globalref_toInner)
// globalref_toInner()

// var t=7
// function f(){
//     t=90;
//     console.log(t)
// }
// console.log("before fns call",t)
// f()
// console.log(t)

// case3
// function outer(){
//     console.log('i am executing...parent/outer')
//     var outer=90;
//     function inner(){
//         outer=678;
//         console.log('i am executing...child/inner ',outer)
//     }
//   //  inner()
//    // console.log('value of outer variable now is :: ',outer)
//     // console.log(inner)
//     return inner;
// }
// console.log(outer());//callee

// case 4
// function outer(t) {
//   console.log("i am executing...parent/outer");
//   function inner() {
//     console.log("i am executing...child/inner ", t);
//   }
//   return inner;
// }
// var ret = outer(10); //function inner(){console.log('i am executing...child/inner ',t)}
// console.log(ret);
// ret();

var num = 7;
function myfunction() {
  var num = 90;
  var res = num % 2 == 0 ? "even" : "odd";
  console.log("i completed execution & numb is :: ", res);
}
myfunction();
console.log(num);

//-------------------------------------------------------------------------------------------------------------------

// var message = 'Hello';
// function buildGreeting() {
//     let audience = 'World';
//     console.log(message + ' '+ audience);
// }
// buildGreeting()

// var message = 'Hello';
// function buildGreeting() {
//     let audience = 'World';
// let message = 'Hello';

// function buildGreeting() {
//     let audience = 'World';
//     console.log(message + ' '+ audience);
// }
// }
// console.log(audience);              //not defined

// function buildGreeting() {
//   let message = 'Hello';
// }
// function greetUser() {
//   let audience = 'World';
//   console.log(message);
// }

// greetUser();

// function buildGreeting() {
//   let message = 'Hello';
// }

// function greetUser() {
//   let audience = 'World';
//   console.log(message);
// }

// greetUser();                //not defined

// let message = 'Hello';

// function buildGreeting() {
//    console.log(message);                   //hello
//    let audience = 'World';

//    function greetUser() {
//         console.log(message + ' ' + audience);             //hello world
//     }

//     greetUser();
// }

// buildGreeting();

// function buildGreeting() {
//   let message = 'Hello';

//   function greetUser() {
//       console.log(message);
//   }

//   return greetUser;
// }
// let hello = buildGreeting();
// hello();                             //hello

// function buildGreeting(message) {
//   return function(audience){
//        return message + ' ' + audience;
//   }
// }
// let greeting1 = buildGreeting('Hi');
// let greeting2 = buildGreeting('Hello');

// console.log(greeting1('User')); // Hi User
// console.log(greeting2('World')); // Hello World

var variable = 10;
(() => {
  variable2 = 100;
  console.log(variable); //10
  console.log(variable2); //100
  variable = 20;
  var variable2 = 50;
  console.log(variable); //50
})();

function outer(a) {
  console.log(a);
  function inner1(b) {
    console.log(a + b);
    return function inner2(c) {
      console.log(a + b + c);
    }
    
  }
  return inner1;
}
outer(1)(2)(3);


function disp(){
  return 
  2;
}
console.log(disp())


var result=[]
for(var i=0;i<5;i++){
  result[i]=function(){
    return i;
  }
}
console.log(result[0]());


function run(){
  var b1=a1
  return function(){
    b1+=10;
    return b1
  }
}
const fn=run(50)
fn()
console.log(fn());