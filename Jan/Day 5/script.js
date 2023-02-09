// Rest operator:
// repn -> ...
// last one in arg of a function
// acts as if it is an array

//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
//providing a way to represent variadic functions in JavaScript.

function deletee(id, ...data) {
  console.log(id, data);
}
deletee(1, 1, 2, 3, 4);

function delete1(...data) {
  console.log(data);
}

var arr = [1, 2, 3, 4, 5];
delete1(arr); // Output:[ [ 1, 2, 3, 4, 5 ] ]  => constructor of array

delete1(3, 4, 5, 56); //Output: [3, 4, 5, 56] => Simple array

function delete2(...data) {
  console.log(data[0]);
}

var arr = [1, 2, 3, 4, 5];
delete2(arr); //(5) [1, 2, 3, 4, 5]

function delete3(...data) {
  console.log(data[0], data[1]);
}

delete3(1, 2, 3, 4, 5); //1 2

// spread operator
// repn => ...
// Object and its method

function delete4(data) {
  console.log(`delete4 = ${(data[0], data[1])}`);
}

arr = [2, 3, 4, 56, 6];
delete4(...arr); //Output:undefined undefined

function delete1(data, ...rem) {
  console.log(data, rem);
}

arr = [2, 3, 4, 56, 6];
delete1(...arr); //Output:2,[3,4,56,6]

arr = [9, 8, 7];
let [a, ...r] = arr; // a=9,r=[8,7]



