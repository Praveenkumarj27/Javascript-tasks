// console.dir()
//       The method console.dir() shows an interactive list of the properties of the specified JavaScript
// object.The output is presented as a hierarchical listing with disclosure triangles that let you see the 
// contents of child objects
     var person ={
        name:"praveen",
        age:25
     }
    var employee={
        name:"john"
    }
 
    console.log(person,employee);
    console.dir(person,employee);


// console.error()
//      The console.error() method outputs an error message to the Web console.  
     var age=17
     if (age>=21) {
        console.log("you are eligible for vote")
     } else {
        console.error("you are not eligible for vote")
     }

// ---------------------------------------------------------------------------------------------
//CONVERSION

// convert number to string
var num=20
var str=String(num)
console.log(str);               // 20
typeof(str)                     // string

// convert boolean to string
var a=true
var string=String(a);
console.log(string)                // true
typeof(string)                     // string

// convert boolean to number
var number=Number(a)         
console.log(number);               // Not a Number
typeof(number)                     // number

// convert boolean to float
var f=parseFloat(a) 
console.log(f);                // Not a Number
typeof(f)                      //number     


// How to create a object in js
    // Create a single object using object literal
    // using new keyword
    // using Object.create()
    // using Object.assign()
    // using classes

    var employee={
        name:"Praveen",
        age:25
    }

    var person=new Object()
    person.name="Praveen";
    person.age=25

    var a={name:"john"}
    var m = Object.create(a, { sub: {value: 'abc'} , std: {value: 'c'}})
    console.log(`the value of m ${m}`);

    const object1 = {  
        a: 1,  
        b: 2,  
        c: 3  
      };  
      const object3= {  
        g: 1,  
        h: 2,  
        i: 3  
      };    
        
      const object2 = Object.assign( object1,{c: 4, d: 5},);  
      const object4 = Object.assign({g: 34, h: 25}, object3);  
      console.log(object2.c, object2.d);    // 3,5
      console.log(object4.g, object4.h);    // 1,2


   

// use strict
  //  It helps you to write cleaner code,like preventing you from using undeclared variables.

var a=10
console.log(a);      //10

"use strict";
a=10
console.log(a);       //error

// What is the output of

typeof(null)                     //object
typeof(undefined)                // undefined
console.log(null===undefined)    // false
console.log(null==undefined)     // true

console.log(1===true)           // false
console.log(0===false)          // false
console.log(1==true)            // true
console.log(0==false)          //true