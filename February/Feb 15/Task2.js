// Symbol.iterator

//The Symbol.iterator static data property represents the well-known symbol specifying the method that 
// returns the iterator for an object. If this property is set on an object, it is an iterable and can be
//  used in a for...of loop and various other syntaxes.

const iterable1 = {};

iterable1[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
  return 4;
};

console.log([...iterable1]);



